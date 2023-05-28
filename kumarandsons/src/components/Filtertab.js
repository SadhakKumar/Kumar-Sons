import React from 'react'
import './Flitertab.css'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
function Filtertab() {
  return (
    <div className='filter'>
      <div className='filtercontainer'>
        <p className='filtertabheading'><FilterAltOutlinedIcon fontSize='small'/> Filter</p>

        <div className='Category'>
            <p className='categorytext'>Category</p>
            <div class="input-box">
                <input type="text" placeholder="e.g. Marketing"/>
            </div>
        </div>
        <div class="checkbox-label">
            <input type="checkbox" id="work-from-home"/>
             <label for="work-from-home">Work from home</label>
        </div>
        <div class="checkbox-label2">
            <input type="checkbox" id="work-from-home"/>
             <label for="Internship">Internship</label>
        </div>

        <div className='stipend'>
            <p className='categorytext'>Minimum monthly stipend (₹)</p>
            <div class="input-box">
                <input type="text" placeholder="e.g. 2000"/>
            </div>
        </div>
        <button type="button" class="btn btn-primary">Clear all</button>

      </div>
    </div>
  )
}

export default Filtertab
