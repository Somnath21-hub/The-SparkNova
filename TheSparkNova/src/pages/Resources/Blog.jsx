import React, { useEffect, useRef } from "react";

const Blog = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
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
          }, index * 160);
        });
      }
    }, 290);
  }, []);

  const blogs = [
    {
      category: "Entrepreneurship",
      title: "How to Validate Your Startup Idea in 30 Days",
      description: "A practical framework for first-time founders",
      date: "15 Jan 2025",
      accent: "bg-cyan-100 text-[#00b3b3]",
    },
    {
      category: "Funding",
      title: "Understanding Government Startup Schemes",
      description: "Complete guide to SISFS, NIDHI, and other programs",
      date: "10 Jan 2025",
      accent: "bg-blue-100 text-[#32808D]",
    },
    {
      category: "Incubation",
      title: "Building an Incubation Center: Best Practices",
      description: "Lessons from 50+ successful implementations",
      date: "5 Jan 2025",
      accent: "bg-teal-100 text-[#00b3b3]",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="absolute -top-10 right-14 w-40 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-20 rounded-3xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Insights, stories, and tips from the startup ecosystem
          </p>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card flex flex-col bg-white/90 backdrop-blur-xl rounded-3xl px-7 pt-7 pb-8 shadow-lg border-t-8 border-cyan-100 hover:border-[#00b3b3] hover:shadow-xl transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(28px)" }}
            >
              <span
                className={`inline-block px-3 py-1 mb-5 rounded-full text-xs font-bold self-start ${blog.accent}`}
              >
                {blog.category}
              </span>
              <h3 className="text-xl font-bold text-[#0d2b2e] mb-2 leading-tight">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {blog.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-400 text-xs">{blog.date}</span>
                <button className="bg-[#00b3b3] text-white px-6 py-2 rounded-lg font-semibold text-xs hover:bg-[#32808D] transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-[#00b3b3] text-[#00b3b3] px-8 py-3 rounded-xl font-bold hover:bg-[#00b3b3] hover:text-white transition-colors shadow-md">
            View All Articles
          </button>
        </div>
      </div>
      {/* Lower right accent blob */}
      <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-20 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default Blog;
