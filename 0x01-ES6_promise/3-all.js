import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup () {
  const upload_photo_promise = uploadPhoto();
  const create_user_promise = createUser();

  let str = '';
  upload_photo_promise.then(data => str += data.body);
  create_user_promise.then((data) => {
    str = str + ' ' + data.firstName + ' ' + data.lastName;
    console.log(str);
  });
}
