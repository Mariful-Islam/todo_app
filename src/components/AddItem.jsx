import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {

  let [itemData, setItemData] = useState()

  let navigate = useNavigate()

  let addItemHandler= async(e)=>{
    e.preventDefault()
    let response = await fetch("https://saaddev.pythonanywhere.com/todo/create/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:e.target.name.value, desc: e.target.desc.value})
    })
    let data = await response.json()

    console.log(response)
    console.log(data)
    setItemData(data) 
    navigate('/')
  }
  return (
    <div className='add-item wrapper'>
<svg onClick={()=>navigate('/')} viewBox="0 0 512 512" style={{width:15, height:15}}>
<path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"/></svg>

      <form onSubmit={addItemHandler} method='POST'>

        <input type='text' name='name' placeholder='name' /> <br />
        <textarea name='desc' placeholder='Description'></textarea> <br />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default AddItem