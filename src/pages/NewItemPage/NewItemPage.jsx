import React, { useState } from 'react';

function NewItemPage() {
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
      const response = await fetch('/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = '/todo';
      }
    } catch (err) {
      console.error('Error creating item:', err);
    }
  };

  return (
    <div>
      <h1>Create a To-do Item</h1>
      <form className='form' onSubmit={handleSubmit}>
        <br/>
        Title: <input style={{margin:"1em"}} type="text" name="title" onChange={handleChange} /><br/>
        Description: <input  style={{margin:"1em"}} type="text" name="desc" onChange={handleChange} /><br/>
        <input style={{margin:"1em"}} type="submit" value="Create Item" />
      </form>
    </div>
  );
}

export default NewItemPage;
