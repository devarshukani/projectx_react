const DiscussionFeedCard = ({ cardContent }) => {
  return (
    <div className="flex gap-x-6 justify-start items-start">
      <div className="min-w-[60px] min-h-[60px] rounded-full">
        <img src={cardContent.image} alt="profile" />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-semibold">{cardContent.name}</p>
          <p className="text-xs font-normal text-[#2A2B2D80]">
            {cardContent.time}
          </p>
        </div>
        <div>
          <p>{cardContent.description}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex gap-x-1 items-center cursor-pointer">
            <img src="/like.png" alt="like" className="w-[18px] h-[18px]" />
            <p className="text-sm font-semibold">{cardContent.likes}</p>
          </div>
          <div className="flex gap-x-1 items-center cursor-pointer">
            <img src="/dis" alt="dislike" className="w-[18px] h-[18px]" />
            <p className="text-sm font-semibold">{cardContent.dislikes}</p>
          </div>
          <div className="flex gap-x-1 items-center cursor-pointer">
            <img
              src="/comment.png"
              alt="comment"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-semibold">{cardContent.comments}</p>
          </div>
          <div className="flex gap-x-1 items-center cursor-pointer">
            <img src="/share.png" alt="share" className="w-[18px] h-[18px]" />
            <p className="text-sm font-semibold">{cardContent.shareCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionFeedCard;
