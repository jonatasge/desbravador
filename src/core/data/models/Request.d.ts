export type Request = (url: string | URL, options?: RequestInit) => Promise<Response>;