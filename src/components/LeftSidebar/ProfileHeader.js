import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/386360845_2271198843066549_4215157651328552233_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mu8yXQOEddoAX9WbkoK&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfC3OHhP6nppIt8kIXewzppbO4BLUUCoju_q2Dab_obTiw&oe=6535CF77" />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;