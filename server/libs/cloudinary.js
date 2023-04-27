import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name:'damz2mem8',
    api_key:'825621727728859',
    api_secret:'2aEwEoMUUpR-DJaBUJ0ATTEb-SY'
})
export const  uploadContract= async filepath =>{
    return await cloudinary.uploader.upload(filepath,{
        folder:'contracts',
        flags: 'attachment:contrato'
    })
}

