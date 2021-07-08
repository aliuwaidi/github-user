import React from 'react'

function RepoItem({ repo}) {
 
  return (
    <div className='card text'>

      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
     
    </div>
  )
}

export default RepoItem;
