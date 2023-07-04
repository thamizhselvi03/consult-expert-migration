const ReviewProfileCard = ({ profile }) => {
  return (
    <div className="review-profile-card">
      <div className="customer-profile">
        {profile?.imageUrl && (
          <img
            src={`https://assets.vakilsearch.com/live-images/ttl/${profile.imageUrl}`}
            alt="customer profile"
            width={64}
            height={64}
          />
        )}
        <div>
          <h3>{profile.name}</h3>
          <div class="d-flex review-stars">
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
          </div>
        </div>
      </div>
      <p>{`“${profile.description}”`}</p>
    </div>
  );
};

export default ReviewProfileCard;
