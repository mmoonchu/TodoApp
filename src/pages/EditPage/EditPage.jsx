import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPage({ user, setUser }) {
  const { id } = useParams();
  const [item, setItem] = useState({});

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
    if (!formData.title) {
      return;
    }
  
    try {
      const response = await fetch(`/todo/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = `/todo/`;
      }
    } catch (err) {
      console.error('Error updating item:', err);
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
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <>
      <h2>Edit Page</h2>
      <form onSubmit={handleSubmit}>
        Title: <input type="text" name="title" defaultValue={item.title} onChange={handleChange} /><br />
        Desc: <input type="text" name="desc" defaultValue={item.desc} onChange={handleChange} /><br />
        <input type="submit" value="Submit Changes" />
      </form>
    </>
  );
}

export default EditPage;
