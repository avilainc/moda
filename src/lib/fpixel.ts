// Meta Pixel (Facebook Pixel) configuration
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

declare global {
  interface Window {
    fbq: (track: string, event: string, options?: Record<string, any>) => void
    _fbq: typeof window.fbq
  }
}

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options)
  }
}

// Eventos específicos do e-commerce
export const trackViewContent = (product: { id: string; name: string; price: number; category?: string }) => {
  event('ViewContent', {
    content_ids: [product.id],
    content_name: product.name,
    content_type: 'product',
    value: product.price,
    currency: 'BRL',
  })
}

export const trackAddToCart = (product: { id: string; name: string; price: number; quantity?: number }) => {
  event('AddToCart', {
    content_ids: [product.id],
    content_name: product.name,
    content_type: 'product',
    value: product.price,
    currency: 'BRL',
    quantity: product.quantity || 1,
  })
}

export const trackInitiateCheckout = (value: number, items: any[]) => {
  event('InitiateCheckout', {
    content_ids: items.map((item: any) => item.id),
    value,
    currency: 'BRL',
    num_items: items.length,
  })
}

export const trackPurchase = (orderId: string, value: number, items: any[]) => {
  event('Purchase', {
    content_ids: items.map((item: any) => item.id),
    value,
    currency: 'BRL',
    num_items: items.length,
    order_id: orderId,
  })
}

export const trackLead = (content?: string) => {
  event('Lead', {
    content_name: content || 'Contact Form',
  })
}

export const trackSearch = (searchString: string) => {
  event('Search', {
    search_string: searchString,
  })
}
