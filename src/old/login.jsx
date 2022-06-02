import React, { Component } from 'react';
import './style.css';
const LogIn = () => {
  return (
 <div class="login">
  <h1>Login</h1>
    <form method="post">
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="button" class="btn btn-primary btn-block btn-large" value="Let me in"/>
        
    </form>
    </div>  
      );
}
 
export default LogIn;