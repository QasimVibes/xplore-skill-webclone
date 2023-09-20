import client from "@/app/lib/contentfulClient"


const fetchBlog = async () => {
    let response = await client.getEntries({ content_type: "blog" })
    const blog = response.items.map((item) => {
        return {
            image:item.fields.image.fields.file.url,
            description:item.fields.description,

        }
    })
    return blog
}
export default async function Paragraph() {
    let response=await fetchBlog();
    return (
        <>
            {response.map((item)=>{
                return (
                    <>
                    <img src={item.image} alt="" />
                    <p>{item.description}</p>
                    </>
                )
            })}
        </>
    )
}
