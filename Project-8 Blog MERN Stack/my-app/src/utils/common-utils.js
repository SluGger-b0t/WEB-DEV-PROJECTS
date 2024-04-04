export const getaccessToken = () => {
  return sessionStorage.getItem("accessToken");
};
export const addEllipse=(str,limit)=>{
  return  str.length >limit ? str.substring(0,limit)+'...':str
}