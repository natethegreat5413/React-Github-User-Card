import React from 'react'
import axios from 'axios'

class UserCard extends React.Component {
    state = {
        user: []
    };

    componentDidMount(){
        axios.get('https://api.github.com/users/natethegreat5413')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    user: res.data
            })
        })
    }
    

    render(){

        const data = this.state.user
        return(
            <div className='card'>
                <img src={data.avatar_url} />
                <h2>{data.name}</h2>
                <h3>Login: {data.login}</h3>
                <p>Bio: {data.bio}</p>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
                <p>Located: {data.location}</p>
            </div>
        )
    }
}

export default UserCard





// import React, {useEffect, useState} from 'react'
// import axios from 'axios'

// const UserCard = () => {
//     const [user, setUser] = useState([]);
//     const [url, setUrl] = useState('https://api.github.com/users/natethegreat5413')
//     useEffect(() => {
//         axios.get(url)
//             .then(res => {
//                 setUser(res.data)
//             })
//             .catch(err => console.log(err))
//     }, [url])

//     return (
//         <div className='card'>
//             <div className='data'>
//                 <img src={user.avatar_url} />
//                 <h1 className='name'>{user.name}</h1>
//                 <p>Login: {user.login}</p>
//                 <p>Github URL: {user.html_url}</p>
//                 <p>Bio: {user.bio}</p>
//                 <p>Followers: {user.followers}</p>
//                 <p>Following: {user.following}</p>
//             </div>
//         </div>
//     )
// }

// export default UserCard

