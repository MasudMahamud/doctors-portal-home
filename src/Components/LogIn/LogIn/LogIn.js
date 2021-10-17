import React, { useContext } from 'react';
import './LogIn.css';
import logIn from '../../../images/logIn.png'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const app = initializeApp(firebaseConfig);
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });

    }
    return (
        <div className="log-in">
            <div className="container">
                <div className="row align-item center" style={{ height: '100vh' }}>
                    <div className="col-md-6 p-5 ">
                        <div className="form-group">
                            <label htmlFor="" className="text-white"> User Name</label>
                            <input type="text" className="form-control" />
                        </div> <br />
                        <div className="form-group">
                            <label htmlFor="" className="text-white"> Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger"> forget password</label>
                        </div> <br />
                        <div className="form-group">
                            <button className="btn btn-brand" onClick={handleGoogleLogin}> Log in </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={logIn} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;