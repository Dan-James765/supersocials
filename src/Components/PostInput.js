import { BsPencilSquare } from 'react-icons/bs';
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import FeedItemIcons from './FeedItemIcons';
import Post from './Post';
import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import { db } from './firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'



function PostInput() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser)


  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
  
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      
    });
  
    setInput("");
  };
  
  
    return (
        <>
        <div className="">
        <div className="w-w-140  py-4 rounded-lg flex flex-col shadow-lg border ">
            <div className=" cursor-pointer border rounded-full flex items-center py-3  group-hover:bg-gray-100 transition delay-50  ">
                <BsPencilSquare className="text-gray-500 mx-1 cursor-pointer " />
                <div className="w-80">
            <form className="">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start a post!"  className="  border-none flex-grow ml-2 pr-48 outline-none font-medium text cursor-pointer   " />
                <button className="hidden" onClick={sendPost}  type="submit" >Send</button>
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
        <FlipMove>
        {posts.map(
            ({ id, data: { name, description, message, photoURL } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
              />
            )
          )}
          </FlipMove>

        

        
        </div>
        
            
        </>
    )
}

export default PostInput
