const intialState = {
    authErr: null
}

const AuthReducer = (state = intialState, action) => {
    switch(action.type){
        case 'SIGN_SUCCESS':{
            console.log('signed sucess')
            return{
                ...state,
                authErr: null
            }
        }

        case 'SIGN_ERROR': {

         console.log('there was an error')
         return{
            ...state,
            authErr: action.err.message
        }
        }

        case 'SIGN_OUT':{
            console.log('signed out sucess')
            return{
                ...state,
                authErr: null
            }
       } 

        case 'SIGN_OUT_ERR': {

         console.log('there was an errorin sign out')
         return{
            ...state,
            authErr: action.err.message
        }
        }

        case 'NEW_USER':{

         console.log('signed out sucess')
         return{
            ...state,
            authErr: null
        }
        }

        case 'NEW_USER_ERR':{

         console.log('there was an error loging in')
         return{
            ...state,
            authErr: action.err.message
        }
        }
        case 'DP_SUCCESS': {
            console.log('added dp')
            return{
                ...state, 
                authErr: null
            }
        }

        case 'DP_ERR':{

            console.log('there was an error ADD dp')
            return{
               ...state,
               authErr: action.err.message
           }
           }

        default: return state

    }
    
}

export default AuthReducer