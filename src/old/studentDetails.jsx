import React, { Component } from 'react';
class StudentDetails extends React.Component {
    saveEdit = () =>{
        this.props.history.push("/home")
    };


    render() { 
        const Students = this.props.Students.filter(
            c =>c.id === parseInt( this.props.match.params.id)
        )[0];
        
        return ( 
            <React.Fragment>
             <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Arabic</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
                     <tr key={Students.id}>
                          <td>{Students.id}</td>
                          <td >{Students.name}</td>
                          <td >{Students.ar}</td>
                          <td>{Students.en}</td>
                      </tr>
         </tbody>
      </table>
      <button className="btn btn-secondary btn-sm m-2" onClick={this.saveEdit} > 
      <i className="fas fa-backward" >
          <span style={{padding:10}}>
          Back to Home page 
          </span>
      </i>
       </button>
      
            </React.Fragment>
            
         );
    }
}
 
export default StudentDetails;