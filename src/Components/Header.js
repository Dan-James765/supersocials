import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';




function Header({onClick}) {
    const user = useSelector(selectUser)
    
    return (
        <>
        <header className="pt-4 flex bg-blue-800  items-center pb-2 justify-around shadow-lg sticky top-0 z-50">
            <div>
            <h1 className="font-semibold text-white text-xl tracking-wide cursor-pointer ">SuperSocials</h1>
            </div>
            <div className="flex items-center cursor-pointer">
                <form action="" className="">
                    <FaSearch className="absolute text-gray-500 mt-2 text-md ml-1 "/> 
                    <input type="text" placeholder="Search for friend's posts here!" className=" rounded-full py-1 focus:outline-none pl-6 w-w-150 hover:bg-gray-700 transition delay-90 text-black font-semibold" />


                </form>

            </div>
            <div className="flex text-white gap-x-2 cursor-pointer text-md font-semibold ">
                <h1 className="hover:text-gray-200">Homepage</h1>
                <h1 className="hover:text-gray-200">Timeline</h1>
                
                </div>
                <div className="flex text-white gap-x-2 cursor-pointer">
                <FaUserAlt className="hover:text-gray-200"/> 
                <BsFillChatDotsFill className="hover:text-gray-200"/> 
                <AiFillBell className="hover:text-gray-200"/> 
                </div>
                <div className="cursor-pointer" onClick={onClick}>
                <Avatar >
                {user?.displayName[0]}
                </Avatar>

                    
                </div>
            

        </header>
            
        </>
    )
}

export default Header
