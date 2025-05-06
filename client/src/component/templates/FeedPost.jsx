import React from "react";
import discussionFeedProfilePic from "/discussionFeedProfilePic.png";
import postImage from "/postImage.svg";
import like from "/like.svg";
import dislike from "/dislike.svg";
import upload from "/upload.svg";
import comments from "/comments.svg"

const FeedPost = () => {
  return (
    <div className="w-full relative bg-gray-200 rounded-3xl overflow-hidden p-5">
      <div className="flex items-start gap-4">
        <img
          src={discussionFeedProfilePic}
          alt="Profile"
          className="ml-2 w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <div>
              <h3 className="text-lg font-semibold">Joseph</h3>
              <p className="text-sm text-gray-600">Post to anyone</p>
            </div>
            <p>2 hr ago</p>
          </div>
        </div>
      </div>
      <div className="h-76 bg-gray-300 rounded-xl mt-5 overflow-hidden">
        <img src={postImage} className="w-full h-full object-cover" alt="" />
      </div>

      <p className="text-lg font-normal mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint
        aperiam modi corporis nulla veritatis, labore, cumque beatae suscipit
        harum dolores ullam vitae culpa sunt adipisci dicta eos? Unde, rerum?
      </p>
      <div className="flex mt-2 gap-5">
        <div className="flex items-center gap-2 bg-slate-300 px-2 rounded-md">
          <img src={like} alt="" />
          <p>38</p>
        </div>
        <div className="flex items-center gap-1 bg-slate-300 px-2 rounded-md">
          <img src={dislike} alt="" />
          <p>38</p>
        </div>
        <div className="flex items-center gap-1 bg-slate-300 px-2 rounded-md">
          <img src={comments} alt="" />
          <p>38</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-300 px-2 rounded-md">
          <img src={upload} alt="" />
          <p>38</p>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
