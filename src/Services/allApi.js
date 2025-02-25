import commonApi from "./commonApi";
export const uploadVideo= async(requestBody)=>{
    // console.log(requestBody);
    
    return await  commonApi("post","/videos",requestBody)
}
export const getVideo = async()=>{
   return await commonApi("get","/videos","")
}

export const addHistory=async(videoDetails)=>{
    return await commonApi("post","/history",videoDetails)
}
export const getHistory=async()=>{
    return await commonApi("get","/history","")
}
export const deleteHistory=async(id)=>{
    return await commonApi("delete",`/history/${id}`,{})
}
export const allVideoDelete=async(id)=>{
    return await commonApi("delete",`/videos/${id}`,{})
}
export const createCatagory=async(catagoryDetails)=>{
    return await commonApi("post","/Category",catagoryDetails)
}
export const getCatagory=async()=>{
    return await commonApi("get","/Category","")
}
export const deleteCatagory =async(id)=>{
    return await commonApi("delete",`/Category/${id}`,{})
}
export const getSingleVideo =async(id)=>{
    return await commonApi("get",`/videos/${id}`,{})
}
export const updateCatagoryVideo =async(id,catagoryDetails)=>{
    return await commonApi("put",`/Category/${id}`,catagoryDetails)
}
export const findCategory =async(id)=>{
    return await commonApi("get",`/Category/${id}`,"")
}