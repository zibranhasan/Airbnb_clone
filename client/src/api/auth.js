export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }

//save user id db $ get token
fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`,{
    method: 'PUT',
    headers:{
        'content-type': 'application/json',
    },
    body:JSON.stringify(currentUser) 
})
.then( res => res.json())
.then( data => {
    // console.log(data)
    //save token in localstorage
    // localStorage.setItem('airbnb-token', data.token)
})
}


//save booking after payment
export const saveBooking = bookingData => {
    // Post method fetch
    return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('airbnb-token')}`,
      },
      body: JSON.stringify(bookingData),
    })
  }