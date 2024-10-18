import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import image1 from '../Image/cobus.png'
import image2 from '../Image/juicer.png'
import image3 from '../Image/oven.png'
import image4 from '../Image/refigerator.png'
import image5 from '../Image/refrigerator.png'
import image6 from '../Image/stove.png'
import image7 from '../Image/office.png'
import image8 from '../Image/smart.png'
import image9 from '../Image/smartcopy.png'
import image10 from '../Image/icons.png'
const Appliances = () => {
  const products=[
    {
      image:image1,
      title:"Cobus",
      price:99
    },
    {
      image:image2,
      title:"Juicer",
      price:99
    },
    {
      image:image3,
      title:"Oven",
      price:99
    },
    {
      image:image4,
      title:"Refrigerator",
      price:99
    },
    {
      image:image5,
      title:"Refrigerator",
      price:99
    },
    {
      image:image6,
      title:"Stove",
      price:99
    },
    {
      image:image1,
      title:"Cobus",
      price:99
    },
    {
      image:image2,
      title:"Juicer",
      price:99
    },
    {
      image:image3,
      title:"Oven",
      price:99
    }
  ]
  const [isExpand,setExpand]=useState(false)
  const handleExpand=()=>{
    setExpand(!isExpand)
  }
  return (
    <section id='accessories'>
       <div className="container my-md-5 my-3">
        <div className="row d-flex">
          <div className="col-12 d-flex flex-wrap justify-content-between">
            {products.slice(0,6).map((products,index)=>(
            <div className="card rounded-0 border-0" style={{width:"18rem"}} key={index}>
            <img src={products.image} className="card-img-top img-fluid rounded-0" alt="coth-image" style={{width:'500px',height:'500px'}}/>
            <div className="card-body d-flex">
            <div><h5 className="card-title">{products.title}</h5>
            <p className="card-text" style={{color:'#c9977c'}}>{products.price}$</p></div>
            <Link to={`/appliance/${index}`} className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link></div></div>
            ))}
            {isExpand && products.slice(6, 9).map((products, index) => (
            <div className="card rounded-0 border-0" style={{ width: "18rem" }} key={index}>
            <img src={products.image} className="card-img-top img-fluid rounded-0" alt="product-image" style={{ width: '500px', height: '500px' }} />
            <div className="card-body d-flex">
            <div><h5 className="card-title">{products.title}</h5>
            <p className="card-text" style={{color: '#c9977c' }}>{products.price}$</p></div>
            <Link to={`/appliance/${index+6}`}  className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link>
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
      <div className="container-fluid vh-100" style={{backgroundColor:'#c9977c',backgroundImage:`url(${image9}),url(${image10})`,backgroundPosition:' right center, top center',backgroundRepeat:'no-repeat,no-repeat',backgroundSize:'50% 100%,30% 100%'}}>
        <div className="row d-flex align-items-center vh-100 mx-md-3 mx-2">
          <div className="col flex-column justify-content-center my-md-3 my-1">
            <h1 className='text-white fw-bolder'>EXCLUSIVE PHONE</h1>
            <h1 className='fw-bolder'>SALE</h1>
            <h3 className='fw-bolder'>UP TO 20% OFF</h3>
            <div className='col-md-2 btn fw-bold p-2' style={{backgroundColor:'#ccc5c0',border:'2px solid white', borderRadius:'50px'}}>SHOP NOW</div>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <img src={image2} alt="Appliance" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' style={{color:'#c9977c'}}>Home APPLIANCES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image7} alt="Appliance" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6' >OFFICE APPLIANCES</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
          <img src={image8} alt="smartphone" className='img-fluid' style={{width:'100%',height:'100%'}}/>
            <div id='clothtext'>
              <h3 className='d-flex text-white fs-6'>SMART PHONE</h3>
              <div  className="btn text-white rounded-0" style={{backgroundColor:'#c9977c'}}>LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appliances
