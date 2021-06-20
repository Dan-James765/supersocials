import React from 'react'
import { BsPencilSquare } from 'react-icons/bs';
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import FeedItemIcons from './FeedItemIcons';

function PostInput() {
    return (
        <>
        <div className="flex-grow-0.6">
        <div className="w-w-140  py-4 rounded-lg flex flex-col shadow-lg border ">
            <div className=" cursor-pointer border rounded-full flex items-center py-3  group-hover:bg-gray-100 transition delay-50  ">
                <BsPencilSquare className="text-gray-500 mx-1 cursor-pointer " />
                <div className="">
            <form className="">
                <input type="text" placeholder="Start a post!"className="   border-none flex-grow ml-2 pr-48 outline-none font-medium text cursor-pointer  group-hover:bg-gray-100 transition delay-50 " />
                <button className="hidden" type="submit">Send</button>
            </form>
            </div>
            </div>
            <div className="flex-row flex  justify-around">
            <FeedItemIcons title="Photo" Icon={MdPhoto} color="#70B5F9" />
            <FeedItemIcons title="Video" Icon={RiVideoFill} color="#7FC15E" />
            <FeedItemIcons
              title="Event"
              Icon={FaRegCalendarCheck}
              color="#E7A33E"
            />
            <FeedItemIcons
              title="Write Article"
              Icon={RiArticleLine}
              color="#F5987E"
            />
          </div>
        </div>
        
        </div>
            
        </>
    )
}

export default PostInput
