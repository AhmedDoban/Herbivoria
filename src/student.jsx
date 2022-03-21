import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Route, Link } from 'react-router-dom';
import StudentDetails from './studentDetails';

class LogIn extends Component {
    state = { 
        studentId :"",
        errors :{}
     }

     schema = {
        studentId : Joi.string().required(),
     }

     handelChange =(e)=>{
        let state ={...this.state};
        state [e.currentTarget.name] =e.currentTarget.value;
        this.setState(state)
        
    };

    handelSubmit=(e)=>{
        e.preventDefault();
        const errors =this.validate();
        if(errors)return;

    };
    validate =()=>{
       const errors ={} ;
       const res= Joi.validate(this.state ,this.schema ,{abortEarly :false})   ;

       if(res.errors === null) {
        this.setState({errors : {}})  
        console.log("null");
        return null;
       }
       for (const error of res.error.details){
        errors [error.path]=error.message;
    }   
       this.setState({errors})     
    }
    change =()=>{
 
        this.props.history.replace(`/Students/${this.state.studentId}`)
    }
    render() { 
    return ( 
            <React.Fragment>      
                <div    className="row">
                   
                                <form onSubmit={this.handelSubmit}>
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Enter your ID</span>
                                    <input
                                    name="studentId"
                                    value={this.state.studentId} 
                                    type="text"
                                    onChange={this.handelChange}
                                    className="form-control"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon1"  onClick={this.change}>Button</button>

                            <div id="inputGroup-sizing-sm" className="form-text-1" style={{paddingLeft:100, paddingRight:100}} > never share your Id with anyone.</div>   
                        </div>
                        {this.state.errors.studentId &&(
                                <div className="alert alert-danger">
                                "It Is not Alawwing to be empty"
                                </div>
                            )}
                                </form>
                    </div>
                    <div className="col">
                        <Route path="/Students/1" component={StudentDetails} />
                    </div>


         </React.Fragment>
         );
    }
}
 
export default LogIn;
