import React from 'react';
import {Form, FormControl,FormLabel} from 'react-bootstrap'





const Login=()=>{
    return(
      <div class="container">
              <Form>
          <FormLabel>Username</FormLabel>
        <FormControl type="Text" name="username" label="Username"
              required="true" />
            <FormLabel>Password</FormLabel>
        <FormControl type="password" name="dob" label="Date of Birth"
              required="true" />
      </Form>
    </div>
    )
}
export default Login;