import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'; 

function TodoList() {

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
          <Link className='task' to={`/todo/edit/${item._id}`} key={item._id}>
            <p className='title'>{item.title}</p>
            <p className='desc'>{item.desc}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TodoList