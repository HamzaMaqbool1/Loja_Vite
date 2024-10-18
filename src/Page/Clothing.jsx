import React, { useState } from 'react'
import image from '../Image/westrenlady.png'
import image1 from '../Image/image13.png'
import image3 from '../Image/accessories.png'
import image2 from '../Image/men.png'
import image4 from '../Image/men1.png'
import image5 from '../Image/men2.png'
import image6 from '../Image/men3.png'
import image7 from '../Image/men4.png'
import image8 from '../Image/men5.png'
import image9 from '../Image/women1.png'
import image10 from '../Image/women2.png'
import image11 from '../Image/women3.png'
import image12 from '../Image/groupimage.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Clothing = () => {
  const products=[
    {
      image:image2,
      title:"T-Shirt",
      price:99
    },
    {
      image:image9,
      title:"T-Shirt",
      price:99
    },
    {
      image:image5,
      title:"T-Shirt",
      price:99
    },
    {
      image:image11,
      title:"T-Shirt",
      price:99
    },
    {
      image:image7,
      title:"T-Shirt",
      price:99
    },
    {
      image:image8,
      title:"T-Shirt",
      price:99
    },
    {
      image:image4,
      title:"T-Shirt",
      price:99
    },
    {
      image:image10,
      title:"T-Shirt",
      price:99
    },
    {
      image:image6,
      title:"T-Shirt",
      price:99
    }
  ]
  const [isExpand,setExpand]=useState(false)
  const handleExpand=()=>{
    setExpand(!isExpand)
  }
  return (
    <section id='cloth'>
      <div className="container-fluid vh-100" style={{backgroundColor:'#B88D61',backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'auto 100%',backgroundPosition:'top center'}}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-2 col-md-3 vh-100 d-flex flex-column justify-content-end pb-3">
            <div className="btn text-white fs-6 border-0 rounded-0 p-3" style={{backgroundColor:'#c48c6f'}}>SHOP NOW</div>
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
      <div className="container">
        <div className="row d-flex">
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {products.slice(0,6).map((products,index)=>(
            <div className="card rounded-0 border-0" style={{width:"18rem"}} key={index}>
            <img src={products.image} className="card-img-top img-fluid rounded-0" alt="coth-image" style={{width:'500px',height:'500px'}}/>
            <div className="card-body d-flex">
            <div><h5 className="card-title">{products.title}</h5>
            <p className="card-text" style={{color:'#c9977c'}}>{products.price}$</p></div>
            <Link to={`/cloth/${index}`} className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link></div></div>
            ))}
            {isExpand && products.slice(6, 9).map((product, index) => (
            <div className="card rounded-0 border-0" style={{ width: "18rem" }} key={index}>
            <img src={product.image} className="card-img-top img-fluid rounded-0" alt="product-image" style={{ width: '500px', height: '500px' }} />
            <div className="card-body d-flex">
            <div><h5 className="card-title">{product.title}</h5>
            <p className="card-text" style={{color: '#c9977c' }}>{product.price}$</p></div>
            <Link to={`/cloth/${index+6}`}  className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link>
    </div>
  </div>
))}

          </div>
        </div>
        <div className="row d-flex justify-content-center my-md-2 my-1">
          <div className="col-md-3 d-flex justify-content-center">
          <button type='button' onClick={handleExpand} style={{backgroundColor:'#c9977c',color:'white'}} className='p-3 border-0'>{isExpand?"Show Less":'Show More'}</button>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column vh-100 my-md-5 my-3" style={{backgroundColor:'#baa594',backgroundImage:`url(${image12})`,backgroundPosition:'top center',backgroundRepeat:'no-repeat',backgroundSize:'auto 100%'}}>
        <div className="row d-flex justify-content-between  mt-lg-4 mt-md-2 mb-1" id='row1'>
          <div className="col-lg-4 col-md-4 col-2 p-0">
            <hr style={{color:'white'}}/>
          </div>
          <div className="col-lg-4 col-md-4 col-8">
            <p className='text-white text-center fs-4'>Special Sale for Spring Season</p>
          </div>
          <div className="col-lg-4 col-md-4 col-2 p-0">
           <hr style={{color:'white'}}/>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{marginTop:'20px'}} id='enjoytext'>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center" style={{paddingTop:'100px',paddingBottom:'50px',overflowY:'hidden'}}>
            <h1 className='display-1' style={{fontWeight:'bolder'}}>ENJOY SALE</h1>
            <div style={{backgroundColor:'#c9977c'}} id='headingovertext'>
              <p className='text-white text-wrap'>-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-BIG SALE-</p>
            </div>
            <div style={{backgroundColor:'#c9977c',position:'absolute'}} id='div' className='p-md-1 mt-lg-5 mt-2'><p className='text-white fs-3 fw-bold' id='divtext'>GET 50% OFF</p></div>
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-auto mb-2" id='row2'>
          <div className="col-lg-4 col-md-4 col-2 p-0">
            <hr style={{color:'white'}}/>
          </div>
          <div className="col-lg-4 col-md-4 col-8">
            <p className='text-white text-center fs-4'>ENJOY DISCOUNT & SHOP HEAVILY</p>
          </div>
          <div className="col-lg-4 col-md-4 col-2 p-0">
           <hr style={{color:'white'}}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clothing
