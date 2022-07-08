import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Configuration
import CONFIG from "../../global/CONFIG";
import firebaseApp from "./config";

const storage = getStorage(firebaseApp);

const Storage = {
  async uploadRedeemImage(redeem, file) {
    const fileName = redeem?.id;
    const fileExtension = file.name.split(".").at(-1);
    const path = `${CONFIG.FIREBASE.STORAGE.REDEEM}/${fileName}.${fileExtension}`;

    const storageRef = ref(storage, path);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { url, path };
  },
};

export default Storage;
