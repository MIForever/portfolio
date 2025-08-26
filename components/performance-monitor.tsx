"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }

    const measurePerformance = () => {
      if ('performance' in window) {
        // Get navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          // Calculate accurate timing metrics
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          const timeToInteractive = navigation.domInteractive - navigation.fetchStart
          
          // Get paint timing
          const paintEntries = performance.getEntriesByType('paint')
          const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
          
          // Get LCP using PerformanceObserver
          let largestContentfulPaint = 0
          let cumulativeLayoutShift = 0
          
          // Measure LCP
          if ('PerformanceObserver' in window) {
            try {
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                const lastEntry = entries[entries.length - 1]
                if (lastEntry) {
                  largestContentfulPaint = lastEntry.startTime
                }
              })
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
            } catch (e) {
              console.log('LCP observer not supported')
            }
          }
          
          // Measure CLS
          if ('PerformanceObserver' in window) {
            try {
              let clsValue = 0
              const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  const layoutShiftEntry = entry as any
                  if (!layoutShiftEntry.hadRecentInput) {
                    clsValue += layoutShiftEntry.value
                  }
                }
                cumulativeLayoutShift = clsValue
              })
              clsObserver.observe({ entryTypes: ['layout-shift'] })
            } catch (e) {
              console.log('CLS observer not supported')
            }
          }

          // Set metrics after a short delay to allow LCP and CLS to be measured
          setTimeout(() => {
            setMetrics({
              loadTime: Math.max(0, loadTime),
              domContentLoaded: Math.max(0, domContentLoaded),
              firstContentfulPaint: Math.max(0, firstContentfulPaint),
              largestContentfulPaint: Math.max(0, largestContentfulPaint),
              cumulativeLayoutShift: Math.max(0, cumulativeLayoutShift),
              timeToInteractive: Math.max(0, timeToInteractive)
            })
          }, 2000) // Increased delay for better metric capture
        }
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  if (!isVisible || !metrics) return null

  const getPerformanceScore = (fcp: number, lcp: number, cls: number, tti: number) => {
    let score = 100
    
    // FCP scoring (0-1.8s is good)
    if (fcp > 1800) score -= 30
    else if (fcp > 1000) score -= 15
    
    // LCP scoring (0-2.5s is good)
    if (lcp > 2500) score -= 30
    else if (lcp > 1000) score -= 15
    
    // CLS scoring (0-0.1 is good)
    if (cls > 0.25) score -= 30
    else if (cls > 0.1) score -= 15
    
    // TTI scoring (0-3.8s is good)
    if (tti > 3800) score -= 20
    else if (tti > 2000) score -= 10
    
    return Math.max(0, score)
  }

  const score = getPerformanceScore(
    metrics.firstContentfulPaint,
    metrics.largestContentfulPaint,
    metrics.cumulativeLayoutShift,
    metrics.timeToInteractive
  )

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const formatTime = (ms: number) => {
    if (ms === 0) return 'N/A'
    if (ms < 1000) return `${ms.toFixed(0)}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  // Advanced performance insights
  const getPerformanceInsights = () => {
    if (!metrics) return []
    
    const insights = []
    
    if (metrics.firstContentfulPaint > 1000) {
      insights.push('Consider optimizing critical rendering path')
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      insights.push('Optimize images and reduce render-blocking resources')
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      insights.push('Fix layout shifts by setting explicit dimensions')
    }
    
    if (metrics.timeToInteractive > 3000) {
      insights.push('Reduce JavaScript bundle size and optimize execution')
    }
    
    return insights
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 text-xs text-slate-300 z-50 max-w-72">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-white">Performance Monitor</h3>
        <div className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime < 1000 ? 'text-green-400' : 'text-yellow-400'}>
            {formatTime(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>DOM Ready:</span>
          <span className={metrics.domContentLoaded < 500 ? 'text-green-400' : 'text-yellow-400'}>
            {formatTime(metrics.domContentLoaded)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.firstContentfulPaint < 1000 ? 'text-green-400' : 'text-yellow-400'}>
            {formatTime(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.largestContentfulPaint < 2500 ? 'text-green-400' : 'text-yellow-400'}>
            {formatTime(metrics.largestContentfulPaint)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={metrics.timeToInteractive < 2000 ? 'text-green-400' : 'text-yellow-400'}>
            {formatTime(metrics.timeToInteractive)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cumulativeLayoutShift < 0.1 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
      </div>
      
      {/* Scroll Performance Insights */}
      <div className="mt-3 pt-2 border-t border-slate-700/50">
        <div className="text-xs text-slate-400 mb-2">Performance Insights:</div>
        <div className="space-y-1">
          {getPerformanceInsights().map((insight, index) => (
            <div key={index} className="text-xs text-slate-500 bg-slate-800/50 p-2 rounded">
              💡 {insight}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-700/50">
        <div className="text-center text-xs text-slate-400">
          {score >= 90 ? '🚀 Excellent' : score >= 70 ? '⚡ Good' : '🐌 Needs Improvement'}
        </div>
      </div>
    </div>
  )
}
