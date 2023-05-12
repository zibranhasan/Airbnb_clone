// export const imageUpload = async image => {
//     const formData = new FormData()
//     formData.append('image', image)
  
//    
  
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//     })
//     const data = await response.json()
//     return data.data.display_url
//   }


export const imageUpload = async image => {
  // console.log(image)
  if (image) {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    // console.log(data);
    return data
  }
}

//`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`