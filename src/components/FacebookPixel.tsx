'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as fbq from '@/lib/fpixel'

export function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    fbq.pageview()
  }, [pathname, searchParams])

  return null
}
