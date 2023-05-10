export const getImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image)
  
    const url = "https://api.imgbb.com/1/upload?key=1fd6c8f9b502642f0bee2b73bb22a83f"
  
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    return data.data.display_url
  }