import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPage({ user, setUser }) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    desc: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        console.log('submit')
      const response = await fetch(`/todo/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/todo');
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleDelete = async () => {
    try {
        navigate('/todo');
      const response = await fetch(`/todo/edit/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/todo/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItem(data);
          setFormData({
            title: item.title,
            desc: item.desc
          })
        }
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item.title) {
    return <div>Loading...</div>;
  }

  return (
    <div className='edit-page-container'>
      <h2>Edit Task</h2>
      <form className='edit-page' onSubmit={handleSubmit}>
        Title: <input type="text" name="title" defaultValue={item.title} onChange={handleChange} /><br />
        Desc: <input type="text" name="desc" defaultValue={item.desc} onChange={handleChange} /><br />
        <input className='submit-button' type="submit" value="Submit Changes" />
      </form>
        <button className='delete-button' onClick={handleDelete}>Delete Task</button>
    </div>
  );
}

export default EditPage;
