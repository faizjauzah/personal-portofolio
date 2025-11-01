import localFont from 'next/font/local'

export const meslo = localFont({
  src: [
    {
      path: '../public/fonts/MesloLGS-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MesloLGS-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-meslo',
})
