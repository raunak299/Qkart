import React, { useState } from 'react';
import useAuthFormValidity from '../../custom-hooks/auth-hooks';
// import ButtonSecondary from '../ui/ButtonSecondary';
import styles from './Authentication.module.css';
import useHTTP from '../../custom-hooks/http-hook';
import Loading from '../../components/ui/Loading'
import loadingImg from '../../images/loading2.svg';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';




function Authentication() {

    const [register, setRegister] = useState(false);

    const [errorMsg, setError] = useState('');

    const { isLoading, sendRequest } = useHTTP();

    const setErrorHandler = () => {
        setError('');
    }

    const loginregisterHandler = () => {
        setRegister(!register);
        setErrorHandler();
        setEmailInput('');
        setNameInput('');
        setPasswordInput('');
        setNameInputTouched(false);
        setEmailInputTouched(false);
        setPasswordInputTouched(false);
    }

    const {
        inputFieldData: nameInputData,
        isInputFieldTouched: nameInputTouched,
        setInputField: setNameInput,
        setInputFieldTouch: setNameInputTouched,
        inputFieldChangeHandler: nameInputChangeHandler,
        isInputFieldValid: nameInputValid
    } = useAuthFormValidity((input) => input.length > 0);

    const nameChangeHandler = (e) => {
        nameInputChangeHandler(e.target.value.trim());
    }
    const nameBlurHandler = () => {
        !nameInputValid && setError('Name field cannot be empty !!');
    }





    const {
        inputFieldData: emailInputData,
        isInputFieldTouched: emailInputTouched,
        setInputField: setEmailInput,
        setInputFieldTouch: setEmailInputTouched,
        inputFieldChangeHandler: emailInputChangeHandler,
        isInputFieldValid: emailInputValid,
    } = useAuthFormValidity((input) => (input.length > 0 && input.includes('@') && input.includes('.com')));

    const emailChangeHandler = (e) => {
        if (!nameInputValid && nameInputTouched) {
            setError('Name field cannot be empty !!');
            return;
        }
        emailInputChangeHandler(e.target.value.trim());
    }
    const emailBlurHandler = () => {
        !emailInputValid && setError('Email should be of format abc@xyz.com !!');
    }




    const {
        inputFieldData: passwordInputData,
        isInputFieldTouched: passwordInputTouched,
        setInputField: setPasswordInput,
        setInputFieldTouch: setPasswordInputTouched,
        inputFieldChangeHandler: passwordInputChangeHandler,
        isInputFieldValid: passwordInputValid
    } = useAuthFormValidity((input) => input.length > 8);

    const passwordChangeHandler = (e) => {
        if (!emailInputValid && emailInputTouched) {
            setError("Email should be of format abc@xyz.com !!")
            return;
        }
        passwordInputChangeHandler(e.target.value.trim());
    }
    const passwordBlurHandler = () => {
        !passwordInputValid && setError("Minimum password length should be 8!!")
    }







    // const getJson = async (url) => {
    //     let response = await fetch(url,
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 email: emailInputData,
    //                 password: passwordInputData,
    //                 name: nameInputData
    //             }),
    //             headers: {
    //                 'content-type': 'application/json'
    //             }
    //         }
    //     )
    //     if (!response.ok) {
    //         console.log(response);
    //         let { errors } = JSON.parse(response['_bodyInit']);
    //         console.log(errors[0]);
    //         throw new Error(errors[0]);
    //     }
    //     return await response.json();
    // }


    let isFormValid = false;
    if (register && nameInputValid && emailInputValid && passwordInputValid) {
        isFormValid = true;
    }
    else if (!register && emailInputValid && passwordInputValid) {
        isFormValid = true;
    }



    let url = (register) ? '/api/auth/signup' : '/api/auth/login';


    const authContx = useContext(AuthContext);
    const location = useLocation();


    const applyData = (data) => {
        authContx.setLogin(data.encodedToken);
        authContx.navigateOnLogin(location.state?.from?.pathname ?? '');
    }


    const onFormSubmitHandler = async (events) => {
        events.preventDefault();
        console.log('not guest');
        if (!isFormValid) {
            if (register && !nameInputValid) {
                setError('   Name field is invalid !!');
            }
            else if (!emailInputValid) {
                setError('Email field is invalid !!');
            }
            else if (!passwordInputValid) {
                setError('Password is invalid !!')
            }
            console.log('#');
            return;
        };

        setNameInputTouched(true);
        setEmailInputTouched(true);
        setPasswordInputTouched(true);
        // try {
        //     let response = await getJson(url);
        //     console.log(response);
        // }

        // catch (err) {
        //     setError(err.message);
        // }


        sendRequest({
            url,
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: emailInputData,
                password: passwordInputData,
                name: nameInputData
            })
        }, applyData
        )

        setEmailInput('');
        setNameInput('');
        setPasswordInput('');
        setNameInputTouched(false);
        setEmailInputTouched(false);
        setPasswordInputTouched(false);
    }


    const guestUserHandler = async (events) => {
        events.preventDefault();
        console.log("guest");
        sendRequest({
            url: '/api/auth/login',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: "johndoe@gmail.com",
                password: "johnDoe123",
            })
        }, applyData
        )





    }





    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <div className={styles['auth-page']}>

                {isLoading && <Loading> <img src={loadingImg} alt='Loading !!' /> </Loading>}

                {!isLoading && <div className={styles['auth-section']} onFocus={setErrorHandler}>

                    <div className={errorMsg.length ? styles['notification'] : ''} >
                        {errorMsg}
                    </div>

                    <div className={styles['app-logo']} >
                        <NavLink to='home'>
                            <svg id={styles['svg']} width="92" height="35" viewBox="0 0 92 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" width="27" height="9" rx="4.5" fill="#328fdb" />
                                < path d="M19.159 32.61C18.6223 33.2387 17.9937 33.714 17.273 34.036C16.5677 34.358 15.7933 34.519 14.95 34.519C13.846 34.519 12.834 34.266 11.914 33.76C10.994 33.2693 9.94367 32.4107 8.763 31.184C7.27567 31.0613 5.94167 30.632 4.761 29.896C3.58033 29.1447 2.66033 28.171 2.001 26.975C1.34167 25.7637 1.012 24.422 1.012 22.95C1.012 21.386 1.38767 19.9753 2.139 18.718C2.89033 17.4453 3.92533 16.4563 5.244 15.751C6.56267 15.0303 8.04233 14.67 9.683 14.67C11.3237 14.67 12.8033 15.0303 14.122 15.751C15.4407 16.4563 16.4757 17.4377 17.227 18.695C17.9783 19.9523 18.354 21.3707 18.354 22.95C18.354 24.2227 18.101 25.4033 17.595 26.492C17.089 27.5653 16.3837 28.4853 15.479 29.252C14.5743 30.0033 13.524 30.5477 12.328 30.885C12.7727 31.3603 13.2097 31.7053 13.639 31.92C14.0683 32.1347 14.5283 32.242 15.019 32.242C16.077 32.242 16.997 31.8127 17.779 30.954L19.159 32.61ZM4.025 22.95C4.025 24.0233 4.27033 24.997 4.761 25.871C5.25167 26.7297 5.92633 27.4043 6.785 27.895C7.64367 28.3703 8.60967 28.608 9.683 28.608C10.7563 28.608 11.7223 28.3703 12.581 27.895C13.4397 27.4043 14.1143 26.7297 14.605 25.871C15.0957 24.997 15.341 24.0233 15.341 22.95C15.341 21.8767 15.0957 20.9107 14.605 20.052C14.1143 19.178 13.4397 18.5033 12.581 18.028C11.7223 17.5373 10.7563 17.292 9.683 17.292C8.60967 17.292 7.64367 17.5373 6.785 18.028C5.92633 18.5033 5.25167 19.178 4.761 20.052C4.27033 20.9107 4.025 21.8767 4.025 22.95ZM29.0663 24.261L26.5133 26.883V31H23.5233V14.9H26.5133V23.157L34.4713 14.9H37.8293L31.0673 22.099L38.2433 31H34.7473L29.0663 24.261ZM52.0249 27.274H43.9749L42.3879 31H39.3059L46.5509 14.9H49.4949L56.7629 31H53.6349L52.0249 27.274ZM51.0359 24.928L47.9999 17.89L44.9869 24.928H51.0359ZM71.3444 31L68.0554 26.285C67.9174 26.3003 67.7104 26.308 67.4344 26.308H63.8004V31H60.8104V14.9H67.4344C68.8298 14.9 70.0411 15.13 71.0684 15.59C72.1111 16.05 72.9084 16.7093 73.4604 17.568C74.0124 18.4267 74.2884 19.4463 74.2884 20.627C74.2884 21.8383 73.9894 22.881 73.3914 23.755C72.8088 24.629 71.9654 25.2807 70.8614 25.71L74.5644 31H71.3444ZM71.2754 20.627C71.2754 19.5997 70.9381 18.81 70.2634 18.258C69.5888 17.706 68.5998 17.43 67.2964 17.43H63.8004V23.847H67.2964C68.5998 23.847 69.5888 23.571 70.2634 23.019C70.9381 22.4517 71.2754 21.6543 71.2754 20.627ZM82.6751 17.43H77.3391V14.9H91.0011V17.43H85.6651V31H82.6751V17.43Z" fill="#292B2E" />
                            </svg>
                        </NavLink>
                    </div>

                    <div className={styles['auth-section-heading']}>{register ? 'Register' : 'Login'}</div>


                    <form action='' className={styles['auth-form']} onSubmit={onFormSubmitHandler}>
                        {register && <div className={styles['auth-name']}>
                            <label htmlFor='name'> Name </label>
                            <input type='text' name='name'
                                className={` ${styles['input-field']} ${!nameInputValid && nameInputTouched ? styles['invalidField'] : ''}`} onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameInputData} />
                        </div>}


                        <div className={styles['auth-email']}>
                            <label htmlFor='email'> Email </label>
                            <input type='email' name='email'
                                className={`${styles['input-field']} ${!emailInputValid && emailInputTouched ? styles['invalidField'] : ''}`}
                                onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailInputData} />
                        </div>

                        <div className={styles['auth-password']}>
                            <label htmlFor='password'> Password </label>
                            <input type='password' name='password' autoComplete='on'
                                className={`${styles['input-field']} ${!passwordInputValid && passwordInputTouched ? styles['invalidField'] : ''}`}
                                onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={passwordInputData} />
                        </div>

                        <div className={styles['auth-btns']}>
                            <div className={styles['btn-container']}>
                                <button className={styles['submit-btn']}>
                                    {register ? 'Register' : 'Login'} </button>
                            </div>

                            <div className={styles['btn-container']} onClick={guestUserHandler}>
                                <button className={styles['guest-user-btn']}>Guest User</button>
                            </div>
                        </div>

                    </form>


                    <div className={styles['toggle-login-register']}>
                        {register ? 'Already a member?' : 'Not a member yet?'}
                        < span onClick={loginregisterHandler}>{register ? 'Login' : 'Register'}</span>
                    </div>


                </div>}
            </div>
        </React.Fragment >
    );
}

export default Authentication;