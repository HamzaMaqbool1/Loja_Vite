import React, { useState } from 'react'
import image1 from '../Image/zipper.png'
import image2 from '../Image/nylonhook.png'
import image3 from '../Image/hook.png'
import image4 from '../Image/handbutton.png'
import image5 from '../Image/button.png'
import image6 from '../Image/accessories.png'
import image7 from '../Image/menaccessories.png'
import image8 from '../Image/accessoriescopy.png'
import image9 from '../Image/menaccessoriescopy.png'
import image10 from '../Image/men.png'
import image12 from '../Image/groupimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Accessories = () => {
  const products=[
    {
      image:image1,
      title:"Zipper",
      price:99
    },
    {
      image:image2,
      title:"Nylon-Hook",
      price:99
    },
    {
      image:image3,
      title:"Hook",
      price:99
    },
    {
      image:image4,
      title:"Button",
      price:99
    },
    {
      image:image5,
      title:"Button-Pack",
      price:99
    },
    {
      image:image3,
      title:"Hook",
      price:99
    },
    {
      image:image1,
      title:"Zipper",
      price:99
    },
    {
      image:image2,
      title:"Nylon-Hook",
      price:99
    },
    {
      image:image3,
      title:"Hook",
      price:99
    }
  ]
  const [isExpand,setExpand]=useState(false)
  const handleExpand=()=>{
    setExpand(!isExpand)
  }
  return (
    <section id='accessories'>
      <div className="container-fluid vh-100"  style={{backgroundColor:'#c9977c',backgroundImage: `url(${image8}), url(${image9})`,backgroundPosition: 'left , right', backgroundRepeat: 'no-repeat, no-repeat',backgroundSize: '50% 100%, 50% 100%' 
  }}>
    <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-2 col-md-3 vh-100 d-flex flex-column justify-content-end pb-3">
            <div className="btn text-white fs-6 border-0 rounded-0 p-3" style={{backgroundColor:'#c48c6f'}}>SHOP NOW</div>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <img src={image6} alt="ACCESSORIES" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' style={{color:'#c9977c'}}>WOMEN'S ACCESSORIES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image7} alt="ACCESSORY" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' >MEN'S ACCESSORIES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image10} alt="MEN" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6'>MEN'S</h3>
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
            <Link to={`/accessories/${index}`} className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link></div></div>
            ))}
            {isExpand && products.slice(6, 9).map((products, index) => (
            <div className="card rounded-0 border-0" style={{ width: "18rem" }} key={index}>
            <img src={products.image} className="card-img-top img-fluid rounded-0" alt="product-image" style={{ width: '500px', height: '500px' }} />
            <div className="card-body d-flex">
            <div><h5 className="card-title">{products.title}</h5>
            <p className="card-text" style={{color: '#c9977c' }}>{products.price}$</p></div>
            <Link to={`/accessories/${index+6}`}  className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link>
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
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4  d-flex align-items-center flex-column justify-content-center vh-100">
            <button type='button' className='border-0 text-white fw-bold p-3 mt-5' style={{backgroundColor:'#c9977c'}}>Learn More</button>
            <p className='text-white mt-md-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi beatae, ipsa ducimus provident eveniet sed voluptatem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accessories
