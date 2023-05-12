
export const saveBooking = async bookingData => {
    const url = `${process.env.REACT_APP_API_URL}/bookings`
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
  
    const data = await response.json()
  
    return data
  }


//Get All Bookings
export const getAllBookingsByEmail = async email => {
  const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`

  const response = await fetch(url)

  const data = await response.json()

  return data
}

// Delete a booking
export const deleteBooking = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/booking/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('airbnb-token')}`,
      },
    }
  )

  const data = await response.json()
  return data
}



//Get All Bookings for Admin
export const getAllBookings = async () => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`

  const response = await fetch(url)

  const data = await response.json()

  return data
}


//MAKE HOST
export const makeHost = async user => {
  delete user._id
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...user, role: 'host' }),
    }
  )
  const users = await response.json()

  return users
}


export const getPaymentIntent = async price => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/create-payment-intent`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('airbnb-token')}`,
      },
      body: JSON.stringify({ price }),
    }
  )

  const data = await response.json()
  return data
}
  