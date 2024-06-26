import { useLocation } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

export const EpisodeDetailsCard = () => {
    const location = useLocation()
    const { name, description, audio } = location.state

    return (
        <div className="min-w-[40rem] max-w-[45rem] shadow-md border-2 border-gray-100 p-5 flex flex-col gap-5 rounded-md">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="text-sm font-semibold text-gray-500">
                    <i>{ReactHtmlParser(description || '')}</i>
                </div>
            </div>
            <audio controls src={audio} className="w-full"></audio>
        </div>
    )
}
