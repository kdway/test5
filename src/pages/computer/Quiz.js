import React from 'react'
import '../computer/styles/Quiz.css'
function Quiz() {
    return (
        <>

        <h3 className="QP">Quiz Computing</h3>
        <div className='container1 ms-3 me-3'>
         <div className='row'>
          <div className='col'>
     <div className='shadow-lg p-2 m-3 mb-2 rounded' style={{borderRadius:'0.3rem'}}>
      <h3 className='opt' style={{textAlign:'center'}}>Quiz 1-level1</h3>
      <hr></hr>
     <p>to execute Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet in itaque atque hic! Aliquam, saepe nulla officia culpa vitae velit a qui iusto dolore accusamus aspernatur, nostrum maxime ulla</p>
     <a href='/Quiz1'><button className='robotics'style={{marginLeft:'19rem'}}>Start</button></a>
     </div>
          
  </div>
  <div className='col'>
     <div className='shadow-lg p-2 m-3 mb-2 rounded' style={{borderRadius:'0.3rem'}}>
     <h3 className='opt' style={{textAlign:'center'}}>Quiz 2-level2</h3>
     <hr></hr>
     <p>to execute Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet in itaque atque hic! Aliquam, saepe nulla officia culpa vitae velit a qui iusto dolore accusamus aspernatur, nostrum maxime ulla</p>
     <button className='robotics' href='robotics 'style={{marginLeft:'19rem'}}>Start</button>
     </div>
     
  </div>

  <div className='col'>
     <div className='shadow-lg p-2 m-2 mb-3 rounded'style={{borderRadius:'0.3rem'}}>
     <h3 className='opt' style={{textAlign:'center'}}>Quiz 3-level3</h3>
     <hr></hr>
     <p>to execute Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet in itaque atque hic! Aliquam, saepe nulla officia culpa vitae velit a qui iusto dolore accusamus aspernatur, nostrum maxime ulla</p>
     <button className='robotics' href='robotics'style={{marginLeft:'19rem'}}>Start</button>
     </div>
     
  </div>

</div>

</div>
        </>
       
        

    )
}

export default Quiz
