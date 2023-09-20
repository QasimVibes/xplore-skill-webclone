import client from "@/app/lib/contentfulClient"

const fetchHomeCard = async () => {
    let response = await client.getEntries({ content_type: "homecard" })
    const homecard = response.items.map((item) => {
        return {
            heading: item.fields.heading,
            description: item.fields.description,
        }
    })
    return homecard
}

export default async function Homecard() {
    const homecard = await fetchHomeCard()
    return (
        <>
            {homecard.map((element) => {
                return (
                    <>
                        <div className="course-col">
                            <h3>{element.heading}</h3>
                            <p>{element.description}</p>
                        </div>
                    </>
                )
            })}

        </>
    )
}
