import { type ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { useLenis } from '@/hooks/useLenis'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  useLenis()

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
