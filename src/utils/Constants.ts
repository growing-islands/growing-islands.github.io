type BreakpointsType = {
  PC: number
  SP: number
}

export const BREAKPOINTS: BreakpointsType = {
  PC: 769,
  SP: 768,
}

export const PAGE_INFO = {
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://',
  TWITTER: 'https://twitter.com/yumelab1214',
  FACEBOOK: 'https://www.facebook.com/yumelab.co.jp/',
}

export const INTERSECTION_OPTIONS = {
  root: null,
  rootMargin: '0px 0px -100%',
  threshold: 0,
}
