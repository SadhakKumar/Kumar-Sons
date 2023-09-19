import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import ImageSlider from '../components/ImageSlider'
import PackagesData from '../data/PackagesData.json'
import RoomsData from '../data/RoomsData.json'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


const HomePage = (props) => {
    return (
        <div>
            <Navbar user={props.user.name} />
            <ImageSlider images={PackagesData} />
            <div className='text-container'>
                <h3>Our Packages</h3>
                <div className='card-wrapper'>
                    {PackagesData.slice(0, 5).map(item => (
                        <Card src={item.src} title={item.title} desc={item.desc} price={item.price} location={item.location}></Card>

                    ))}

                </div>


            </div>
        </div>
    )
}

export default HomePage