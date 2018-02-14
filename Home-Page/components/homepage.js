import React from 'react'
import styles from '../styles/style.css'
import stylesSpinner1 from '../styles/cssspinner.css'
import ReactDOM from 'react-dom'
import {FormGroup,InputGroup,Tooltip,OverlayTrigger,ControlLabel,FormControl,Panel,Glyphicon,Button,Well,Col,Row,Popover,Form,ButtonToolbar,Alert} from 'react-bootstrap'

export default class HomePage extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let element = document.getElementById("sign")
        element.classList.remove("fadein")
        element.classList.add("fadeout")
    }

    /*componentWillMount(){
        console.log("he1")
    }*/

    openRegisterLogic(){
        const {dispatch,openRegisterFunction} = this.props

        let element = document.getElementById("sign")
        if (element.classList.contains("fadein")){
            element.classList.remove("fadein")
            element.classList.add("fadeout")
        } else {
            element.classList.remove("fadeout")
            element.classList.add("fadein")
        }
        openRegisterFunction()
    }

    openHomeScreen(){
        const {dispatch,openHomeScreen} = this.props
        let element = document.getElementById("sign")
        element.classList.remove("fadein")
        //element.classList.remove("fadeout")
        element.classList.add("fadeout")
        openHomeScreen()
    }

    openLoginLogic(){
        const {dispatch,openLoginFunction} = this.props
        let element = document.getElementById("sign")
        if (element.classList.contains("fadein")){
            element.classList.remove("fadein")
            element.classList.add("fadeout")
        } else {
            element.classList.remove("fadeout")
            element.classList.add("fadein")
        }
        openLoginFunction()
    }

    render(){

        var buttonDivStyle = {
            textAlign:'center',
            paddingBottom:'10px',
            //display:'inline-block'
        }

        var registerLoginDiv
        var regLoginButtonBar
        const {newRegOrLogin} = this.props

        if (newRegOrLogin === "register" || newRegOrLogin === "login"){
            regLoginButtonBar = <ButtonToolbar>
                <Button bsSize="large" bsStyle="info" active onClick={this.openHomeScreen.bind(this)}>
                    <i className="fa fa-arrow-left fa-1x" aria-hidden="true"></i>
                </Button>
            </ButtonToolbar>
        } else {
            regLoginButtonBar = <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" active onClick={this.openRegisterLogic.bind(this)}>Register</Button>
                <Button bsSize="large" bsStyle="success" active onClick={this.openLoginLogic.bind(this)}>Login</Button>
            </ButtonToolbar>
        }

        if (newRegOrLogin === "register"){
            registerLoginDiv = <div>
                            <form >
                                <FormGroup controlId="emailGroup"  bsSize="large">
                                      <FormControl type="text" placeholder="Email Address" ref="email" required>
                                      </FormControl>
                                </FormGroup>                          
                                <FormGroup controlId="firstNameGroup"  bsSize="large">
                                    <FormControl type="text" placeholder="First Name" ref="firstName" required>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="lastNameGroup"  bsSize="large">
                                    <FormControl type="text" placeholder="Last Name" ref="lastName" required>
                                    </FormControl>
                                </FormGroup>                                    
                                <FormGroup controlId="passwordGroup" bsSize="large">
                                    <FormControl type="password"  placeholder="Password" ref="password" required>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <FormControl type="password"  placeholder="Confirm Password" ref="confirmpassword" required>
                                    </FormControl>
                                </FormGroup>
                                <Button bsSize="large" bsStyle="success" type="submit">
                                    Sign Up
                                </Button>
                            </form>
                        </div>

        } else if(newRegOrLogin === "login") {
            registerLoginDiv =  <div>
                <form >
                    <FormGroup controlId="userNameGroup"  bsSize="large">
                        <FormControl type="text" placeholder="UserName/Email" ref="userName" required>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl type="password"  placeholder="Password" ref="loginPassword" required>
                        </FormControl>
                    </FormGroup>
                    <Button bsSize="large" bsStyle="success" type="submit">
                        Login
                    </Button>
                </form>
            </div>

        } else {
            registerLoginDiv = ""
        }

        return (
            <div style={buttonDivStyle}>
                {regLoginButtonBar}
                <div className="Signup fadein" id = "sign">
                    {registerLoginDiv}
                </div>
            </div>
            )

    }



}
