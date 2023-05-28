import {ID,storage} from '@/appwrite'

const uploadImage= async (file:File)=>{
    if(!file) return
    const fileUploaded= await storage.createFile(
        "6471c0ab196d10ec787a",
        ID.unique(),
        file
    );
    return fileUploaded;

};

export default uploadImage; 
