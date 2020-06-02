import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'



class App extends React.Component {
  state = {
    userData: [],
    followersData: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/natethegreat5413')
    .then(res => {
      // console.log(res.data)
      this.setState({
        userData: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios.get('https://api.github.com/users/natethegreat5413/followers')
    .then(res => {
      console.log(res)
      this.setState({
        followersData: res.data
      })
    })

  }

  render(){
  return (
    <div className="App">
      <h1>GitHub UserCard</h1>
      <div className='form'>
        <UserCard userData={this.state.userData} className="user"></UserCard>
        <FollowerCard followersData={this.state.followersData}></FollowerCard>
      </div>
    </div>
    );
  }
}
export default App;
