import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup (firstName, lastName, fileName) {
  const sign_up_promise = signUpUser(firstName, lastName);
  const upload_promise = uploadPhoto(fileName);
}
