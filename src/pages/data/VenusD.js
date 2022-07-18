
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



<h1>VENUS</h1>
             
             
             
        <Collapse label="1. OVERVIEW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-venus.svg" alt="venus"/>
        </div>

            <div className="col">
          
            <p style={ps}>Venus is the second planet from the Sun. 
            It is named after the Roman goddess of love and beauty. 
            As the brightest natural object in Earth's night sky after the Moon, 
            Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.</p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE &nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-venus-internal.svg" alt="venus-structure"/>
        </div>

            <div className="col">
            <p style={ps}>The similarity in size and density between Venus and Earth suggests they share a similar internal structure: 
            a core, mantle, and crust. Like that of Earth, 
            Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.
                </p>
       </div>
      
       </div> </Collapse>
        
        <Collapse label="3. GEOLOGY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-venus.svg" alt="venus"/>

          <img style={imagestbase} src="images/planet-venus-geology.png" alt="venus-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>
     Much of the Venusian surface appears to have been shaped by volcanic activity. 
     Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. 
     The only volcanic complex of this size on Earth is the Big Island of Hawaii.
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
                    <p style={ctxd}class="card-text">243 DAYS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">224.7 DAYS</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">6,051.8 KM</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">471°C</p>
                </div>
            </div>
        </div>
</div>
</div>
        </>
        )
    }


export default Data





