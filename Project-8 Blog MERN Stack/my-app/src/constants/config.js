export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'Loading...',
        message:'Data is being loaded , please wait..'
    },
    success:{
        title:'Success',
        message:'Data Successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching data from the server. Please try again later'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'
    },
    networkFailure:{
        title:'Error',
        message:'Unable to connect with server.Please check internet connectivity and try again'
    }

}
///API SERVICE CALL
///SERVICE CALL:{url:'/', method:'POST,GET,DELETE,PUT',params:true/false,query:true/false} 
export const SERVICE_URL={
    userSignup:{url:'/signup',method:'POST'}
}