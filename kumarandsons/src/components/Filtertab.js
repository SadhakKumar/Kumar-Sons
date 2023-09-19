import React, { useEffect, useState } from 'react'
import './Flitertab.css'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
function Filtertab(props) {
  // const [Category,setCategory] = useState("");
  // const [stipend,setstipend] = useState();
  const handleChange =(e) => {
    // console.log(e.target.value)
    // setCategory(e.target.value);
    const searchWord = e.target.value;
    props.onChange(searchWord);
  }
  const handleChangeStipend =(e) => {
    // console.log(e.target.value)
    // setCategory(e.target.value);
    
      props.stipend(e.target.value);
   
  }
  const checkValue = (e) =>{
    props.workFromHome(e.target.checked);
  }
  const checkValueInternship = (e) =>{
    props.internship(e.target.checked);
  }

  
  return (
    <div className='filter'>
      <div className='filtercontainer'>
        <p className='filtertabheading'><FilterAltOutlinedIcon fontSize='small'/> Filter</p>

        <div className='Category'>
            <p className='categorytext'>Category</p>
            <div className="input-box">
                <input type="text" placeholder="e.g. Marketing" name='category' id='search' onChange={handleChange}/>
            </div>
        </div>
        <div className="checkbox-label">
            <input type="checkbox" id="work-from-home" onChange={checkValue}/>
             <label for="work-from-home">Work from home</label>
        </div>
        <div className="checkbox-label2">
            <input type="checkbox" id="work-from-home" onChange={checkValueInternship}/>
             <label for="Internship">Internship</label>
        </div>

        <div className='stipend'>
            <p className='categorytext'>Minimum monthly stipend (₹)</p>
            <div className="input-box">
                <input type="number" placeholder="e.g. 2000" name="myStipend" onChange={handleChangeStipend}/>
            </div>
        </div>
        <button type="button" className="btn btn-primary">Clear all</button>

      </div>
    </div>
  )
}

export default Filtertab
