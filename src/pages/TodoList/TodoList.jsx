import React from 'react'
import * as usersService from "../../utilities/users-service"; 

function TodoList() {

const handleCheckToken = () =>{
  let exp = usersService.checkToken()
  console.log(exp)
}


  return (
    <>
    <h1>Todo List</h1>
    <button className='login-expiration-button' onClick={handleCheckToken}> Check Login Expiration </button>
    
    </>
  )
}

export default TodoList