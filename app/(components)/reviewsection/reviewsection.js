import Image from 'next/image'
export default function Reviewsection(props) {
    return (
        <>
            <div className="testimonials-col">
                <Image
                    src={props.img}
                    alt="Picture"
                    width={60}
                    height={60}

                />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className={props.star}></i>
                </div>
            </div>
        </>
    )
}
