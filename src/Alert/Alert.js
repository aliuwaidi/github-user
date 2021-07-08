import React from 'react';

 function Alert({alert}) {
   return (
    alert !==null && ( <div className="alert alert-light">
      <i class="fas fa-info-circle"/>{alert}
    </div>)
   
  )
}

export default Alert;

