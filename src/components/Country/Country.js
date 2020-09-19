import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const {name,capital}=props.country;
  const countryStyle={
    width:'50%',
    border:'2px solid purple',
    borderRadius:'20px',
    margin:'2% 20%',
    padding:'2% 5%'
  }
  return (
    <div style={countryStyle} >
      <h3>Country: {name}</h3>
      <p>Captial City: {capital}</p>
      <Link to={`/country/${name}`}>
      <button>Details</button>
      </Link>
    </div>
  );
};

export default Country;