import { PodcastCardProps } from './PodcastCard.types.ts'

export const PodcastCard = ({ title, author, imageURL }: PodcastCardProps) => {
    return (
        <div className="flex flex-col items-center relative min-w-[5rem] max-w-[13rem]">
            <img
                src={imageURL}
                alt={title || 'Podcast Image'}
                className="absolute top-5 left-auto w-[7rem] rounded-full shadow-md aspect-square object-cover"
            />
            <div className="w-full flex flex-col gap-2 rounded-md border shadow-md mt-[5rem] pt-[4rem] min-h-[9rem] px-[.5rem] pb-[.7rem]  hover:shadow-2xl ease-in-out duration-300 ">
                <h2 className="font-semibold text-center">{title.toUpperCase()}</h2>
                <p className="text-gray-400 text-sm text-center font-semibold">Author: {author}</p>
            </div>
        </div>
    )
}
