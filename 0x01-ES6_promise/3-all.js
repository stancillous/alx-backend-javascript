import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPromisePhoto = uploadPhoto();
  const createUserPromise = createUser();

  let str = '';
  uploadPromisePhoto.then((data) => str += data.body);
  createUserPromise.then((data) => {
    str = `${str} ${data.firstName} ${data.lastName}`;
    console.log(str);
  });
}
