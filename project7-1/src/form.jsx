import React from "react";
import { useFormik } from 'formik';

  const Form = () => {
    const formik = useFormik({
      initialValues: {
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
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        console.log("form data",values);
      },
      validate: values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
    
        if (!values.mobileno) {
            errors.mobileno = 'Required';
          } else if (values.mobileno.length <= 10) {
            errors.mobileno = 'mobile number should be 10 digits';
          }
    
        if (!values.UserLogin.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.UserLogin.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (!values.UserLogin.password) {
            errors.password = 'Required';
          } else if (values.UserLogin.password.length > 20) {
            errors.password  = 'password not match criteria';
          }
    
          if (!values.gender) {
            errors.gender = 'Required';
          } 
    
          if (!values.country) {
            errors.country = 'Required';
          } 
    
          if (!values.dob) {
            errors.dob = 'Required';
          } 
        return errors;
      }
    });
    

    
        return(
            <React.Fragment>
            <form className="ui form" onSubmit={formik.handleSubmit}>
                <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="firstname">First name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="First name" id="firstname"
                                 name="firstname" value={formik.values.firstName} onChange={formik.handleChange} 
                                 />
                             </div>
                             {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    </div>
                    <div className="field">
                        <label htmlFor="lastname">Last name</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Last name" id="lastname"
                                 name="lastname" value={formik.values.lastName} onChange={formik.handleChange} 
                                 />
                            </div>
                            { formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                            </div>
                </div>
                <div className="field">
                        <label htmlFor="mobileno">Mobile No.</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Mobile Number" id="mobileno"
                                 name="mobileno" value={formik.values.mobileno} onChange={formik.handleChange} 
                                 />
                            </div>   
                            { formik.touched.mobileno && formik.errors.mobileno ? <div>{formik.errors.mobileno}</div> : null}
                    </div>

                    <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="email">Email Id</label>
                            <div className="ui fluid input">
                                 <input type="text" placeholder="Email Id" id="email"
                                 name="email" value={formik.values.UserLogin.email} onChange={formik.handleChange} 
                                 />
                             </div>
                             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                            <div className="ui fluid input">
                                 <input type="password" placeholder="Password" id="password"
                                 name="password" value={formik.values.UserLogin.password} onChange={formik.handleChange} 
                                 />
                            </div>
                            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            </div>
                </div>
                <div className="equal width fields">
                <div className="field">
                    <label>Gender</label>
                    <div className="equal width fields">
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="male" name="gender" value="male" onChange={formik.handleChange} /> 
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" id="female" name="gender" value="female" onChange={formik.handleChange} />
                            <label>Female</label>
                        </div>
                    </div>
                    </div>
                    {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
                </div>
                <div className="field">
                <select id="country" name="country" onChange={formik.handleChange} >
                <option defaultValue="select country" selected disabled hidden>Select Country</option>
  <option value="india" name="country" >India</option>
  <option value="australia" name="country">Australia</option>
  <option value="newzeland" name="country">Newzeland</option>
  <option value="pakistan" name="country">Pakistan</option>
</select>
{formik.touched.country && formik.errors.country ? <div>{formik.errors.country}</div> : null}
                </div>
                </div>
            <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-input-dob">DOB</label>
                            <div className="ui fluid input">
                            <input type="date" id="dob" name="dob" value={formik.values.Dob} onChange={formik.handleChange} />
               </div>
               {formik.touched.dob && formik.errors.dob ? <div>{formik.errors.dob}</div> : null}
               </div>
                <button className="ui fluid button" type="submit">Submit</button>
            </form>

            
            </React.Fragment>
        )
    }
export default Form;
