import Image from 'next/image'
import Button from '../(components)/button/button'
import Header from '../(components)/header/header'
import client from "@/app/lib/contentfulClient"


const fetchabout = async () => {
  let response = await client.getEntries({ content_type: "about" })
  const aboutsection = response.items.map((item) => {
    return {
      heading: item.fields.heading,
      description: item.fields.description,
      image: item.fields.image.fields.file.url,

    }
  })
  return aboutsection
}
export default async function About() {
  let response = await fetchabout();
  return (
    <>
      <Header title="About Us" />
      <section className="about-us">
        <div className="row">
          {response.map((item) => {
            return (
              <>
                <div className="about-col">
                  <h1>{item.heading}</h1>
                  <p>{item.description}</p>
                  <Button text="EXPLORE NOW" />
                </div>
                <div className="about-col">
                  <img src={item.image} />
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}
