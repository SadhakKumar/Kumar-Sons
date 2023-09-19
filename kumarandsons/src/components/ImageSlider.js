import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};

return (
	<div >
	
	<div className="imgslider">
		<Slider {...settings}>
		{images.slice(0,3).map((item) => (
			<div className='carousel-item transform-box' key={item.id} >
			<img src={item.src} className='homepage_caraousel' style={{height:'450px',width:'100%',overflow:'clip',objectFit:'cover', boxShadow:'2rem',marginBottom:'2rem'}}/>
			<div className='carousel-caption d-none d-md-block mydiv'><h5>{item.title} </h5><p>{item.desc}</p></div>
			</div>
		))}
		</Slider>
	</div>
		</div>
)
}
export default ImageSlider
