import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


const BlogCard = ({ title, date, image, description, imgClassName = "" }) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow bg-white/40 backdrop-blur p-3 mx-auto">
    <img
      className={`w-200 h-50 object-cover rounded-md ${imgClassName}`}
      src={image}
      alt={title}
    />
    <div className="mt-3">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600 text-xs">{date}</p>
      <p className="text-gray-700 mt-1 text-sm">{description}</p>
      <button className="mt-3  py-2 rounded-full border-4 border-black-500/75   bg-white-500 hover:bg-green-100 text-black  font-bold px-3 rounded text-sm flex items-center">
        Read More
        <span className="inline-flex items-center justify-center w-8 h-6  ml-2">
          <FiArrowUpRight className="text-black text-base" />
        </span>
      </button>
    </div>
  </div>
);

const BlogSection = () => (
  <motion.section
    id="investment"
    className="bg-white  mx-auto px-15 py-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
   <div className="flex flex-col md:flex-row items-center justify-between">
     <h1 className="text-4xl font-bold  mb-8">
    Current opportunities
    </h1>
     <button className="mt-3 py-2 rounded-full  bg-green-800 hover:bg-green-900 text-white font-bold py-1.5 px-3 rounded text-sm flex items-center gap-2">
        See More opportunities
        <span className="inline-flex items-center justify-center w-6 h-6 ">
          <FiArrowUpRight className="text-white text-base" />
        </span>
      </button>
   </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <BlogCard
        title="Luxury villa"
        date="Dec 22, 2025"
        image="/imgs/cust.jpeg"
        description="Plots (1,000m²) with infrastructure and management"
      />
      <BlogCard
        title="Founders’"
        date="Dec 22, 2025"
        image="/imgs/cust1.jpeg"
        description="Shares in the reserve project (land + eco-tourism rights)"
      />
      <BlogCard
        title="Co-investment"
        date="Dec 22, 2025"
        image="/imgs/cust2.jpeg"
        des
        description="In the lodge and tourism activities"
      />
    </div>

  </motion.section>
);

const Investment = () => <BlogSection />;

export default Investment;
