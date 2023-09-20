import client from "@/app/lib/contentfulClient"


const fetchCourseCard = async () => {
    let response = await client.getEntries({ content_type: "course" })
    const coursescard = response.items.map((item) => {
        return {
            heading:item.fields.heading,
            description:item.fields.description,
            image:item.fields.image.fields.file.url,

        }
    })
    return coursescard
}

export default async function Coursescard() {
    let response=await fetchCourseCard();
  return (
    <>
    {response.map((item)=>{
        return (
            <>
            <div className="facilities-col">
            <img src={item.image} alt=""  width='335px' height='223px'/>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
            </div>
            </>
        )
    })}
    </>
  )
}
