interface cropperUtilsConfig {
    imageSrc: string | null;
    pixelCrop: any;
    flip?: { horizontal: boolean; vertical: boolean; }; 
}

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

  export function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180
}
  
export function rotateSize(width: number, height:number, rotation:number) {
    const rotRad = getRadianAngle(rotation)
  
    return {
      width:
        Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
  }


// export  const getCroppedImg = async (config: cropperUtilsConfig
// ): Promise<string | null> => {
//     const { imageSrc, pixelCrop, flip = { horizontal: false, vertical: false } } = config;
    
//     if (imageSrc === null) {
//         return null;
//       }
    
//     const image = await createImage(imageSrc)
//     const canvas = document.createElement('canvas')
//     const ctx = canvas.getContext('2d')
  
   
  
  
//     const croppedCanvas = document.createElement('canvas')
  
//     const croppedCtx = croppedCanvas.getContext('2d')
  
//     if (!croppedCtx) {
//       return null
//     }
  
//     // Set the size of the cropped canvas
//     croppedCanvas.width = pixelCrop.width
//     croppedCanvas.height = pixelCrop.height
  
//     // Draw the cropped image onto the new canvas
//     croppedCtx.drawImage(
//       canvas,
//       pixelCrop.x,
//       pixelCrop.y,
//       pixelCrop.width,
//       pixelCrop.height,
//       0,
//       0,
//       pixelCrop.width,
//       pixelCrop.height
//     )
  
//     // As Base64 string
//  // return croppedCanvas.toDataURL('image/jpeg');
  
//     // As a blob
//     return new Promise<string>((resolve, reject) => {
//         croppedCanvas.toBlob((file) => {
//           if (file !== null) {
//             resolve(URL.createObjectURL(file));
//           } else {
//             reject(new Error("Failed to create blob from image"));
//           }
//         }, 'image/jpeg');
//     });
  
  
//   }

export const getCroppedImg = async (config: cropperUtilsConfig): Promise<string | null> => {
  const { imageSrc, pixelCrop, flip = { horizontal: false, vertical: false } } = config;

  if (imageSrc === null) {
      return null;
  }

  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Could not create 2D context for canvas');
}


  // Draw the image onto the canvas
  canvas.width = image.width
  canvas.height = image.height
  ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height
  )

  const croppedCanvas = document.createElement('canvas')
  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
      return null
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
      canvas,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
  )

  // As a blob
  return new Promise<string>((resolve, reject) => {
      croppedCanvas.toBlob((file) => {
          if (file !== null) {
              resolve(URL.createObjectURL(file));
          } else {
              reject(new Error("Failed to create blob from image"));
          }
      }, 'image/jpeg');
  });
}
