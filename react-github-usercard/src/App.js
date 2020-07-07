import React from 'react';
import './App.css'

// Components
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends React.Component {
  
  render(){
    return(
      <div className='App'>
        <h1>GitHub UserCard Project</h1>
          <div className='wrapper'>
            <UserCard />
            <FollowerCard />
          </div>
      </div>
    )
  }
}

export default App





// import React from 'react'
// import axios from 'axios'
// import UserCard from './components/UserCard'
// import FollowerCard from './components/FollowerCard'

// const App = () => {

//   return(
//     <div>
//       <UserCard />
//       <FollowerCard />
//     </div>
//   )
// }




// export default App
