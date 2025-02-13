import commonApi from "./commonApi";
export const uploadVideo= async(requestBody)=>{
    await  commonApi("post","/videos",requestBody)
}
export const getVideo
= async()=>{
    await commonApi("get","/videos","")
}