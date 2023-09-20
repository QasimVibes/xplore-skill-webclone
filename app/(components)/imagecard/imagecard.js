import client from "@/app/lib/contentfulClient"


const fetchHomeMainCard = async () => {
    let response = await client.getEntries({ content_type: "homemaincard" })
    const homecardmain = response.items.map((item) => {
        return {
            image:item.fields.image.fields.file.url,
            title:item.fields.title,
            description:item.fields.description,

        }
    })
    return homecardmain
}

export default async function ImageCard() {
    let response=await fetchHomeMainCard();
    return (
        <>
        {response.map((item)=>{
            return (
                <div className="facilities-col">
                <img src={item.image} height="222px"/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            )
        })}
        </>
    )
}
