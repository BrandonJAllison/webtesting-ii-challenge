import React from 'react';

const Display = props => {
   const {balls, strikes } = props;
   
   return(
     <div style={{border: '2px solid white', width: '50%',borderRadius:'10px', marginTop: '50px', background: 'black', color:'white'}}>
        <h1 data-testid='header'>The Count Is:</h1>
        <div>
          <h1 data-testid='ball'>{balls}</h1>
          
          <h1 data-testid='strike'>{strikes}</h1>
        </div>
     </div>
   ); 
}

export default Display;