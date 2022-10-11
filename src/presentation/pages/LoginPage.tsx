import { useState } from "react";

import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { login } from '../../core/action_creators/auth/login_action_creators';

const LoginPage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();
    const loginState = useAppSelector((state) => state.login);

    const handleUserNameInputChanged = (e: any) => {
        setUserName(e.target.value);
    }

    const handlePasswordInputChanged = (e: any) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmission = () => {
        const loginRequest = { userName, password };
        dispatch(login(loginRequest));
    }

    const renderLoginContentBasedOnState = () => {
        console.log(loginState);

        if (loginState.isLoading) {
            return <h1>Loading........</h1>
        }
        else if (loginState.token.length > 0) {
            return <h1>Successfull........ {loginState.token}</h1>
        }
        else if (loginState.error.length > 0) {
            return <h1 color="red">{loginState.error}</h1>
        }
        else {
            return <button
                type="button"
                onClick={handleLoginSubmission}>
                Log In
            </button>
        }

    }


    return (
        <div>
            <input
                type='text'
                placeholder='Enter Your Username'
                onChange={handleUserNameInputChanged}
            />
            <input
                type='password'
                placeholder='Enter Your Password'
                onChange={handlePasswordInputChanged}
            />
            {
                renderLoginContentBasedOnState()
            }
        </div>
    )
}

export default LoginPage;