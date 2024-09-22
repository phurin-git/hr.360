import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export const Icon = () => {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw='w-full h-full flex justify-center items-center text-2xl'>
        <img src='http://localhost:3000/logo.svg' alt='Logo' />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

export default Icon;