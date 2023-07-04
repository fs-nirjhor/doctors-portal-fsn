import React from "react";
import { Row } from "react-bootstrap";
import people1 from "../../../images/people1.png" ;
import people2 from "../../../images/people2.png" ;
import people3 from "../../../images/people3.png" ;
import BlogCard from "../BlogCard/BlogCard";

const blogData = [
  {
    name: "Winson Harry",
    date: "23 April 2023",
    photo: people1,
    title: "Check at least a doctor in a year for your teeth.",
    text: "et eiusmod est laboris laboris sunt elit officia Lorem occaecat nulla est nulla nulla proident irure veniam ad do quis",
  },
  {
    name: "John Doe",
    date: "20 June 2023",
    photo: people2,
    title: "Two time brush in a day can keep you healthy.",
    text: "et eiusmod est laboris laboris sunt elit officia Lorem occaecat nulla est nulla nulla proident irure veniam ad do quis",
  },
  {
    name: "Devid Jim",
    date: "13 February 2023",
    photo: people3,
    title: "The tooth cancer is taking a challenge.",
    text: "et eiusmod est laboris laboris sunt elit officia Lorem occaecat nulla est nulla nulla proident irure veniam ad do quis",
  },
  ];

const Blog = () => {
return (
  <section className="my-5">
  <div className="text-center mb-3">
    <p className="h4 mb-3 text-brand">BLOG</p>
    <p className="h1">What's Our Patients Says</p>
  </div>
  <Row xs={1} md={3}>
    {
      blogData.map(blog => <BlogCard blog={blog} key={blog.name}/>)
    }
  </Row>
  </section>
);
};

export default Blog;