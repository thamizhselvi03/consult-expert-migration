const LawyerCard = ({ profile }) => {
  return (
    <div className="max-w-[333px] h-[260px] shadow-[3px_4px_25px_rgba(167,167,167,0.25)] bg-white rounded-lg p-4 m-auto max-md:ml-4 mb-6">
      <div className="flex bg-[#f7f7f7] rounded-lg p-[10px] gap-3">
        <img
          src={`https://assets.vakilsearch.com/live-images/ttl/${profile.imageUrl}`}
          alt="lawyer-profile-picture"
          className="rounded w-[87px] h-[80px]"
        />
        <div>
          <h3 className="font-bold text-[22px] text-[#231f20]">{profile.name}</h3>
          <p className="text-[14px] mt-2 text-[#606162]">{profile.cases}</p>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[18px] my-2">Recent Articles</h3>
        <div className="flex flex-col gap-3">
          {profile.recentArticles.map((article, index) => (
            <div className="underline text-[#007aff]" key={index}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >{`${article.text.slice(0, 32)}...`}</a>
              {/* <i className="fas fa-arrow-right"></i> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
