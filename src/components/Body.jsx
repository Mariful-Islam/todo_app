import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import addicon from '../icons/plus.png'
import ItemList from './ItemList'

const Body = () => {

    let [items, setItems] = useState([])

    useEffect(()=>{
        getItems()
    },[])

    let getItems = async (e) => {
        let response = await fetch('https://saaddev.pythonanywhere.com/todo/items')
        let data = await response.json()
        console.log(data)
        setItems(data)
      }
    

  return (
    <div className='body wrapper'>
        <div className='add-item-icon'>
            <Link to='/add-item/'><img src={addicon} alt={addicon}/></Link>
        </div>
        <div>
        <h4>Items <span>{items.length}</span></h4>
        <div className='item-lists'>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
            justifyItems:"center"
            }}>
                <h4>Name</h4>
                <h4>Description</h4>
                <h4>Actions</h4>
            </div>
            {items.map((item, index)=>
                <ItemList item={item} key={index} getItems={getItems}/>
                
            )}
        </div>
        </div> 
    </div>
  )
}

export default Body
