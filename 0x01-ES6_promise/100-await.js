import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  return new Promise(async (resolve) => {
    let user_result = {};

    const uploadPhotoResult = uploadPhoto();
    const createUserResult = createUser();

    try {
      user_result["photo"] = await uploadPhotoResult;
    } catch (error) {
      user_result["photo"] = null;
    }

    try {
      user_result["user"] = await createUserResult;
    } catch (error) {
      user_result["user"] = null;
    }

    resolve(user_result);
  });
}
