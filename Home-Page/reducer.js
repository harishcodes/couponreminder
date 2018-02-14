const INITIAL_STATE={
    newRegOrLogin:""
}
export default function Couponreducer(state={INITIAL_STATE},action){
    
    switch (action.type){
        case "NEW_REGISTRATION":{
            return {...state,newRegOrLogin:"register"}
        }
        case "LOGIN":{
            return {...state,newRegOrLogin:"login"}
        }
        case "HOME":{
            return INITIAL_STATE
        }
        default: {
            return {...state}
        }
    }
    return state
}