import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <>
        <header className="pt-4 flex bg-blue-800  items-center pb-2 justify-around shadow-lg sticky top-0 z-50">
            <div>
            <h1 className="font-semibold text-white text-xl tracking-wide cursor-pointer ">Supersocials</h1>
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
                <div className="cursor-pointer">
                    <Avatar src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=asaBcCZ6MhkAX-ltZTU&tn=PE0_JBPglr_ujwNN&_nc_ht=scontent.flhr3-3.fna&oh=a3f2fde494ed325952e3065bc7bae2c4&oe=60D30D14"/>

                </div>
            

        </header>
            
        </>
    )
}

export default Header
