import { Roboto, Roboto_Mono } from 'next/font/google'

export const roboto = Roboto({
  weight: ['300', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})


export const roboto_mono = Roboto_Mono({
  weight: ['200', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
})