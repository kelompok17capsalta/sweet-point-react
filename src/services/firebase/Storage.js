import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { nanoid } from 'nanoid';

// Configuration
import CONFIG from '../../global/CONFIG';
import firebaseApp from './config';

const storage = getStorage(firebaseApp);

const Storage = {
  async uploadProductImage(file) {
    const fileName = nanoid();
    const [, fileExtension] = file.split(';')[0].split('/');
    const path = `${CONFIG.FIREBASE.STORAGE.PRODUCT}/${fileName}.${fileExtension}`;
    const storageRef = ref(storage, path);

    await uploadString(storageRef, file, 'data_url');
    const url = await getDownloadURL(storageRef);
    return url;
  },

  async deleteProductImage(url) {
    const fileName = url.split('/').at(-1).split('%2F').at(-1)
      .split('?')
      .at(0);
    const path = `${CONFIG.FIREBASE.STORAGE.PRODUCT}/${fileName}`;
    const storageRef = ref(storage, path);

    await deleteObject(storageRef);
  },
};

export default Storage;
