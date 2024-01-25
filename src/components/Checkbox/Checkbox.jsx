import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';

function Checkbox() {
  return (
    <div>
        <input type="checkbox" name="status" onClick={(e) => {e.stopPropagation();}}/><br/>
    </div>
  )
}

export default Checkbox