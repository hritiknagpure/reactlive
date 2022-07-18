
import Collapse from "../../components/Collapse"
import Earthb from "../../banner/Earthb"
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


<Earthb/>

<h1>EARTH</h1>
             
             
             
        <Collapse label="1.  OVERVIEW &nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest}src="images/planet-earth.svg" alt="earths"/>
        </div>

            <div className="col">
          
            <p style={ps}>Third planet from the Sun and the only known planet to harbor life. 
                About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, 
                physical properties and geological history have allowed life to evolve and thrive.
            </p></div>
            </div>
        </Collapse>
       
        <Collapse label="2. STRUCTURE &nbsp;">
        <div className="row">

        <div style={border} className="col">   
        <img style={imagest} src="images/planet-earth-internal.svg" alt="earths-structure"/>
        </div>

            <div className="col">
            <p style={ps}>Earth's interior, like that of the other terrestrial planets, 
                is divided into layers by their chemical or physical (rheological) properties. 
                The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.</p>
       </div>
      
       </div> 
       </Collapse>
        
        <Collapse label="3. GEOLOGY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="row">

        <div className="col">   
          <div style={border} className="container-fluid">
          <img style={imagest}src="images/planet-earth.svg" alt="earths"/>

          <img style={imagestbase} src="images/planet-earth-geology.png" alt="earths-Surface"/>

          </div>
          </div>

            <div className="col">
     <p style={ps}>The total surface area of Earth is about 510 million km2. 
        The continental crust consists of lower density material such as the igneous rocks granite and andesite. 
        Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.</p>
       </div>
     
       </div>
        </Collapse>
        


        <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div style={cardd}  class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">ROTATION TIME</h4>
                    <p style={ctxd}class="card-text">0.99 DAYS</p>
                  </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">REVOLUTION TIME</h4>
                    <p style={ctxd}class="card-text">365.26 DAYS</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd} class="card">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">RADIUS</h4>
                    <p style={ctxd}class="card-text">6,371 KM</p>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div style={cardd}  class="card card-transparent">
                <div class="card-block">
                    <h4 style={ctd}class="card-title">AVERAGE TEMP</h4>
                    <p style={ctxd}class="card-text">16°C</p>
                </div>
            </div>
        </div>
</div>
</div>

        </>
        )
    }


export default Data





