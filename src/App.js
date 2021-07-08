import React, {Component} from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Users from './Users/Users';
import User from './Users/User';
import Search from './Search/Search';
import Alert from './Alert/Alert';
import About from './Pages/About';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos:[],
    alert: null
  }

  // async componentDidMount() {
  //   const res = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   const data = await res.json();

  //   this.setState({users:data})
  // }

  userSearch = async (text)=> {
    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const data = await res.json();

    this.setState({users:data.items})
  }

  getUser = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const data = await res.json();

    this.setState({ user: data })
  }

   getUserRepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const data = await res.json();

     console.log(data)
    this.setState({ repos: data })
  }

  clearState=()=>{
    this.setState({ users: [] });
  }

  alertMessage = (msg) => {
    this.setState({ alert: msg })
    
    setTimeout(() => {
      this.setState({alert:null})
    }, 3000);
  }

  render() {
    const { users,alert, user,repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>

                <Route
                  exact path='/' render={props => (
                    <div>
                      <Search
                        userSearch={this.userSearch}
                        clearState={this.clearState}
                        showClearBtn={users.length > 0 ? true : false}
                        alertMessage = {this.alertMessage}
                      />
                      <Users users={users}/>
                    </div>
                  )}
              />

              <Route
                exact path='/about'
                component={About}
              />

              {/* <Route path='/about' render={props=>(<About/>)} /> */}
              <Route exact path='/user/:login' render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos ={this.getUserRepos}
                  user={user}
                  repos={repos}
                />
              )} />
            </Switch>
        
          </div>
        </div>
      </Router>
     
    );
  }
 
}

export default App;
