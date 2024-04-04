/* import axios from 'axios'
import { API_NOTIFICATION_MESSAGES,SERVICE_URL } from '../constants/config'
const API_URL='http://localhost:8000/'
const axiosInstance= axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-type":'application/json'
    }
})
const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};
axiosInstance.interceptors.request.use((config)=>{
    return config

},(error)=>{
    return Promise.reject(error)
})
axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(processError(error));
  }
);

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////

const processError=(error)=>{
    if(error.response){
        //request made but server responded with status other than 200
        console.log('error in response',error.toJSON())
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }
    }
    else  if (error.request){
        //request made but no response was recieved
         console.log("error in request", error.toJSON());
         return {
           isError: true,
           msg: API_NOTIFICATION_MESSAGES.requestFailure,
           code:''
         };
    }
    else{
        //frontend issue
          console.log("error in NETWORK", error.toJSON());
          return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code:""
          };
    }

}
const API={}
for(const[key,value] of Object.entries(SERVICE_URL)){
    API[key]=(body,showUploadProgress,showDownloadProgress)=>{
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress:function(progressEvent){
                if(showUploadProgress){
                    let percentComplete=Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showUploadProgress(percentComplete)
                }

            },
            onDownloadProgress:function(progressEvent){
                if(showDownloadProgress){
                    let percentComplete=Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showDownloadProgress(percentComplete)
                }

            }
        })
    }
}
export {API} */