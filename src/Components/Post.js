
import FeedItemIcons from "./FeedItemIcons";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { MdSend } from "react-icons/md";
import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";

const Post = forwardRef(({ name, description, message }, ref) => {
  return (
    <>
      <div ref={ref} className="bg-white w-w-140 py-4 rounded-lg pl-4 my-4 border shadow-lg ">
        <div className="flex mb-2 ">
        <Avatar src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=asaBcCZ6MhkAX-ltZTU&tn=PE0_JBPglr_ujwNN&_nc_ht=scontent.flhr3-3.fna&oh=a3f2fde494ed325952e3065bc7bae2c4&oe=60D30D14"/>
          <div className="ml-2">
            <h2 className="text-2xl font-medium">{name}</h2>
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

