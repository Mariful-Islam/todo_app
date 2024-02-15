import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemList = ({item, getItems}) => {

  let [dlt, setDlt] = useState([])

  let navigate = useNavigate()
  
  let itemViewHandler =() => {
    navigate(`/item/${item.id}`)
  }

  let updateHandle = async() => {    
    navigate(`/update/${item.id}`)
  }
  
  let deleteHandle = async() => {    
    let response = await fetch(`https://saaddev.pythonanywhere.com/todo/delete/${item.id}/`,{
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json"
      }
    })
    let data = await response.json()
    setDlt(data)
    getItems()
    
  }

  return (

    <div className='item-list'>
        <div className='item-table'>
          {dlt}
          <div className='item-data'>
            <div className='item-row'>
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <p onClick={updateHandle}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"/>
  <path d="M13.5 6.5l4 4"/>
</svg></p>
              <p onClick={deleteHandle}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="currentColor"/>
  <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="currentColor"/>
</svg></p>
              <p onClick={itemViewHandler}>View</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemList