import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';
const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const { name,capital,flag,population } = country;
  const countryStyle = {
    textAlign:'center',
    width: '50%',
    border: '2px solid purple',
    borderRadius: '20px',
    margin: '2% 20%',
    padding: '2% 5%'
  };
  useEffect(() => {
    const api = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(api)
      .then(res => res.json())
      .then(data => console.log(setCountry(data[0])));
  }, []);

  return (
    <div  style={countryStyle} className="box">
      <img src={flag} alt="flag" />
      <h1>Country: {name}</h1>
      <h3>Capital: {capital}</h3>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default CountryDetails;