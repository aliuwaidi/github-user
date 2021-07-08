import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos'

class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }
 

  render() {
    const { name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      following,
      followers,
      public_repos,
      public_gists } = this.props.user;
    
    return (
      <div>
        <Link to="/" className='btn btn-light my-2' >Back to search</Link>
        <div>
          <div className="card">
            <div className="grid-2">
              <div className='avatar'>
                <img src={avatar_url} style={{width: '150px'}} alt="" />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div className='bio'>
                {{ bio } && <div>
                  <h1>BIO</h1>
                  <p>{bio}</p>
                </div>}
                <a href={html_url} className='btn btn-dark my-1 mb-2'>Visit Github Profile</a>
                <ul>
                  <li>Username: {login}</li>
                  <li>Company: {company}</li>
                  <li>Website: {blog }</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='card '>
          <div className='my-2'>
            <div className="btn btn-primary m-1">Followers: {followers}</div>
            <div className="btn btn-success m-1">Following: {following}</div>
            <div className="btn btn-danger m-1">Public Repos: {public_repos}</div>
            <div className="btn btn-dark m-1">Public Gists: {public_gists}</div>
          </div>
          
        </div>
        <div className='repos'>
          <h1 className='my-3 mb-2'>Latest Repos</h1>
          <Repos repos={this.props.repos}/>
        </div>
        
      </div>
    )
  }
}

export default User;
