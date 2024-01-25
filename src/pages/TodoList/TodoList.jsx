import React, { useState, useEffect } from 'react'
import * as usersService from "../../utilities/users-service"; 

function TodoList() {

  // const handleCheckToken = () =>{
  //   let exp = usersService.checkToken()
  //   console.log(exp)
  // }

  const [mongoData, setMongoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/todo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMongoData(data);
        }
      } catch (error) {
        console.error('Error fetching MongoDB data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>To-do List</h1>
      <div className='tasks'>
        {mongoData.map((item) => (
          <div className='task'>
            <p className='title' key={item._id}>{item.title}</p>
            <p className='desc' key={item.id}>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList