import React from 'react'
import {connect} from 'react-redux'
import {fetchFuelDetails} from '../actions.js'
import {handleMarkerClick} from '../actions.js'
import {fetchFuelDetailsWithLatLng} from '../actions.js'
import homepage from './homepage.js'

const mapStateToProps = (state) => {
    return ({
        firstLoad:state.Fuelreducer.firstLoad,
        error:state.Fuelreducer.error,
        currentLocError:state.Fuelreducer.currentLocError
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFuelDetails: (zipCode) => {
            console.log("gg")
            dispatch(fetchFuelDetails(zipCode))
        }        
    }
}

const homepageaction = connect(mapStateToProps,mapDispatchToProps)(homepage)
export default homepageaction