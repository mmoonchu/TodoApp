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
    {/* <button className='login-expiration-button' onClick={handleCheckToken}> Check Login Expiration </button> */}
    {/* <ul>
      <h1>
        {" "}
        {props.items.map((fruit, i) => {
          return (
            <li
              style={{
                borderRadius: "22px",
                margin: "1em",
                border: " solid grey",
                textAlign: "center",
              }}
            >
              {" "}
              <a href={`/items/${item.id}`}>{item.name} </a>{" "}
              <form action={`/items/${item._id}?_method=DELETE`} method='POST'>
                  <input type='submit' value='DELETE' />
              </form>

              <a href={`/items/${item.id}/edit`}>Edit this fruit</a>
            </li>
          );
        })}
      </h1>
    </ul> */}
    </>
  )
}

export default TodoList