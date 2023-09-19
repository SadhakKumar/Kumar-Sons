import React,{useState} from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import RoomsData from '../data/RoomsData.json'
import ExclusiveRoomsData from '../data/ExclusiveRoomsData.json'
import Switch from '@material-ui/core/Switch';
import Navbar from '../components/Navbar'

const Rooms = (props) => {
  const [FilterData,setFilterData]=useState([]);
  const HandleSwitch=(event)=>{
    const SwitchBoolean = event.target.checked;
    if(SwitchBoolean){

      document.body.style.background='linear-gradient(lightcoral,white)'
    }
    else{
    document.body.style.background='linear-gradient(skyblue,white)'
    }
    const newData=((SwitchBoolean)?ExclusiveRoomsData:RoomsData)
    setFilterData(newData)
  };
  

  return (
    <div>
      <Navbar user = {props.user.name}/>
      <div className='switch'><label>Exclusive:</label><Switch color='primary' onChange={HandleSwitch}/></div>
      {/* <div> {(()=>{
        if(FilterData){
          return <Search placeholder='Search' data={ExclusiveRoomsData}></Search>
        }
        else{
          return <Search placeholder='Search' data={RoomsData}></Search>
        }
      })}</div> */}
      <Search placeholder='Search' data={((FilterData=='')?RoomsData:FilterData)}></Search>
      {/* <Card src='https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' title='Summer Package' desc='This 2day 1 night package is best for you and your other half'/> */}
    </div>
  )
}

export default Rooms