import React , {Component} from "react";
import SimpleReactValidator from 'simple-react-validator';
class Form extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            mobileno:'',
            UserLogin:{
                email:'',
                password:''
            },
            gender:'',
            country:'',
            dob:''
        }
        this.validator = new SimpleReactValidator({autoForceUpdate:this});
    }
handleSubmit=(e)=>{
e.preventDefault();
if(this.validator.allValid())
{
    let data={
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        mobileno:this.state.mobileno,
        UserLogin:{
            email:this.state.UserLogin.email,
            password:this.state.UserLogin.password
        },
        gender:this.state.gender,
        country:this.state.country,
        dob:this.state.dob
    }
    console.log(data);
    alert("Form successfully submited")
}
else {
    this.validator.showMessages();
    this.forceUpdate();
}
}

handleInputData=(e)=>{
this.setState({[e.target.name]:e.target.value})
}

handleEmail=(e)=>{
let emailId=Object.assign({},this.state.UserLogin);
emailId.email=e.target.value;
this.setState({UserLogin:emailId});
}

handlePassword=(e)=>{
let pass=Object.assign({},this.state.UserLogin);
pass.password=e.target.value;
this.setState({UserLogin:pass});
}


    render()
    {
        return(
            <React.Fragment>
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-first-name">First name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="First name" id="form-subcomponent-shorthand-input-first-name"
                                 name="firstname" value={this.state.firstname} onChange={this.handleInputData}
                                 />
                             </div>
                             {
                                 this.validator.message('firstname',this.state.firstname,'required|min:5|string')
                             }
                    </div>
                    <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-last-name">Last name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Last name" id="form-subcomponent-shorthand-input-last-name"
                                 name="lastname" value={this.state.lastname} onChange={this.handleInputData}
                                 />
                            </div>
                            {
                                this.validator.message('lastname',this.state.lastname,'required|min:5|string')
                            }
                            </div>
                </div>
                <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-mobile-number">Mobile No.</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Mobile Number" id="form-subcomponent-shorthand-input-mobile-number"
                                 name="mobileno" value={this.state.mobileno} onChange={this.handleInputData}
                                 />
                            </div>   
                            {
                                this.validator.message('mobileno',this.state.mobileno,'required|min:10|phone')
                            }     
                    </div>

                    <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-email">Email Id</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Email Id" id="form-subcomponent-shorthand-input-email"
                                 name="email" value={this.state.UserLogin.email} onChange={this.handleEmail}
                                 />
                             </div>
                             {
                                 this.validator.message('email',this.state.UserLogin.email,'required|email')
                             }
                    </div>
                    <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-password">Password</label>
                            <div className="ui fluid input">
                                 <input type="password" placeholder="Password" id="form-subcomponent-shorthand-input-password"
                                 name="password" value={this.state.UserLogin.password} onChange={this.handlePassword}
                                 />
                            </div>
                            {
                                this.validator.message('password',this.state.UserLogin.password,'required|min:5|max:20')
                            }
                            </div>
                </div>
                <div className="equal width fields">
                <div className="field">
                    <label>Gender</label>
                    <div className="equal width fields">
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="male" name="gender" value="male" onChange={this.handleInputData}/>
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="female" name="gender" value="female" onChange={this.handleInputData}/>
                            <label>Female</label>
                        </div>
                    </div>
                    </div>
                    {
                        this.validator.message('gender',this.state.gender,'required')
                    }
                </div>
                <div className="field">
                <select id="country" name="country" onChange={this.handleInputData}>
                <option defaultValue="select country" selected disabled hidden>Select Country</option>
  <option value="india" name="country" >India</option>
  <option value="australia" name="country">Australia</option>
  <option value="newzeland" name="country">Newzeland</option>
  <option value="pakistna" name="country">Pakistan</option>
</select>
{
    this.validator.message('country',this.state.country,'required')
}
                </div>
                </div>
            <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-dob">DOB</label>
                            <div className="ui fluid input">
                            <input type="date" id="dob" name="dob" value={this.state.Dob} onChange={this.handleInputData}/>
               </div>
               {
                  this.validator.message('dob',this.state.dob,'required')
               }
               </div>
                <button className="ui fluid button">Submit</button>
            </form>

            
            </React.Fragment>
        )
    }
}
export default Form;