import React from "react";
import discussionFeedProfilePic from "/discussionFeedProfilePic.png";

const CreatePostModal = ({
  isOpen,
  onClose,
  content,
  setContent,
  selectedImage,
  selectedImagePreview,
  onImageSelect,
  onPost,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-xl p-6 w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Create Post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <img
            src={discussionFeedProfilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Joseph</h3>
            <p className="text-sm text-gray-600">Post to anyone</p>
          </div>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          className="w-full min-h-[120px] p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#235391]"
        />

        {selectedImagePreview && (
          <div className="mb-4 relative">
            <img
              src={selectedImagePreview}
              alt="Selected"
              className="max-w-full h-auto rounded-lg"
            />
            <button
              onClick={() => onImageSelect(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        )}

        <div className="flex items-center gap-4 mb-4 justify-between">
          <div className="flex items-center gap-4 ">
            <button className="flex items-center gap-2 text-zinc-900 bg-slate-300 px-3 py-2 rounded-md hover:text-[#235391] transition-colors">
              <i className="ri-bar-chart-2-line text-xl"></i>
              Poll
            </button>
            <button className="flex items-center gap-2 text-zinc-900 bg-slate-300 px-3 py-2 rounded-md hover:text-[#235391] transition-colors">
              <i className="ri-price-tag-3-line text-xl"></i>
              Tag
            </button>
            <button className="flex items-center gap-2 text-zinc-900 bg-slate-300 px-3 py-2 rounded-md hover:text-[#235391] transition-colors">
              <i className="ri-map-pin-line text-xl"></i>
              Location
            </button>
            <label className="flex items-center gap-2 text-zinc-900 bg-slate-300 px-3 py-2 rounded-md hover:text-[#235391] transition-colors cursor-pointer">
              <i className="ri-image-line text-xl"></i>
              Images
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onImageSelect(e)}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onPost}
              className="px-6 py-3 bg-[#235391] text-white rounded-lg hover:bg-[#1b4170] transition-colors"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
