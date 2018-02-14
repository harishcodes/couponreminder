import React from 'react';
import ReactDOM from 'react-dom';
import HomePageAction from './Home-Page/components/HomePageAction.js'
import Menu from './Menu.js';
export default class CouponReminder extends React.Component {
    
    constructor(){
        super();
    }
 
    
    
    render(){
        
              
        return (
            <div>
                <Menu/>                     
                <HomePageAction/>     
            </div>
            )
    }
}


    
