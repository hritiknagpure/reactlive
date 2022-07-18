
import React from 'react';
const  GFG={
    color: 'yellow',
    fontSize: '50px',
    textShadow: '0 0 3px #FF0000',
    
    transform: 'translate(0%, -310%)'
  }

 
  const border={
    borderRadius: '25px',
    border: '2px solid black',
    padding: '20px'
}
const Earthb = () => {
    return (
        <>

<div style={border} className='row'>
                <div className='col-md-12'>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/earthb.jpg" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h1 style={GFG}>WELCOME TO EARTH</h1>
                                    <p></p>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
</div>

        </>
    );
}

export default Earthb;