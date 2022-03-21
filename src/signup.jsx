import React, { Component } from 'react';
const SignUP = () => {
    return ( 
        <div class="login">
         <h1>Sign up</h1>
          <form method="post">
         <input type="text" name="u" placeholder="First Name" required="required" />
        <input type="text" name="u" placeholder="Last Name" required="required" />
        <input type="email" name="u" placeholder="Email" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="password" name="p" placeholder="re-Password" required="required" />
        <input type="submit" class="btn btn-primary btn-block btn-large" value="Sign up"/>
       
    </form>
        </div>
     );
}
 
export default SignUP;