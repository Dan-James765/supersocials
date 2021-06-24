
import FeedItemIcons from "./FeedItemIcons";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { MdSend } from "react-icons/md";
import { Avatar } from "@material-ui/core";
import React, {forwardRef} from "react"


const Post = forwardRef (({ name, description, message, photoURL }, ref) => {

  
  return (
    <>
      <div  ref={ref} className="bg-white w-w-140 py-4 rounded-lg pl-4 my-4 border shadow-lg ">
        <div className="flex mb-2 ">
        <Avatar >{name[0]}</Avatar>
          <div className="ml-2">
            <h2 className="text-2xl font-medium ">{name}</h2>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>

        <div className="truncate">
          <p>{message}</p>
        </div>

        <div className="flex flex-row ">
          <FeedItemIcons title="Like" Icon={AiOutlineLike} color="#979CA6" />
          <FeedItemIcons
            title="Comment"
            Icon={FaRegCommentDots}
            color="#979CA6"
          />
          <FeedItemIcons title="Share" Icon={GiShare} color="#979CA6" />
          <FeedItemIcons title="Send" Icon={MdSend} color="#979CA6" />
        </div>
      </div>
    </>
  );
});

export default Post;

