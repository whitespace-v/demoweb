import React, { useState } from 'react'
import { HTTP } from '../http'

export default function Home() { 
  const [contact,setContact] = useState()
  const [phone,setPhone] = useState()
  const [email,setEmail] = useState()
  const [reg_date, setReg_date] = useState()

  const createPartner = async () => {
    try {
        await HTTP.post('/partner/create', {contact, phone, email, reg_date})
    } catch (e) {
        console.log(e.message);
        
    }
  }

  return (
    <div>
        <div>
            <p>Контактное лицо</p>
            <input onChange={e => setContact(e.currentTarget.value)} value={contact}/>
        </div>
        <div>
            <p>Телефон</p>
            <input onChange={e => setPhone(e.currentTarget.value)} value={phone}/>
        </div>
        <div>
            <p>email</p>
            <input onChange={e => setEmail(e.currentTarget.value)} value={email}/>
        </div>
        <div>
            <p>Дата регистрации</p>
            <input onChange={e => setReg_date(e.currentTarget.value)} value={reg_date}/>
        </div>
        <div onClick={async () => await createPartner()}>
            Создать
        </div>
    </div>
  )
}
