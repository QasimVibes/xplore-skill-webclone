// import "./coursesStyle.css"
import '@/styles/pages/course.css'
import Header from '../(components)/header/header'
import Homecard from '../(components)/homecard/homecard'
import Coursescard from './(components)/coursescard'
function Courses() {
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <Homecard/>
        </div>
      </section>



      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Coursescard/>

        </div>
      </section>



    </>
  )
}
export default Courses