import React, { useEffect, useRef } from "react";

const Blog = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".blog-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const blogs = [
    {
      category: "Entrepreneurship",
      title: "How to Validate Your Startup Idea in 30 Days",
      description: "A practical framework for first-time founders",
      date: "15 Jan 2025",
      categoryColor: "text-[#32808D] bg-[#E8F4F6]",
    },
    {
      category: "Funding",
      title: "Understanding Government Startup Schemes",
      description: "Complete guide to SISFS, NIDHI, and other programs",
      date: "10 Jan 2025",
      categoryColor: "text-[#32808D] bg-[#E8F4F6]",
    },
    {
      category: "Incubation",
      title: "Building an Incubation Center: Best Practices",
      description: "Lessons from 50+ successful implementations",
      date: "5 Jan 2025",
      categoryColor: "text-[#32808D] bg-[#E8F4F6]",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Insights, stories, and tips from the startup ecosystem
          </p>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div
                className={`inline-block px-3 py-1 rounded text-sm font-semibold mb-4 ${blog.categoryColor}`}
              >
                {blog.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {blog.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{blog.date}</span>
                <button className="text-[#32808D] font-semibold text-sm hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-[#32808D] text-[#32808D] px-8 py-3 rounded-lg font-semibold hover:bg-[#32808D] hover:text-white transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
