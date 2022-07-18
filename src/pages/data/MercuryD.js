
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



<h1>MERCURY</h1>
             
             
             
        <Collapse label="1. OVERVIEW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-mercury.svg" alt="mercury"/>
        </div>

            <div className="col">
          
            <p style={ps}>Mercury is the smallest planet in the Solar System and the closest to the Sun. 
            Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
            Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
            </p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE &nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-mercury-internal.svg" alt="mercury-structure"/>
        </div>

            <div className="col">
            <p style={ps}>Mercury appears to have a solid silicate crust and mantle overlying a solid,
             iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. 
             The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.
                </p>
       </div>
      
       </div> </Collapse>
        
        <Collapse label="3. GEOLOGY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-mercury.svg" alt="mercury"/>

          <img style={imagestbase} src="images/planet-mercury-geology.png" alt="mercury-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>Mercury's surface is similar in appearance to that of the Moon, 
     showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. 
     It is more heterogeneous than either Mars's or the Moon’s.</p>
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
                    <p style={ctxd}class="card-text">58.6 DAYS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">87.97 DAYS</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">2,439.7 KM</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">430°C</p>
                </div>
            </div>
        </div>
</div>
</div>
        </>
        )
    }


export default Data





