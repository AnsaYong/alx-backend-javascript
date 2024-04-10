import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([userPromise, photoPromise])
    .then(([userResponse, photoResponse]) => [
      { status: 'fulfilled', value: userResponse },
      { status: 'fulfilled', value: photoResponse },
    ])
    .catch(() => [{ status: 'rejected', value: new Error('Signup system offline') }]);
}
