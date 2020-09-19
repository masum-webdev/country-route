import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [countries,setcountries]=useState([]);
  useEffect(()=>{
    const api="https://restcountries.eu/rest/v2/all";
    fetch(api)
    .then(res=>res.json())
    .then(data=>setcountries(data));
  },[]);

  return (
    <div className="text-center">
      <h1><u>{countries.length} Countries Loaded</u></h1>
      {
        countries.map(c=> <Country country={c} key={c.alpha2Code}/>)
      }
    </div>
  );
};

export default Home;