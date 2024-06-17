import React from 'react'
import Spline from '@splinetool/react-spline';
import  Google_Logo  from "../photos/google-g-icon-removebg-preview.png";
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
        <div className='flex justify-center items-center h-screen' style={{background : "#373A41"}}>
            <Spline scene="https://prod.spline.design/BomL84LWZ1KCKy3b/scene.splinecode" />
            <div className='h-screen w-screen flex justify-center items-center absolute top-0 left-0'>
                <div className='shadow-2xl text-sm w-1/4 font-semibold  items-center rounded-md shadow-purple-950 p-10 flex flex-col h-fit' style={{color : "#01204E"}}>
                    <div className='text-4xl font-bold font-serif'>Sign Up</div>
                    <div className='mt-5 w-full'><input type="text" name="" id="" placeholder='Enter Username' className='bg-transparent w-full text-blue-950 placeholder:text-blue-950 border-b-blue-950 border-b-2 rounded-md p-2'/></div>
                    <div className='w-full mt-3'><input type="email" name="" id="" placeholder='Enter Email' className='bg-transparent w-full text-blue-950 placeholder:text-blue-950 border-b-blue-950 border-b-2 rounded-md p-2'/></div>
                    <div className='w-full mt-3'><input type="password" name="" id="" placeholder='Enter Password' className='bg-transparent w-full text-blue-950 placeholder:text-blue-950 border-b-blue-950 border-b-2 rounded-md p-2'/></div>
                    <div className='flex gap-3 font-serif w-full mt-6 bg-blue-800 text-white font-bold text-lg px-4 py-1 rounded-lg justify-center'><button>Continue via</button><img src={Google_Logo} alt="" className='h-8 w-8'/></div>
                    <div className='bg-purple-800 font-serif mt-1 text-lg py-1 text-center rounded-lg w-full text-white font-bold '><button>Sign Up</button></div>
                    <div className='text-xs mt-5'>have an account? <Link to="/login" className='underline'>LogIn</Link></div>
                </div>
            </div>
        </div>
    </>
  )
}



