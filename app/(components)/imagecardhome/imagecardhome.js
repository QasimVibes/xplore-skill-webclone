import client from "@/app/lib/contentfulClient"


const fetchHomeCardImage = async () => {
    let response = await client.getEntries({ content_type: "homecardimg" })
    const homecardimg = response.items.map((item) => {
        return {
            image:item.fields.image.fields.file.url,
            heading:item.fields.heading,
        }
    })
    return homecardimg
}
export default async function ImagecardhomeImage() {
    let response=await fetchHomeCardImage();

    return (
        <>
        {response.map((element)=>{
            return (
                <>
                <div className="campus-col">

                <img src={element.image} alt="Card-Image" width="344px" height="229px" />
                <div className="layer">
                    <h3>{element.heading}</h3>
                </div>
            </div>
                </>
            )
        })}

        </>
    )
}
