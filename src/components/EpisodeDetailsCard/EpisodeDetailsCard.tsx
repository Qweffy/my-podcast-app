import { useLocation } from 'react-router-dom'

export const EpisodeDetailsCard = () => {
    const location = useLocation()
    const name = location.state.name
    const description = location.state.description

    return (
        <div className="min-w-[40rem] max-w-[45rem] shadow-md border-2 border-gray-100 p-5 flex flex-col gap-5 rounded-md">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <p className="text-sm font-semibold text-gray-500">
                    <i>{description || ''}</i>
                </p>
            </div>
            <audio controls className="w-full"></audio>
        </div>
    )
}
