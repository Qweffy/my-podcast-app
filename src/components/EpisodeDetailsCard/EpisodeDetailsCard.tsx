import { useLocation } from 'react-router-dom'

export const EpisodeDetailsCard = () => {
    const location = useLocation()
    console.log('location', location)
    return (
        <div className="min-w-[40rem] max-w-[45rem] shadow-md border-1 p-5 flex flex-col gap-5">
            <div>
                <h2 className="font-bold text-xl">{episode?.name}</h2>
                <p className="text-sm font-semibold text-gray-500">
                    <i>{episode?.description}</i>
                </p>
            </div>
            <audio controls className="w-full"></audio>
        </div>
    )
}
