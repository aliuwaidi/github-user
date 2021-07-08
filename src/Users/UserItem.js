import React from 'react';
import { Link } from 'react-router-dom';

function UserItem ({user:{avatar_url,login,html_url}}) {
    
  return (
    <div className= 'card text-center '>
      <img src={avatar_url} alt="" style={{width:'100px'}} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-3'>More</Link>
      </div>
    </div>
  )

}

export default UserItem;
