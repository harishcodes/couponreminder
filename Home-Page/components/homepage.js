import React from 'react'
import styles from '../styles/style.css'
import stylesSpinner1 from '../styles/cssspinner.css'
import ReactDOM from 'react-dom'
import {FormGroup,InputGroup,Tooltip,OverlayTrigger,ControlLabel,FormControl,Panel,Glyphicon,Button,Well,Col,Row,Popover,Form,ButtonToolbar,Alert} from 'react-bootstrap'

export default class homepage extends React.Component{
    constructor(){
        super()
        this.state={}
        console.log("he")
    }
    componentDidMount(){
        console.log("he")
    }
    
    componentWillMount(){
        console.log("he1")
    }
    
    render(){

        return (
            <div>
               <h1> dd</h1>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" active>Register</Button>
                    <Button bsSize="large" bsStyle="success" active>Login</Button>
                </ButtonToolbar>
            </div>
            )
        
    }
    

    
}

