import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'مبادرات العمار الخيرية',
    short_name: 'مبادرات العمار',
    description: 'التعريف بالأسرة ودعم المبادرات الخيرية',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#391d0f',
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}