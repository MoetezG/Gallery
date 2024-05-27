import React from "react";

const imageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div>
      <div className="card">
        <img src={image.webformatURL} alt="" />
        <h2>{image.user}</h2>
        <p>
          <span className="view">Views :</span> {image.views}
        </p>
        <p>
          <span className="downloads">Downloads :</span> {image.downloads}
        </p>
        <p>
          <span className="like">Likes :</span> {image.likes}
        </p>

        <div className="tag-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default imageCard;
