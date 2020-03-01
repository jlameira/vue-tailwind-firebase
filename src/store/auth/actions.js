import { firebaseAuth, dbUserRef } from '../../firebase';

export const login = async ({ commit }, authData) => {
  commit('SHOW_LOADING', true);
  const userLogged = await firebaseAuth.signInWithEmailAndPassword(
    authData.email,
    authData.password,
  );
  const { token } = await userLogged.user.getIdTokenResult();
  commit('AUTH_USER', {
    token: token,
    userId: userLogged ? userLogged.user.uid : null,
  });

  getUserDate(commit, userLogged.user.uid);
  commit('SHOW_LOADING', false);
};
export const signUp = async ({ commit }, authData) => {
  let userCreated = null;
  commit('SHOW_LOADING', true);

  const auth = await firebaseAuth.createUserWithEmailAndPassword(authData.email, authData.password);
  const { token } = await auth.user.getIdTokenResult();
  if (auth.user.uid) {
    authData.uid = auth.user.uid;
    userCreated = await dbUserRef.add({
      uid: authData.uid,
      firstName: authData.firstName,
      lastName: authData.lastName,
      password: authData.password,
      email: authData.email,
    });

    getUserDate(commit, auth.user.uid);
    commit('SHOW_LOADING', false);
  }
  commit('AUTH_USER', {
    token: token,
    userId: userCreated ? userCreated.id : auth.user.uid,
  });
};

export const logout = async ({ commit }) => {
  await firebaseAuth.signOut();

  commit('STORE_USER', null);
};

async function getUserDate(commit, uid) {
  const datauser = await dbUserRef.where('uid', '==', uid).get();
  datauser.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
    commit('STORE_USER', doc.data());
  });
}
