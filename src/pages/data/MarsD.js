
import Collapse from "../../components/Collapse"
import "../../App.css";


const imagest={
    height:"250px",
    width:"250px",
  
}
const ps={
    fontSize:"20px",
}
const imagestbase={
    transform: 'rotate(-0.25turn)',
    height:"210px",
    width:"180px"

}
const border={
    borderRadius: '25px',
    border: '2px solid white',
    padding: '20px'
}

const cardd={
  
    transform: 'none',
    justifyContent: 'space-between',
    gap: '5px',
    padding: '0 24px 48px 24px',
    border: '1px solid hsl(240,17%,26%)',
    backgroundColor:'Black',
   
    
}
const ctd={
    fontFamily: "'Spartan',sans-serif",
    fontSize: '1.2rem',
    lineHeight: '15px',
    letterSpacing: '0.046rem',
  color:'White',
    padding: '13px 0 19px 15px',
    width: "100%"
    

}
const ctxd={

    fontSize: '1.5rem',
    textAlign:'center',
    color: 'white',

}

  
  
    const Data = () =>{
        return(
            <>

<div class="Container-fluid">



<h1>MARS</h1>
             
             
             
        <Collapse label="1. OVERVIEW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-mars.svg" alt="mars"/>
        </div>

            <div className="col">
          
            <p style={ps}>
                
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".


            </p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE &nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-mars-internal.svg" alt="mars-structure"/>
        </div>

            <div className="col">
            <p style={ps}>
                
            Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.



                </p>
       </div>
      
       </div> </Collapse>
        
        <Collapse label="3. GEOLOGY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-mars.svg" alt="mars"/>

          <img style={imagestbase} src="images/planet-mars-geology.png" alt="mars-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>
     Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.


</p>
       </div>
     
       </div>
        </Collapse>


        </div>

        <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div style={cardd}  class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">ROTATION TIME</h4>
                    <p style={ctxd}class="card-text">1.03 DAYS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">1.88 YEARS</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">3,389.5 KM</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">-28°C</p>
                </div>
            </div>
        </div>
</div>
</div>
        </>
        )
    }


export default Data





