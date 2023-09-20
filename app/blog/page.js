import Button from "../(components)/button/button";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";
import Paragraph from "./(components)/paragraph";
import Postcard from "./(components)/postcard";

function Blog() {
  return (
    <>
      <Header title="OUR POST" />
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <h2>Our Certificate & Online Program</h2>
            <h5>Aug 1, 2021</h5>
            {/* <img src="img/post.png" alt="" /> */}
            <Paragraph />
            {/* <Paragraph />
            <Paragraph />
            <Paragraph /> */}
            <div className="comment-box">
              <h3>Leave a Comment</h3>
              <form className="comment-form">
                <Input type="text" place="Enter Name" />
                <Input type="email" place="Enter Email" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <Button text="POST COMMENT" />
              </form>
            </div>
          </div>

          <div className="blog-right">
            <h3>Post Categories</h3>
            <Postcard heading="Business Analytics" number="12" />
            <Postcard heading="Machine Learning" number="29" />
            <Postcard heading="Computer Science" number="15" />
            <Postcard heading="Data Analytics" number="22" />
            <Postcard heading="Full Stack" number="20" />
          </div>
        </div>
      </section>
    </>
  )
}
export default Blog;