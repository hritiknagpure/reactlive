
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



<h1>SATURN</h1>
             
             
             
        <Collapse label="1. OVERVIEW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-saturn.svg" alt="saturn"/>
        </div>

            <div className="col">
          
            <p style={ps}>
                
            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.
            </p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-saturn-internal.svg" alt="saturn-structure"/>
        </div>

            <div className="col">
            <p style={ps}>
            Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.
                </p>
       </div>
      
       </div> </Collapse>
        
        <Collapse label="3. GEOLOGY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-saturn.svg" alt="saturn"/>

          <img style={imagestbase} src="images/planet-saturn-geology.png" alt="saturn-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>
     The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.

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
                    <p style={ctxd}class="card-text">10.8 HOURS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">29.46 YEARS

</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">658,232 KM

</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">-138°C</p>
                </div>
            </div>
        </div>
</div>
</div>
        </>
        )
    }


export default Data





