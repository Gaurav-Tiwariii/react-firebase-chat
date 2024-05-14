import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const Upload = async (file) => {
    const date= new Date().toISOString();

    const storage = getStorage();

    const storageRef = ref(storage, `images/${date + file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
         uploadTask.on('state_changed',
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            
        },
        (error) => {
            console.error('Upload error:', error);
            reject(error.code); // Reject the promise if an error occurs
        },
        () => {
           
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                resolve(downloadURL);
            });
        }
    );
});

}
export default Upload