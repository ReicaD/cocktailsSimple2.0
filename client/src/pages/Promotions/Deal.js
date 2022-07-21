import React, { useEffect, useState } from 'react'

function Deal({ people }) {

    const[deals, setDeals ] = useState({})
    console.log(deals)

    useEffect(()=>{
        setDeals(people)
    },[])



  return (
    <div><p>{people.deal}</p>
    
    </div>
  )
}

export default Deal