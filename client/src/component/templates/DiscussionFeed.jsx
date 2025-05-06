import React, { useState } from "react";
import DiscussionFeedCard from "./DiscussionFeedCard";
import discussionFeedProfilePic from "/discussionFeedProfilePic.png";
import CreatePostModal from "./CreatePostModal";
import FeedPost from "./FeedPost";

const DiscussionFeed = () => {
  const [postContent, setPostContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);

  const handleImageSelect = (e) => {
    if (e === null) {
      setSelectedImage(null);
      setSelectedImagePreview(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setSelectedImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePostFunction = () => {
    // Here you would typically handle the post submission
    console.log("Post Content:", postContent);
    console.log("Selected Image:", selectedImage);
    setPostContent(""); // Clear input
    setSelectedImage(null);
    setSelectedImagePreview(null);
    setIsModalOpen(false);
  };

  const openCreatePost = () => {
    setIsModalOpen(true);
  };

  const discussionFeed = [
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
  ];

  return (
    <div className="flex w-fu flex-col gap-4 mt-8">
      <div className="w-full bg-gray-200 rounded-lg py-3 px-4">
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
              <button
                onClick={handlePostFunction}
                className="px-6 py-2 bg-[#235391] text-white rounded-lg hover:bg-[#1b4170] transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <input
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          onClick={openCreatePost}
          placeholder="Write Something"
          className="w-full mt-3 p-3 rounded-lg border border-gray-900 focus:outline-none focus:border-[#235391] resize-none placeholder:text-gray-900"
        />
        <div className="flex items-center gap-6 mt-3">
          <button
            onClick={openCreatePost}
            className="flex items-center gap-2 text-zinc-900 bg-slate-300 px-2 py-1 rounded-md hover:text-[#235391] transition-colors"
          >
            <i className="ri-bar-chart-2-line text-xl"></i>
            Poll
          </button>
          <button
            onClick={openCreatePost}
            className="flex items-center gap-2 text-zinc-900 hover:text-[#235391] transition-colors bg-slate-300 px-2 py-1 rounded-md"
          >
            <i className="ri-price-tag-3-line text-xl"></i>
            Tag
          </button>
          <button
            onClick={openCreatePost}
            className="flex items-center gap-2 text-zinc-900 hover:text-[#235391] transition-colors bg-slate-300 px-2 py-1 rounded-md"
          >
            <i className="ri-map-pin-line text-xl"></i>
            Location
          </button>
          <button
            onClick={openCreatePost}
            className="flex items-center gap-2 text-zinc-900 hover:text-[#235391] transition-colors bg-slate-300 px-2 py-1 rounded-md"
          >
            <i className="ri-image-line text-xl"></i>
            Images
          </button>
        </div>
      </div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={postContent}
        setContent={setPostContent}
        selectedImage={selectedImage}
        selectedImagePreview={selectedImagePreview}
        onImageSelect={handleImageSelect}
        onPost={handlePostFunction}
      />

      <div className="w-full flex gap-4 ">
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          {" "}
          <i className="ri-equalizer-line text-lg mr-2"></i>Filter
        </button>
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          {" "}
          Recent
        </button>
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          Most Relevent
        </button>
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          Newest
        </button>
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          Neet PG
        </button>
        <button className="bg-slate-200 py-1 text-lg px-3 rounded-md">
          FMCG
        </button>
      </div>

      <h1 className="text-3xl font-semibold my-3">Pinned Post</h1>

      <FeedPost />

      <h1 className="text-3xl font-semibold my-3">New Post</h1>
      <FeedPost />
      <FeedPost />
      <FeedPost />

      {discussionFeed.map((card, index) => (
        <DiscussionFeedCard cardContent={card} key={index} />
      ))}
    </div>
  );
};

export default DiscussionFeed;
