import React from "react";
import Faker from "faker";
import Card from "./usercard";
import Ubuttons from "./userbuttons";

const App =() =>
{
return (
    <React.Fragment>
    <div className="container" style={{padding:"10px"}}>
        <div className="row">
        <Ubuttons><Card name="mayur vanmali" position="wordpress devloper" imgurl={Faker.image.people()}/></Ubuttons>
        <Ubuttons><Card name="chinmay vanmali" position="java devloper" imgurl={Faker.image.people()}/></Ubuttons>
        <Ubuttons><Card name="rohit bhamore" position="python devloper" imgurl={Faker.image.people()}/></Ubuttons>
         </div>
    </div>
    </React.Fragment>
)};

export default App;