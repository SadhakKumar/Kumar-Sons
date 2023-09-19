import Card from "./Card";
import {useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search'

import React from 'react'



function Search({placeholder,data}) {
    const[filteredItems,setFilteredItems]=useState([]);
    // useEffect(() => {
    //     setFilteredItems(data);
    //   }, [])
    const handleFilter=(event)=>{
        // if(!(event.key=='Enter')){
        //     return
        // }
        const searchWord=event.target.value;
        
        const newFilter=data.filter((value)=>{
            if(searchWord==''){
            return value;
        }
            // if(!((value.title.toLowerCase().includes(searchWord.toLowerCase())==''))){
            //     return value.title.toLowerCase().includes(searchWord.toLowerCase())
            // }
            // else{
            //     if(!((value.price.toString().includes(searchWord)==''))){
            //         return value.price.toString().includes(searchWord)
            //     }
            //     else{
            //         if(!((value.location.toLowerCase().includes(searchWord.toLowerCase())==''))){
            //             return value.location.toLowerCase().includes(searchWord.toLowerCase())
            //         }
            //         else{
            //                 return value.keywords.toLowerCase().includes(searchWord.toLowerCase())
                        
            //         }
            //     }
            // }
            return ((value.title.toLowerCase().includes(searchWord.toLowerCase())=='')?value.keywords.toLowerCase().includes(searchWord.toLowerCase()):value.title.toLowerCase().includes(searchWord.toLowerCase()))
        })
        
        setFilteredItems(newFilter)

    };
    useEffect(() => {
        setFilteredItems(data);
      }, [data])
    

  return (
    <div style={{width:'100%'}}>
        <div className='search-wrapper'>
        
        <input type='text' id='search' placeholder={placeholder} onChange={handleFilter}></input><div style={{float:'right',marginTop:'10px'}}><SearchIcon/></div></div>
        <div className='card-wrapper'style={{width:'100%'}}>

            {((filteredItems=='')?data:filteredItems).map(value=><Card src={value.src} title={value.title} desc={value.desc} price={value.price} location={value.location}></Card>)}
        
        </div>
        
    </div>
  )
}

export default Search