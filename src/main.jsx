import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from '@/routes'
import '@/fonts.css'
import '@/index.css'

export const createRoot = ViteReactSSG({ routes })
