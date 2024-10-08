import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import edugraphImg from "../assets/img/edugraph.png"; // Importing the achievement image

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Articles on Diabetes
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore our latest articles on managing diabetes, staying healthy,
            and living well with diabetes.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="View All Articles" />
        </div>
      </div>

      {/* Articles Section */}
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Understanding Type 1 Diabetes" />
          <BlogCard img={img2} headlines="Managing Type 2 Diabetes Through Diet" />
          <BlogCard img={img3} headlines="Importance of Blood Sugar Monitoring" />
          <BlogCard img={img4} headlines="Exercise Tips for People with Diabetes" />
          <BlogCard img={img5} headlines="Healthy Recipes for Diabetics" />
          <BlogCard img={img6} headlines="Mental Health and Diabetes: What You Need to Know" />
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center">Our Achievements</h2>
        <div className="my-4">
          <img src={edugraphImg} alt="Edugraph Achievement" className="max-w-full h-auto" />
        </div>
        <a
          href="https://www.telegraphindia.com/edugraph/campus/rcc-institute-of-information-technology-organises-2nd-edition-of-smart-bengal-hackathon-2024/cid/2014593"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more about our achievement on Telegraph India
        </a>
      </div>
    </div>
  );
};

export default Blogs;
