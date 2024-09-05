import Image from 'next/image'

type EmptyDataProps = {
    title?: string;
    description?: string
    image?: any
}

/**
 * EmptyData handles a ui render when a page data is null or empty
 * @param param0 
 * @returns React.ReactNode
 */
const EmptyData = ({ title, description, image }: EmptyDataProps) => {
    return (
        <div className="space-y-5 mx-auto max-w-lg">
            <div className="flex justify-center w-max mx-auto">
                <Image
                    src={image}
                    width={300}
                    alt="Picture of the author"
                />
            </div>
            <div className="space-y-3">
                <h1 className="text-center text-xl font-semibold">{title}</h1>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default EmptyData