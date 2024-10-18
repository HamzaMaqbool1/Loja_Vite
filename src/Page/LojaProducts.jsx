import React from 'react'
import img9 from '../Image/image10.png'
import img10 from '../Image/image11.png'
import img11 from '../Image/image12.png'
import img12 from '../Image/image13.png'
import img13 from '../Image/image14.png'
import img14 from '../Image/image15.png'
import image1 from '../Image/image13.png'
import image3 from '../Image/accessories.png'
import image2 from '../Image/men.png'
import image5 from '../Image/imperial.jpg'
import image6 from '../Image/siddique.jpg'
import image7 from '../Image/Xinhua.jpg'
import image16 from '../Image/Torn.png'
import img15 from '../Image/Loja.png'
const LojaProducts = () => {
  return (
    <section id='loja'>
      <div className="container">
        <div className="row align-items-center justify-content-center my-md-5 my-3">
          <div className="col-md-4 col-6 bg-white" id='lojaimage' style={{border:'1px solid black',borderRadius:'50%'}}>
             <img src={img15} alt="Logo" style={{height:'350px',width:'500px'}} className='img-fluid'/>
          </div>
          <div className="col-md-4 col-6" style={{backgroundColor:'#c48d6f'}}>
                <h3 className='fw-bold fs-2 text-white text-sm-end text-center'>LOJA</h3>
                <h3 className='fw-md-bold fs-sm-2 fs-5 text-white text-sm-end text-center'>Manufacturing</h3>
            </div>
        </div>
      </div>
       <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <img src={image1} alt="Girl" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' style={{color:'#c9977c'}}>WOMEN'S CLOTHES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image2} alt="Girl" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' >MEN'S CLOTHES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image3} alt="Girl" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6'>ACCESSORIES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-md-5 my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 d-flex justify-content-center">
            <button type='button' style={{backgroundColor:'#c9977c',color:'white'}} className='border-0 p-3'>OWN BY LOJA</button>
          </div>
        </div>
      </div>
       <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="row">
                  <img src={img9} alt="dress" className='img-fluid ' style={{width:'100%',height:'350px'}} />
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
        <div className="container my-md-5 my-3">
          <div className="row">
            <div className='col-12 d-flex'>
              <h3 className='fw-bold me-auto'>SELLER ACCOUNT</h3>
              <div className='ms-auto'>
                <button type='button' className='rounded border-0 p-2' style={{backgroundColor:'#c9977c',color:'white'}}>Become a Seller</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-md-4  text-center">
             <div style={{borderRadius:'50%'}}> <img src={image6} alt="" className='img-fluid img' style={{height:'350px',width:'100%'}}/></div>
             <h3 className='fw-bold pt-2'>Siddique Mall</h3>
            </div>
            <div className="col-md-4 fw-bold text-center">
            <div style={{borderRadius:'50%'}}> <img src={image5} alt="" className='img-fluid img' style={{height:'350px',width:'100%'}}/></div>
            <h3 className='fw-bold pt-2'>Imperial Mall</h3>
            </div>
            <div className="col-md-4 fw-bold text-center">
            <div style={{borderRadius:'50%'}}> <img src={image7} alt="" className='img-fluid img' style={{height:'350px',width:'100%'}}/></div>
            <h3 className='fw-bold pt-2'>Xinhua Mall</h3>
            </div>
          </div>
        </div>


        <div className="container-fluid  my-md-5 my-3" style={{backgroundColor:'#c9977c'}}>
          <div className="row">
            <div className="col-md-6 vh-100" style={{backgroundImage:`url(${image16})`,backgroundRepeat: "no-repeat",backgroundPosition:'left center',backgroundSize:'100% 100%'}}>
              
            </div>
            <div className="col-lg-2 col-md-3 vh-100" style={{backgroundImage:`url(${image16})`,backgroundRepeat: "no-repeat",backgroundPosition:'bottom',backgroundSize:'100% 70%'}}>
            <p className=' fw-bold' id='clothracktext'>Style up and save big! Buy one, get cashback - limited time only, shop now and stay fabulous!</p>
              
            </div>
            <div className="col-lg-4 col-md-3 d-flex flex-column justify-content-center my-3">
                  <h3 style={{color:'#ccc5c0'}} className='fw-bold fs-1 text-center'>FASHION SALE</h3>
                  <h3 style={{color:'#ccc5c0'}} className='fw-bold text-center'>NEW</h3>
                  <p style={{color:'#ccc5c0'}} className='fw-bold text-center'>COLLECTION</p>
                  <button type='button' className='border-0 rounded bg-dark text-white fw-bold ms-auto me-auto'>SHOP NOW</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default LojaProducts
