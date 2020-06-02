import React from 'react';

class FollowerCard extends React.Component {

    render(){
        return(
            <div className="card">
                {this.props.followersData.map(follower =>
                
                    <div className='data'>
                        <img src={follower.avatar_url}/>
                        <h1 className="name">{follower.name}</h1>
                        <p>Login: {follower.login}</p>
                        <p>Github URL: {follower.html_url}</p>
                        {/* <p>Bio: {follower.bio}</p>
                        <p>Followers: {follower.followers}</p>
                        <p>Following: {follower.following}</p> */}
                        
                    </div>
                   
                    )}
                    
                     
            </div>
            
        )
        
    }
}

export default FollowerCard