import React from 'react'

function NewItemPage() {
  return (
    <div>
      <form action="/fruits" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Color: <input  style={{margin:"1em"}}type="text" name="color" /><br/>
        Ready2Eat: <input  style={{margin:"1em"}}type="checkbox" name="readyToEat" /><br/>
        <input style={{margin:"1em"}} type="submit" value="Create Fruit" />
      </form>
    </div>
  )
}

export default NewItemPage