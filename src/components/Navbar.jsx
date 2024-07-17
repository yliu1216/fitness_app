import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";


export default function Navbar(){
    const {user} = useContext(UserContext);
    return (
        <div className="flex justify-between gap-1">
            <nav className="text-red flex inset-x-0 top-0 z-50 px-2 ">
            <Link to={'/'}>
            <img src={require('../assets/images/Logo.png')} alt="Logo" />
            </Link>
            <h1 className="font-bold mt-4 text-xl">LiU GYM</h1>
            </nav>
            <div className="px-2 py-4 flex items-center justify-between hidden lg:flex lg:gap-x-12 rounded-full">
                <Link to={"/" } className="text-l leading-6 font-bold " >Home</Link>
                <Link to={"/company"} className="text-l  leading-6 font-bold">Company</Link>
                <Link to={"/account"}  className="text-l leading-6 font-bold">Profile</Link>
            </div>

            <nav className="px-2 py-4">
            <Link to={user?'/':'/login'} className="text-red flex items-center gap-2 border border-gray-100 rounded-xl">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div className="bg-gray-100 rounded-xl border border-gray-100 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                     <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                 </svg>
            </div>
            {
                 !!user && (
                    <div className="font-bold">
                        Hello {user.firstname}
                    </div>
                 )
             }
            </Link>
            </nav>
        </div>
    )
}