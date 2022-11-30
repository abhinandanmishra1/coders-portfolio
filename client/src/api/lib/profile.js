function loadProfile(username) {
  return fetch(
    'GET',
    '/analytics/',
  );
}

export default {
  loadProfile,
};
