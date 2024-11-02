import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  const { imageUrl, description, title, _id } = blog;

  return (
    <Link to={`/blogDetails/${_id}`} className="block">
      <div className="bg-[#0A0C19] gradient-border p-6 rounded-lg shadow-lg relative">
        <img
          src={imageUrl}
          alt={title}
          className="lg:w-[70px] md:w-[70px] w-[70px] absolute left-6 rounded-xl -top-6"
        />
        <div className="space-y-2">
          <h2 className="text-white [leading-trim:both] [text-edge:cap] lg:text-2xl md:text-1xl text-base not-italic font-medium leading-[150%] font-outfit mt-8 mb-4 lg:pt-4 pt-4 lg:ml-0">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h2>
          <p className="text-[rgba(255,255,255,0.75)] text-base not-italic font-normal leading-[normal] font-outfit lg:ml-0">
            {description.length > 100 ? (
              <>
                {description.slice(0, 90)}
                <span className="text-purple-900">... more</span>
              </>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
