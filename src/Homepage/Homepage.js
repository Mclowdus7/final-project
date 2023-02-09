import axios from 'axios'
import './Homepage.css'
import React, {useState, useEffect} from 'react'



function Homepage() {

  useEffect(
    ()=>{
        console.log('homepage loaded')
        axios.get("https://api.openbrewerydb.org/breweries?by_city=Birmingham&per_page=3")
        .then(res => {
          console.log(res.data)
          setRandom(res.data[0])
        })
        .catch(err => console.log(err))
    },[]
  )

    const [city, setCity] = useState('')

    const [random, setRandom] = useState('')

    const getRandom= ()=> {
        axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=20`)
        .then(res =>{
            console.log(res.data[4])
            const num = Math.floor(Math.random() * 15)
            console.log(num)
            setRandom(res.data[num])
            console.log(random)
            
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='random-container'>
      <img src="https://images.unsplash.com/photo-1532634733-cae1395e440f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lciUyMGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" />
      <h1>GO SOMEWHERE NEW TONIGHT!</h1>
      <div className='random-card'>
        <h2>{random?.name}</h2>
        <h3>Phone: {random?.phone}</h3>
        <p>{random?.website_url}</p>
        <img src='https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60' />
        <p>{random?.street}</p>
        <p>{random?.state}</p>
        <input type='text' onChange={event => setCity(event.target.value)} placeholder='Enter your city'/>
        <button onClick={getRandom}>Click me!</button>
      
    </div>
  </div>
  )
}

export default Homepage
