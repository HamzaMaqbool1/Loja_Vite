import React from 'react'
import logo from './Image/Loja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Page/Home';
import LojaProducts from './Page/LojaProducts';
import About from './Page/About';
import Accessories from './Page/Accessories';
import Appliances from './Page/Appliances';
import Clothing from './Page/Clothing';
import ProductDetail from './Page/ProductDetail';
import ProductAppliance from './Page/ProductAppliance';
import AccessoriesDetail from './Page/AccessoriesDetail';

function Navbar(){
  const { pathname } =useLocation();
  const handleNavbar=()=>{
    switch(pathname)
    { 
      case '/loja':
        return(
          <div className="container-fluid" style={{backgroundColor:'#c48c6f'}}>
            <div className='container'>
           <div className="row">
            <div className="col-md-12">
            <Link to='/cloth' className='text-decoration-none'>
            <FontAwesomeIcon icon={faArrowCircleLeft} size='1x' style={{backgroundColor:'#c48c6f',color:'white'}}/>
            <span className='text-white'>Back</span>
            </Link>
            </div>
           </div>
          </div>
          </div>
        )
      default:
        return (
          <>
          <div className="container-fluid" id='headercontent'>
            <div className="row d-flex justify-content-around">
              <div className="col-3 justify-content-center d-flex align-items-center">
                <h3>Contact Us</h3>
              </div>
              <div className="col-3 text-center">
                <img src={logo} alt="Logo" style={{width:'150px',height:'150px'}}/>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <h3>LOGIN / REGISTER</h3>
              </div>
            </div>
          </div>
          <div className="container-fluid" id='header' style={{border:'1px solid black'}}>
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <img className='navbar-toggler border-0' src={logo} alt="logo" style={{width:'70px',height:'70px',backgroundColor:'#c48c6f',borderRadius:'50%'}}/>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex justify-content-center align-items-center" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            <Link className='nav-link text-decoration-none me-lg-5 me-md-4 text-black' to='/'><li>HOME</li></Link>
            <Link className='nav-link text-decoration-none me-lg-5 me-md-4 text-black' to='/cloth'><li>CLOTHES</li></Link>
            <Link className='nav-link text-decoration-none me-lg-5 me-md-4 text-black' to='/accessories'><li>ACCESSORIES</li></Link>
            <Link className='nav-link text-decoration-none me-lg-5 me-md-4 text-black' to='/appliance'><li>APPLIANCES</li></Link>
            <Link className='nav-link text-decoration-none me-lg-5 me-md-4 text-black' to='/loja'><li>LOJA PRODUCTS</li></Link>
            <Link className='nav-link text-decoration-none text-black' to='/about'><li>ABOUT US</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
          </>
        )
    }
  };
  return(
    <section id='navbar'>
      <div className="container-fluid" style={{backgroundColor:'#c48c6f'}}>
        <div className="row">
          <div className="col-md-3" style={{borderRight:'1px solid black',borderBottom:'1px solid black'}}>
          <select className="form-select border-0 rounded-0 text-white" aria-label="Default select example" style={{backgroundColor:'#c48c6f'}}>
          <option value="0">Country</option>
          <option value="1">Pakistan</option>
          <option value="2">India</option>
          <option value="3">Europe</option></select>
          </div>
          <div className="col-md-9 d-flex">
            <div>
              <h6 className='text-white mt-3'>Free Delivery</h6>
            </div>
          <div className='ms-auto'>
               <a href="https://www.instagram.com" target='_blank' className='text-decoration-none'> <FontAwesomeIcon icon={faInstagram} size='2x' style={{color:'white',backgroundColor:'#dcbcac',borderRadius:'50%'}} className='p-2 me-2'/></a>
                <a href="https://www.facebook.com" target='_blank' className='text-decortion-none'>
                <FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'white',backgroundColor:'#dcbcac',borderRadius:'50%'}} className='p-2'/>
                </a>
              </div>
          </div>
        </div>
      </div>
      {handleNavbar()}
    </section>
  )
}
function Footer(){
  return (
    <section id='footer'>
      <div className="container-fluid" style={{backgroundColor:'#c48c6f'}}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 d-flex">
              <img src={logo} alt="Logo" className='img-fluid' style={{width:'100px',height:'100px',backgroundColor:'#c48c6f'}}/>
              <div className='d-flex ms-auto mt-4'>
               <a href="https://www.instagram.com" target='_blank' className='text-decoration-none'> <FontAwesomeIcon icon={faInstagram} size='2x' style={{color:'white',backgroundColor:'#dcbcac',borderRadius:'50%'}} className='mx-2 p-2'/></a>
                <a href="https://www.facebook.com" target='_blank' className='text-decortion-none'>
                <FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'white',backgroundColor:'#dcbcac',borderRadius:'50%'}} className='me-2 p-2'/>
                </a>
                <a href="https://www.linkedin.com" target='_blank' className='text-decoration-none'><FontAwesomeIcon icon={faLinkedin} size='2x' style={{color:'white',backgroundColor:'#dcbcac',borderRadius:'50%'}} className='me-2 p-2'/></a>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-3 col-md-4">
                <h5 className='text-white'>Menu</h5>
                <hr style={{color:'white',height:'2px',backgroundColor:'white'}}/>
                <div className='d-flex'>
                <div className="col-6 ">
                  <Link to='/' className='text-decoration-none text-white'><h6>HOME</h6></Link>
                  <Link to='/about' className='text-decoration-none text-white'><h6>ABOUT</h6></Link>
                  <Link to='/cloth' className='text-decoration-none text-white'><h6>CLOTHES</h6></Link>
                </div>
                <div className="col-6 ">
                <Link to='/accessories' className='text-decoration-none text-white'><h6>ACCESSORIES</h6></Link>
                <Link to='/appliance' className='text-decoration-none text-white'><h6>APPLIANCES</h6></Link>
                <Link to='/loja' className='text-decoration-none text-white'><h6>LOJA PRODUCTS</h6></Link>
                </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-1'></div>
              <div className="col-lg-6 col-md-7 my-3">
                <div style={{backgroundColor:'#c9977c',borderRadius:'50px'}} className='p-5'>
                  <h5 className='text-white'>Lorem ipsum dolor.</h5>
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quam?</p>
                  <div className='d-sm-flex justify-content-md-around'>
                  <div className='btn bg-white  p-md-3 p-2 fw-semibold border-0 me-md-0 me-4 my-3' style={{borderRadius:'50px'}} id='button1'>Lorem Ipsum</div>
                  <div className='btn bg-white  p-md-3 p-2 fw-semibold border-0 my-3' style={{borderRadius:'50px'}} id='button2'>Lorem Ipsum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{color:'white',height:'2px',backgroundColor:'white'}}/>
          <h6 className='text-white'>All Rights Reserved</h6>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
    <Router basename='/Loja_Vite/'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cloth' element={<Clothing/>}></Route>
        <Route path='/cloth/:id' element={<ProductDetail/>}></Route>
        <Route path='/accessories' element={<Accessories/>}></Route>
        <Route path='/accessories/:id' element={<AccessoriesDetail/>}></Route>
        <Route path='/appliance' element={<Appliances/>}></Route>
        <Route path='/appliance/:id' element={<ProductAppliance/>}></Route>
        <Route path='/loja' element={<LojaProducts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
