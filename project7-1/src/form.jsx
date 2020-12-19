import React, {Component} from "react";
import { useFormik } from 'formik';

  class Form extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        formValues:{
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
        },
        formErrors:{
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
        },
        formValidity:{
          firstname:false,
          lastname:false,
          mobileno:false,
          UserLogin:{
              email:false,
              password:false
          },
          gender:false,
          country:false,
          dob:false
        },
        isSubmitting: false
      };
    }
    
    handleSubmit=(e)=>{
      e.preventDefault();
      const {formValues} = this.state;
          let data={
              firstname:formValues.firstname,
              lastname:formValues.lastname,
              mobileno:formValues.mobileno,
              UserLogin:{
                  email:formValues.UserLogin.email,
                  password:formValues.UserLogin.password
              },
              gender:formValues.gender,
              country:formValues.country,
              dob:formValues.dob
          }
          console.log(data);
          alert("Form successfully submited");
          const errors = {};
        if (!formValues.firstName) {
          errors.firstName = 'Required';
        } else if (formValues.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!formValues.lastName) {
          errors.lastName = 'Required';
        } else if (formValues.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
    
        if (!formValues.mobileno) {
            errors.mobileno = 'Required';
          } else if (formValues.mobileno.length <= 10) {
            errors.mobileno = 'mobile number should be 10 digits';
          }
    
        if (!formValues.UserLogin.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.UserLogin.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (!formValues.UserLogin.password) {
            errors.password = 'Required';
          } else if (formValues.UserLogin.password.length > 20) {
            errors.password  = 'password not match criteria';
          }
    
          if (!formValues.gender) {
            errors.gender = 'Required';
          } 
    
          if (!formValues.country) {
            errors.country = 'Required';
          } 
    
          if (!formValues.dob) {
            errors.dob = 'Required';
          } 
        return errors;
      }
    


  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }
    handleEmail=(e)=>{
      const {formValues} = this.state;
      let emailId=Object.assign({},formValues.UserLogin);
      emailId.email=e.target.value;
      this.setState({UserLogin:emailId});
      }
      
      handlePassword=(e)=>{
        const {formValues} = this.state;
      let pass=Object.assign({},formValues.UserLogin);
      pass.password=e.target.value;
      this.setState({UserLogin:pass});
      }
  
  render() 
  { 
    const { formValues, formErrors, isSubmitting } = this.state;
        return(
            <React.Fragment>
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="firstname">First name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="First name" id="firstname"
                                 name="firstname" value={formValues.firstName} onChange={this.handleChange} 
                                 />
                             </div>
                             {
                               formErrors.firstname
                             }
                    </div>
                    <div className="field">
                        <label htmlFor="lastname">Last name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Last name" id="lastname"
                                 name="lastname" value={formValues.lastName} onChange={this.handleChange} 
                                 />
                            </div>
                            
                            </div>
                </div>
                <div className="field">
                        <label htmlFor="mobileno">Mobile No.</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Mobile Number" id="mobileno"
                                 name="mobileno" value={formValues.mobileno} onChange={this.handleChange} 
                                 />
                            </div>   
                            
                    </div>

                    <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="email">Email Id</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Email Id" id="email"
                                 name="email" value={formValues.UserLogin.email} onChange={this.handleEmail} 
                                 />
                             </div>
                             
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                            <div className="ui fluid input">
                                 <input type="password" placeholder="Password" id="password"
                                 name="password" value={formValues.UserLogin.password} onChange={this.handlePassword} 
                                 />
                            </div>
                           
                            </div>
                </div>
                <div className="equal width fields">
                <div className="field">
                    <label>Gender</label>
                    <div className="equal width fields">
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange} /> 
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange} />
                            <label>Female</label>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="field">
                <select id="country" name="country" onChange={this.handleChange} >
                <option defaultValue="select country" selected disabled hidden>Select Country</option>
  <option value="india" name="country" >India</option>
  <option value="australia" name="country">Australia</option>
  <option value="newzeland" name="country">Newzeland</option>
  <option value="pakistan" name="country">Pakistan</option>
</select>

                </div>
                </div>
            <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-dob">DOB</label>
                            <div className="ui fluid input">
                            <input type="date" id="dob" name="dob" value={formValues.Dob} onChange={this.handleChange} />
               </div>
              
               </div>
                <button className="ui fluid button" type="submit" disabled={isSubmitting}>Submit
                
                </button>
            </form>

            
            </React.Fragment>
        )
  }
    }
export default Form;
