import React from 'react'
import axios from 'axios'

class FollowerCard extends React.Component {
    state = {
        followers: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/natethegreat5413/followers')
            .then(res => {
                console.log(res.data)
                this.setState({
                    followers: res.data
                })
            })
    }

    render(){
        const data = this.state.followers
        return(
            <div>
                {data.map(follower => 
                    <div className='card'>
                        <img src={follower.avatar_url} />
                        <h2>Login: {follower.login}</h2>
                        <p>Github URL: {follower.html_url}</p>
                    </div>
                )}
            </div>
        )
    }

}

export default FollowerCard







// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const FollowerCard = () => {
//     const [followers, setFollowers] = useState([])
//     const [url, setUrl] = useState('https://api.github.com/users/natethegreat5413/followers')
    
//     useEffect(() => {
//         axios.get(url)
//         .then(res => {
//             setFollowers(res.data)
//             console.log(res.data)
//         })
//     }, [url])

//     return(
//         <div className='wrapper'>
//             <h1>Nates Followers</h1>
//             {followers.map(data => (
//                 <div className='card'>
//                     <img src={data.avatar_url}/>
//                     <p>Login: {data.login}</p>
//                     <p>GitHub URL: {data.html_url}</p>
//                     <p></p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default FollowerCard
