import React from 'react'
import image1 from '../Image/zipper.png'
import image2 from '../Image/nylonhook.png'
import image3 from '../Image/hook.png'
import image4 from '../Image/handbutton.png'
import image5 from '../Image/button.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom'


const AccessoriesDetail = () => {
    const {id}=useParams();
    const index= parseInt(id);
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
      const {title,price}=products[index];
  return (
    <section id='accoriesdetail'>
        <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-6">
            <img src={products[index].image} alt="" style={{width:'100%',height:'500px'}} className='img-fluid rounded'
            />
            <div className="row d-flex justify-content-around my-md-3 my-2 d-md-flex d-none">
              <div className="col-md-4">
                <img src={products[index].image} alt="" style={{width:'100%',height:'200px'}} className='img-fluid rounded'/>
              </div>
              <div className="col-md-4">
              <img src={products[index].image} alt="" style={{width:'100%',height:'200px'}} className='img-fluid rounded'/>
              </div>
              <div className="col-md-4">
              <img src={products[index].image} alt="" style={{width:'100%',height:'200px'}} className='img-fluid rounded'/>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-md-5 my-3 ps-5">
            <h1 className='fw-bold' style={{color:'#c48d6f'}}>{title}</h1>
            <p className='fs-3 lh-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>
            <div className='d-lg-flex'>
            <h1 style={{color:'#c48d6f'}}>{price}$</h1>
            <button type='button' className=' p-3 bg-white ms-auto' style={{borderRadius:'10px'}}>Add To Cart
            </button>
            <button type='button' className=' p-3 text-white ms-3 border-0' style={{borderRadius:'10px',backgroundColor:'#c48d6f'}}>BUY NOW
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row heading">
          <div className="col-8 text-center d-flex">
            <h1 className=' d-flex align-items-center'>TERMS & CONDITION</h1>
            <div className="ms-auto" style={{width:'5px',height:'70px',backgroundColor:'black'}}></div>
          </div>
          <div className="col-4 text-center d-flex">
          <h1 className='align-items-center d-flex'>REVIEW STOCKS</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='fs-5 lh-small'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis cupiditate omnis illum ipsa doloribus error perferendis pariatur magnam rem eum placeat exercitationem corrupti accusamus, perspiciatis iure commodi dolorem. Quae pariatur illo obcaecati modi optio fugiat odio inventore, consequatur delectus fugit sit saepe distinctio repudiandae rem itaque ex est? Cupiditate!</p>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 ">
            <h3 style={{color:'#c48d6f'}} className='fw-bold text-center'>RELATED PRODUCTS</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-between">
          {products.slice(0,3).map((products,index)=>(
            <div className="card rounded-0 border-0" style={{width:"18rem"}} key={index}>
            <img src={products.image} className="card-img-top img-fluid rounded-0" alt="coth-image" style={{width:'500px',height:'500px'}}/>
            <div className="card-body d-flex">
            <div><h5 className="card-title">{products.title}</h5>
            <p className="card-text" style={{color:'#c9977c'}}>{products.price}$</p></div>
            <Link to={`/accessories/${index}`} className="btn border p-3 ms-auto">Add to Cart<FontAwesomeIcon icon={faCartShopping} size='1x'/></Link></div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid my-md-5 my-3" style={{ backgroundColor: '#c48d6f' }}>
  <div className="row my-3 vh-100 d-flex"   style={{
          backgroundImage: `url(${image2}),url(${image3}),url(${image4}),url(${image5})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '25% 100%, 25% 100%, 25% 100%, 25% 100%',
          backgroundPosition: '10% 0%, 35% 0%,60% 0%,90% 0%', 
        }}>
    <div className="col-12 vh-100 d-flex align-items-center" style={{backgroundColor: 'rgba(179, 149, 131, 0.7)'}}>
      <h1 className='dispaly-1 text-white text-center'>OUR COMPLETE STORE WILL BE LIVE VERY SOON WITH ALL PRODUCTS!</h1>
    </div>
  </div>
</div>
    </section>
  )
}

export default AccessoriesDetail
