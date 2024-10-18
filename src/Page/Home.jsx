import React from 'react'
import img from '../Image/image1.png'
import img1 from '../Image/image2.png'
import img2 from '../Image/imgae3.png'
import img3 from '../Image/image4.png'
import img4 from '../Image/image5.png'
import img5 from '../Image/image6.png'
import img6 from '../Image/image7.png'
import img7 from '../Image/image8.png'
import img8 from '../Image/image9.png'
import img9 from '../Image/image10.png'
import img10 from '../Image/image11.png'
import img11 from '../Image/image12.png'
import img12 from '../Image/image13.png'
import img13 from '../Image/image14.png'
import img14 from '../Image/image15.png'
import img15 from '../Image/Loja.png'
import img16 from '../Image/seller.png'
import img17 from '../Image/chairimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTshirt, faWallet, faBlender } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section id='home'>
        <div className="container my-md-5 my-3">
          <div className="row">
            <div className="col-md-6 my-2">
              <img src={img} alt="Girl_image" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="col-md-6 my-2">
              <div className="row">
                <div className="col">
                  <img src={img3} alt="Brown_cloth" className='img-fluid' style={{width:'100%'}}/>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6">
                <img src={img1} alt="Brown_cloth" className='img-fluid' style={{height:'500px',width:'500px'}}/>
                </div>
                <div className="col-6">
                <img src={img2} alt="Brown_cloth" className='img-fluid'
                style={{height:'500px',width:'500px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id='cover'>
          <div className="row d-flex justify-content-around">
            <div className="col-3 p-0">
              <div style={{width:'70%',height:'30%'}} className='rounded box1'>
                <img src={img4} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%'}} className='rounded box2'>
                <img src={img5} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%',overflowY:'hidden',paddingLeft:'7px'}} className='rounded box3'>
                <img src={img6} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <h3 className='mt-3 '>CLOTHING</h3>
            </div>
            <div className="col-3 p-0">
            <div style={{width:'70%',height:'30%'}} className='rounded box1'>
                <img src={img4} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%'}} className='rounded box2'>
                <img src={img5} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%',overflowY:'hidden',paddingLeft:'7px'}} className='rounded box3'>
                <img src={img7} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <h3 className='mt-3 '>ACCESSORIES</h3>
            </div>
            <div className="col-3 p-0">
            <div style={{width:'70%',height:'30%'}} className='rounded box1'>
                <img src={img4} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%'}} className='rounded box2'>
                <img src={img5} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <div style={{width:'70%',height:'30%',overflowY:'hidden',paddingLeft:'7px'}} className='rounded box3'>
                <img src={img8} alt="cloth" className='img-fluid rounded' width='100%' height='100%'/>
              </div>
              <h3 className='mt-3'>LOJAPRODUCT</h3>
            </div>
         
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="row">
                  <img src={img9} alt="dress" className='img-fluid' style={{width:'100%',height:'350px'}} />
              </div>
              <div className="row">
                <div className="col-6 p-0">
                  <img src={img11} alt="" className='img-fluid' style={{width:'100%',height:'100%'}}/>
                </div>
                <div className="col-6 p-0">
                  <img src={img12} alt="" className='img-fluid' style={{width:'100%',height:'100%'}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-0">
            <div className="row">
            <img src={img13} alt="" className='img-fluid' style={{width:'100%',height:'450px'}}/>
            </div>
            <div className="row">
              <img src={img14} alt="" className='img-fluid' style={{width:'100%',height:'362px' }}/>
            </div>
            </div>
            <div className="col-lg-3 p-0">
              <img src={img10} alt="" className='img-fluid' style={{width:'100%',height:'100%' }}/>
            </div>
          </div>
        </div>
        <div className="container-fluid my-md-5 my-3">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 d-flex justify-content-center">
              <h2>CATEGORIES</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-around my-md-5 my-3" id='h6'>
            <div className="col-md-12 d-flex flex-wrap justify-content-around">
            <div className='text-center col-md col-6'>
              <FontAwesomeIcon icon={faHome} size='2x'/>
              <h6>HOME</h6>
            </div>
            <div className='text-center col-md col-6'>
            <FontAwesomeIcon icon={faTshirt} size='2x'/>
            <h6>CLOTHES</h6>
            </div>
            <div className='text-center col-md col-6'>
            <FontAwesomeIcon icon={faWallet} size='2x'/>
            <h6 >ACCESSORIES</h6>
            </div>
            <div className='text-center col-md col-6'>
            <FontAwesomeIcon icon={faBlender} size='2x'/>
            <h6 >APPLIANCES</h6>
            </div>
            <div className='text-center col-md col-6'>
             <img src={img15} alt="Image" className='img-fluid' style={{width:'50px',height:'30px'}}/>
            <h6 >LOJAPRODUCTS</h6>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 d-flex justify-content-center">
              <img src={img16} alt="Seller" className='img-fluid' style={{width:'350px',height:'350px'}}/>
            </div>
          </div>
          <div className="row d-flex justify-content-center my-md-3 my-2">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="btn text-white rounded p-3 fs-5" style={{backgroundColor:'#c48c6f'}}>Become a Seller</div>
            </div>
          </div>
        </div>
        <div className="container-fluid vh-100 my-md-5 my-3" style={{backgroundColor:'#ccc5c0',backgroundImage:`url(${img17})`,backgroundPosition:'top right',backgroundRepeat:'no-repeat',backgroundSize:'50% 100%'}}>
        <div className="row d-flex align-items-center" style={{ minHeight: '100vh' }}>
  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <h1>𝓒𝓪𝓼𝓾𝓪𝓵</h1>
    <h1 className='fw-bold'>DAILY STYLE</h1>
    <h2 className='fw-bold' style={{color:'#BC9E8A'}}>ENJOY UPTO 50% OFF</h2>
    <div className='btn fw-bold text-white p-3' style={{ backgroundColor:'#BC9E8A' }}>SHOP NOW</div>
  </div>
</div>

        </div>
    </section>
  )
}

export default Home