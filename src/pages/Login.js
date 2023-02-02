import React from 'react'
import '../Style/login.css'
function Login() {
    return (
      <>

<div className='container shadow-lg mt-2 mb-1 round bg-light flyer'>
            <div className='row'>
                <div className='col-6 image'>
                   <img src='./h-w.png'></img>
                </div>
                <div className='col-6 mt-5'>
                    <h3 className='head' style={{textAlign:'center'}}>Headphone pro</h3>
                    <p className='para mt-3'>Some quick example text to build on the card title and make up the bulk of the card's content</p>
                    <h4 className='color'>colors:</h4>
                  <div className='colors'>
                    <div className='blue bg-warning' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
                
                    <div className='blue bg-white' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
                    <div className='blue bg-info' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
                    <div className='blue bg-black' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>

                  </div>
                     
                 

              </div>
                </div>

              
               
                
               

            </div>


<div className='container shadow-lg mt-5 mb-1 round bg-light flyer'>
<div className='row'>
    <div className='col-6 image'>
       <img src='./p-blau.png'></img>
    </div>
    <div className='col-6 mt-5'>
        <h3 className='head' style={{textAlign:'center'}}>PULLOVER WINTER 2023</h3>
        <p className='para mt-3'>Some quick example text to build on the card title and make up the bulk of the card's content</p>
        <h4 className='color'>colors:</h4>
      <div className='colors'>
        <div className='blue bg-warning' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
    
        <div className='blue bg-white' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
        <div className='blue bg-info' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>
        <div className='blue bg-black' style={{height:'2rem',width:'2rem',borderRadius:'0.5rem'}}></div>

      </div>
         
     

    </div>
    </div>
    </div>

    <div className="container test">
      <div className="row">
        <div className="col bg-white rounded shadow-lg ">
          
        </div>
        <div className="col bg-white rounded shadow-lg ms-2">
          <p>Some quick example text to build on the card title and make up the bulk of the card's conten</p>
        </div>
      </div>

    </div>
      
      </>
       
        
    )
}

export default Login
