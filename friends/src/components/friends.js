
import React from 'react';
import axios from 'axios';
import Friended from './Friended';


const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorizations: sessionStorage.getItem("token")
        }
    });
};

class Friends extends React.Component {
        state = {
        friends: []
      }
    
    
    componentDidMount() {
        this.getData();
        if (!sessionStorage.getItem("token")) {
          console.error("Please Login!!!");
        } else {
          console.info("We are logged in");
        }
      }


    getData = () => {
        axios.get("http://localhost:5000/api/friends", {
          headers: { authorization: sessionStorage.getItem("token") }
        })
         
          .then(response => {
            this.setState({ friends: response.data });
          });
      }
    
    
    
      render() {
   
        return (
            <div >
                {this.state.friends.map(friend => <Friended
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}/>     
                )}
            </div>
        )}
    }
    export default Friends;
    