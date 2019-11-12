
import React from 'react';
import './App.css';
import axios from 'axios';
import Friended from './Friended';

class Friends extends React.Component {
    constructor (){
      super();
      this.state={
        friends: {}
      }
    }
    
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
          console.log(res)
          this.setState({
            friends: res
          });
        })
        .catch(err => {
          console.log('The data was not returned', err.response);
        })
    }

    render() {
      return(
      <>
        <div>
        {this.state.friends.map(friend => <Friended
        key={friend.id}
        name={friend.name}
        login={friend.age}
        bio={friend.email}/>
        )}
        </div>
      </>
      )
  } 
}


export default Friends;