const devBaseURL = "https://coderland.ml/"
const proBaseURL = process.env.NEXT_PUBLIC_URL
export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL: proBaseURL

export const TIMEOUT = 5000