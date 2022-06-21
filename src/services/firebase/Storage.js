import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// Configuration
import CONFIG from "../../global/CONFIG";
import firebaseApp from './config';

const storage = getStorage(firebaseApp);

const Storage = {
  async uploadCustomerProfile(customer, file) {
    const fileName = customer?.username;
    const fileExtension = file.name.split('.').at(-1);

    const storageRef = ref(storage, `${CONFIG.FIREBASE.STORAGE.CUSTOMER}/${fileName}.${fileExtension}`);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  },
};

export default Storage;
