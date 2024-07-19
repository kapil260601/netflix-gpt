import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='login page bg-image' />
            </div>
            <form className='absolute px-20 py-12 bg-black my-20 w-4/12 mx-auto right-0 left-0 text-white rounded-md bg-opacity-70 '>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && 
                <input type='text' placeholder='Full Name :' className='p-3 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' /> }
                <input type='text' placeholder='Email Address' className='p-3 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />
                <input type='password' placeholder='Password' className='p-3 my-3 w-full rounded-md bg-[#161616] bg-opacity-65 border border-gray-400' />
                <button className='p-2 my-3 bg-red-600 w-full rounded-md' type='submit'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-md py-2 text-center text-gray-400">OR</p>
                <button className='font-semibold p-2 my-3 bg-[#333333] w-full rounded-md bg-opacity-60' type='submit'>Use a sign-in code</button>
                {/* <a href='#' className='p-10 my-5 ms-24'>Forget password?</a>
                <p className='leading-6'><input type='checkbox' className='h-5 w-5 border-none' />Remember me</p> */}
                <p className='py-3 my-5 font-semibold cursor-pointer text-gray-400' onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;