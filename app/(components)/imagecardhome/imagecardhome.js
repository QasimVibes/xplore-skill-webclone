import Image from 'next/image'
export default function Imagecardhome(props) {
    return (
        <>
            <div className="campus-col">
                <Image
                    src={props.img}
                    alt="Card-Image"
                    width={344}
                    height={229}
                />
                <div className="layer">
                    <h3>{props.heading}</h3>
                </div>
            </div>
        </>
    )
}
