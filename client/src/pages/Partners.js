import React, { useEffect, useState } from 'react'
import { HTTP } from '../http'

export default function Partners() {
const [partners, setPartners] = useState([])

  useEffect(() => {
    getPartners()
  }, [])
  
  const getPartners = async() => {
    const data = await HTTP.get('/partner/all')
    setPartners(data.partners)
  }

  return (
    <div>
        {partners.map((i,idx) => 
        <div key={idx}> {i.id} {i.contact}</div>
        )}
    </div>
  )
}
