import { firebaseApp } from '../../firebase/FirebaseConfig';
import actionTypes from './actionTypes';


const fetchInsertUser = (user) => {
    return (dispatch) => {
        firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            const newUser = data.user
            newUser.updateProfile({
                displayName: user.first + user.last
            })
            dispatch({
                type: actionTypes.TYPE_FETCH_INSERT_USER,
                user: newUser,
              });

        })
        .catch((error) => console.log(error));

    }
}
export default {
    fetchInsertUser,
}