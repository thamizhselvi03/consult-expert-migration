const ReviewProfileCard = ({ profile }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[350px] min-h-[240px] px-4 py-[14px] m-auto rounded shadow-[2px_9px_20px_rgba(183,183,183,0.25)] bg-white max-md:min-h-[200px] mb-[20px]">
      <div className="flex gap-3 text-center">
        {profile?.imageUrl && (
          <img
            src={`https://assets.vakilsearch.com/live-images/ttl/${profile.imageUrl}`}
            alt="customer profile"
            width={64}
            height={64}
          />
        )}
        <div>
          <h3 className="mt-2 font-[700] text-[20px] text-left">{profile.name}</h3>
          <div className="flex gap-1">
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
          </div>
        </div>
      </div>
      <p className="text-[#606162] md:text-[16px]">{`“${profile.description}”`}</p>
    </div>
  );
};

export default ReviewProfileCard;
