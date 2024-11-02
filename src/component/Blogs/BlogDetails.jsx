import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/useContextProjects";
import Loading from "../../shared/Loading/Loading";

const BlogDetails = () => {
  const { id } = useParams(); 
  const { blogs } = useContext(AuthContext); 

  
  const initialBlog = blogs.find((blog) => blog._id === id) || blogs[0];
  const [selectedBlog, setSelectedBlog] = useState(initialBlog);
  const [loading, setLoading] = useState(false);


  const handleBlogSelection = (blog) => {
    setLoading(true); 
    setTimeout(() => {
      setSelectedBlog(blog);
      setLoading(false); 
    }, 2000);
  };

  return (
    <section className="bg-[#0b041e] pt-20 lg:pt-20 lg:p-8">
      <div className="flex lg:flex-row flex-col justify-start items-center lg:gap-y-0 gap-y-10">
        
        
      <div className="lg:w-1/3 md:w-1/3 w-full">
  <div className="flex flex-col items-center">
    {blogs?.map((blog) => (
      <button
        key={blog._id}
        onClick={() => handleBlogSelection(blog)}
        className="w-full max-w-xs lg:max-w-sm h-14 lg:h-14 p-4  mb-2 rounded-full transition-all duration-1000 ease-in transform hover:scale-105 gradient-border"
      >
        {blog?.title}
      </button>
    ))}
  </div>
</div>

    
        <div className="lg:w-2/3 md:w-2/3 w-full  p-4">
          <div className="p-4 h-96 overflow-y-auto">
            {loading ? (
               <Loading />
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{selectedBlog?.title}</h2>
                <p className="text-gray-300">{selectedBlog?.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
