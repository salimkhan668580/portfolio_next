import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Salim khan', // TODO: Add a custom title
  description = "I am a software engineer with a passion for building scalable and efficient web applications.", // TODO: Add a custom description
  image = '/salim image.jpg', // TODO: Add a custom image
  icons = '/salim image.jpg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image],
    //   creator: '@chrislonzo'
    // },
    icons,
    // metadataBase: new URL('https://www.chrislonzo.com'),
    // ...(noIndex && {
    //   robots: {
    //     index: false,
    //     follow: false
    //   }
    // })
  }
}
