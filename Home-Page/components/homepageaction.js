import React from 'react'
import {connect} from 'react-redux'
import {openRegisterFunction} from '../actions.js'
import {openLoginFunction} from '../actions.js'
import {openHomeScreen} from '../actions.js'
import {fetchFuelDetailsWithLatLng} from '../actions.js'
import homepage from './homepage.js'

const mapStateToProps = (state) => {
    return ({
        newRegOrLogin:state.Couponreducer.newRegOrLogin
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        openRegisterFunction: () => {
            console.log("gg")
            dispatch(openRegisterFunction())
        },
        openLoginFunction: ()=> {
            dispatch(openLoginFunction())
        },
        openHomeScreen: ()=> {
            dispatch(openHomeScreen())
        }

    }
}

const HomePageAction = connect(mapStateToProps,mapDispatchToProps)(homepage)
export default HomePageAction