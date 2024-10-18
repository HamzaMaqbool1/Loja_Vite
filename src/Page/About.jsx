import React from 'react'
import img from '../Image/about.png'
import img1 from '../Image/aboutcopy.png'
import img2 from '../Image/Torn.png'
import image12 from '../Image/groupimage.png'
import image3 from '../Image/womenimage.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faTags, faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id='about'>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',backgroundPosition:'top left'}}>
      <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-2 col-md-3 vh-100 d-flex flex-column justify-content-end pb-3">
            <Link to='/cloth' className='text-decoration-none'><div className="btn text-white fs-6 border-0 rounded-0 p-3" style={{backgroundColor:'#c48c6f'}}>SHOP NOW</div></Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-md-5 my-3">
          <div className="col-md-6 rounded" style={{backgroundImage:`url(${img2})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',backgroundPosition:'top left',backgroundColor:'#c48c6f'}}>
            <img src={img1} alt="" style={{width:'100%',height:'100%',marginLeft:'-70px'}} className='rounded image'/>
          </div>
          <div className="col-md-6 my-md-5 my-2 ps-md-3 pe-md-3 p-0">
            <h3 className='fw-bold text-md-end text-center' style={{color:'#c48c6f'}}>About US</h3>
            <p className='text-white rounded p-3 fw-bold' id='path' style={{backgroundColor:'#c48c6f'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut aliquid rem voluptate architecto culpa ipsam commodi quis praesentium cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ad.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${image12})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',backgroundPosition:'top left'}}>
      <div className="row d-flex  justify-content-center">
          <div className="col-lg-2 col-md-3 vh-100 d-flex flex-column justify-content-end align-items-center pb-3">
            <a href='#path' className='text-decoration-none'><div className="btn text-white fs-6 border-0 rounded-0 p-3" style={{backgroundColor:'#c48c6f'}}>LEARN MORE</div></a>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-6 my-md-5 my-2">
          <h3 className='fw-bold text-md-start text-center' style={{color:'#c48c6f'}}>Our Goals</h3>
          <p className='text-white rounded fw-bold p-3' style={{backgroundColor:'#c48c6f'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut aliquid rem voluptate architecto culpa ipsam commodi quis praesentium cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ad.</p>
          </div>
          <div className="col-md-6 rounded">
            <img src={image3} alt="image" style={{width:'100%',height:'100%'}} className='img-fluid rounded'/>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-6 order-2 my-md-5 my-2">
          <h3 className='fw-bold text-md-end text-center' style={{color:'#c48c6f'}}>Our Values</h3>
          <p className='text-white rounded fw-bold p-3' style={{backgroundColor:'#c48c6f'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut aliquid rem voluptate architecto culpa ipsam commodi quis praesentium cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ad.</p>
          </div>
          <div className="col-md-6 rounded order-1">
            <img src={img} alt="image" style={{width:'100%',height:'100%'}} className='img-fluid rounded'/>
          </div>
        </div>
      </div>
      <div className="container rounded my-md-5 my-3" style={{backgroundColor:'#ccc5c0'}}>
        <div className="row justify-content-around">
          <div className="col-md-4 text-center p-md-5 p-3">
            <FontAwesomeIcon icon={faUser} size='3x'/>
            <h3 className='text-white'>2000K+Coustmer</h3>
          </div>
          <div className="col-md-4 text-center p-md-5 p-3">
          <FontAwesomeIcon icon={faChartLine} size='3x'/>
          <h3 className='text-white'>Top Growth</h3>
          </div>
          <div className="col-md-4 text-center p-md-5 p-3">
          <FontAwesomeIcon icon={faDollarSign} size='3x'/>
          <h3 className='text-white'>10000K+Revenue</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
