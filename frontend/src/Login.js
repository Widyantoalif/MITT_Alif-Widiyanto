import React, { Component } from "react";
// import AuthService from './AuthService';
// import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


class Login extends Component {
  render() {
      return (
          <React.Fragment>
            <div className='container background' style={{height : '800px'}}>
              <div className='row' style={{margin : '50px'}}>
                <div className='col-6'></div>
                <div className='col-6' style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.3)'}}>
                  <div style={{textAlign : 'center'}}>                  
                    <span>
                     Login
                    </span><br />
                  </div>

                  <Form>
                    <Form.Group>
                      <Form.Text>
                        Username : 
                      </Form.Text>
                      <Form.Control type="username" name="username" placeholder="" onChange={this._handleChange} />
                      
                    </Form.Group>
                    <Form.Group>
                      <Form.Text>
                        Password : 
                      </Form.Text>
                      <Form.Control type="password" name="password" placeholder="Enter password" onChange={this._handleChange} />
                    </Form.Group>
                    <Button variant='primary' type='submit' onClick={this.handleFormSubmit}>
                      Login
                    </Button>
                    {/* <div>
                      <Link className="center" to="/register">Dont have an account? <span>Signup</span></Link>
                    </div> */}
                  </Form>
                </div>
              </div>
            </div>
          </React.Fragment>
      );
  }


}


export default Login;
