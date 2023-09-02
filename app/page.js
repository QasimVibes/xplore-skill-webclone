import Homecard from "./(components)/homecard/homecard"
import ImageCard from "./(components)/imagecard/imagecard"
import Imagecardhome from "./(components)/imagecardhome/imagecardhome"
import Navbar from "./(components)/navbar/navbar"
import Reviewsection from "./(components)/reviewsection/reviewsection"
import Subsection from "./(components)/subsection/subsection"
function Home() {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
      </section>
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Homecard heading="Undergraduate Programs" />
          <Homecard heading="Graduate Programs" />
          <Homecard heading="Adult Learning & Degree Completion" />
        </div>
      </section>
      <section className="campus">
        <Subsection heading="TAKE OUR VIRTUAL TOUR" />
        <div className="row">
          <Imagecardhome img="/img/Campus1.png" heading="DELHI" />
          <Imagecardhome img="/img/Campus2.png" heading="HYDERABAD" />
          <Imagecardhome img="/img/Campus3.png" heading="MUMBAI" />
        </div>
      </section>
      <section className="facilities">
        <Subsection heading="Our Facilities"/>
        <div className="row">
          <ImageCard source="/img/libary.png" title="Best Libary" />
          <ImageCard source="/img/playground.png" title="Athletics" />
          <ImageCard source="/img/food.png" title="Tasty and Healthy Food" />
        </div>
      </section>
      <section className="testimonials">
        <Subsection heading="WHAT OUR STUDENT SAYS"/>
        <div className="row">
          <Reviewsection img="/img/user.png" star="fa fa-star"/>
          <Reviewsection img="/img/user.png" star="fa fa-star-half-alt"/>
        </div>
    </section>
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" className="hero_btn">CONTACT US</a>
    </section>
    </>
  )
}
export default Home;