import React from 'react';



const Friended = props => {
    console.log(props)
    return (
       <div>
           <h1>{props.name}</h1>
           <h3>{props.age}</h3>
        <p>{props.email}</p>
       </div>
 )
}

export default Friended;
