import React from 'react'

function NewItemPage() {
  return (
    <div>
      <h1>Create a To-do Item</h1>
      <form action="/todo" method="POST"><br/>
        Title: <input style={{margin:"1em"}} type="text" name="title" /><br/>
        Description: <input  style={{margin:"1em"}} type="text" name="desc" /><br/>
        <input style={{margin:"1em"}} type="submit" value="Create Item" />
      </form>
    </div>
  )
}

export default NewItemPage