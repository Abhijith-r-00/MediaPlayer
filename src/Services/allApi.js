import commonApi from "./commonApi";
export const uploadVideo= async(requestBody)=>{
    // console.log(requestBody);
    
    return await  commonApi("post","/videos",requestBody)
}
export const getVideo = async()=>{
   return await commonApi("get","/videos","")
}