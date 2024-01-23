import React from 'react'
import * as usersService from "../../utilities/users-service"; 

function OrderHistoryPage() {

const handleCheckToken = () =>{
  let exp = usersService.checkToken()
  console.log(exp)
}


  return (
    <>
    <h1> OrderHistory Page</h1>
    <button className='login-expiration-button' onClick={handleCheckToken}> Check Login Expiration </button>
    
    </>
  )
}

export default OrderHistoryPage