import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const ItemView = () => {
    let navigate = useNavigate()
  
  let params = useParams()

  let [item, setItem] = useState([])

  useEffect(()=>{
    getItem()
  }, [])


  let getItem = async () => {
    let response = await fetch(`https://saaddev.pythonanywhere.com/todo/item/${params.id}/`)
    let data = await response.json()
    console.log(data)

    setItem(data)


  }

  return (
    <div className='wrapper item-view'>
        <svg onClick={()=>navigate('/')} viewBox="0 0 512 512" style={{width:15, height:15}}>
<path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"/></svg>
      <div style={{marginTop:30}}>
          <div className="item-name">
            {item.name}
          </div>
          <div className="item-desc">
            {item.desc}
          </div>
          <div className="item-updated">
            {item.get_date} | {item.get_time}
          </div>
      </div>
         
    </div>
  )
}

export default ItemView