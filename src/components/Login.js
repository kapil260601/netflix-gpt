import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

  const navigate = useNavigate();


    const handleButtonCLick = () => {
        // validate the form data
        // console.log(email.current.value);
        // console.log(password.current.value);
        // const message = checkValidData(fullName.current.value, email.current.value, password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        // console.log(message);

        // There are two steps to Sign-In /Sign-Up
        // 1.) 
        // if (!message) {
        //     // Sign In Sign Up Logic
        // }

        // 2.)
        if (message) return;
        // Sign In Sign Up logic

        if (!isSignInForm) {
            // Sign Up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    navigate("/");
                });


        } else {
            // Sign In form

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    navigate("/");
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute bg-black'>
                <img className='opacity-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='login page bg-image' />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='absolute px-16 py-10 bg-black my-20 w-1/3 mx-auto right-0 left-0 text-white rounded-md bg-opacity-65 shadow-lg'>
            {/* <div
      class="animate-rotate absolute inset-0 h-full w-1/2 rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"
    ></div> */}
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={fullName} type='text' placeholder='Full Name :' className='p-5 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />}
                {/* {!isSignInForm && <input type='text' placeholder='Full Name :' className='p-5 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />} */}
                <input ref={email} type='text' placeholder='Email Address' className='p-5 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />
                <input ref={password} type='password' placeholder='Password' className='p-5 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />
                <p className='text-red-600 text-lg font-semibold py-2 px-1'>{errorMessage}</p>

                <button className='p-4 my-3 bg-red-600 w-full rounded-md' onClick={handleButtonCLick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-md py-2 text-center text-gray-400">OR</p>
                <button className='font-semibold p-4 my-3 bg-[#333333] w-full rounded-md bg-opacity-60' type='submit'>Use a sign-in code</button>
                {/* <a href='#' className='p-10 my-5 ms-24'>Forget password?</a>
                <p className='leading-6'><input type='checkbox' className='h-5 w-5 border-none' />Remember me</p> */}
                <p className='py-3 my-5 font-semibold cursor-pointer text-gray-400 text-center' onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;