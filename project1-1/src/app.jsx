import React from "react";
import Ucard from "./usercard";
import Faker from "faker";
import Ubutton from "./userbutton";

const App=()=>{
return(
<React.Fragment>
    <div className="ui container" style={{paddingTop:'20px'}}>
    <div class="ui four column grid">
      <Ubutton> <Ucard name="Mayur Vanmali" desc="Wordpress Developer" imgsrc={Faker.image.city()}/></Ubutton>
      <Ubutton> <Ucard name="Rohit Bhamore" desc="Java Developer" imgsrc={Faker.image.city()}/></Ubutton>
      <Ubutton> <Ucard name="Ketan Masaye" desc="Python Developer" imgsrc={Faker.image.city()}/></Ubutton>
      <Ubutton> <Ucard name="Navin Patil" desc="Architect" imgsrc={Faker.image.city()}/></Ubutton>
        </div> 
        </div>
    </React.Fragment>
)};

export default App;