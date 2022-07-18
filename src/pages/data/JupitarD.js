
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



<h1>JUPITER</h1>
             
             
             
        <Collapse label="1. OVERVIEW &nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-jupiter.svg" alt="jupiter"/>
        </div>

            <div className="col">
          
            <p style={ps}>
                
            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.

            </p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-jupiter-internal.svg" alt="jupiter-structure"/>
        </div>

            <div className="col">
            <p style={ps}>
            When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.

                </p>
       </div>
      
       </div> </Collapse>
        
        <Collapse label="3. GEOLOGY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-jupiter.svg" alt="jupiter"/>

          <img style={imagestbase} src="images/planet-jupiter-geology.png" alt="jupiter-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>
            The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.


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
                    <p style={ctxd}class="card-text">9.93 HOURS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">11.86 YEARS</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">69,911 KM</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">-108°C</p>
                </div>
            </div>
        </div>
</div>
</div>
        </>
        )
    }


export default Data





