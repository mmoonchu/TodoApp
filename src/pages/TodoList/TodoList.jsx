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

  const handleStatusChange = async (itemId, status) => {
    try {
      const response = await fetch(`/todo/${itemId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: !status }),
      });
      if (response.ok) {
        setMongoData((prevData) =>
          prevData.map((item) =>
            item._id === itemId ? { ...item, status: !status } : item
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>To-do List</h1>
      <div className='tasks'>
        {mongoData.map((item) => (
          <Link className='task' to={`/todo/edit/${item._id}`} key={item._id}>
            <p className='title'>{item.title}</p>
            <p className='desc'>{item.desc}</p>
            <input type="checkbox" name="status" checked={item.status}
            onClick={(e) => {e.stopPropagation();}}
            onChange={() => handleStatusChange(item._id, item.status)}
            /><br/>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TodoList