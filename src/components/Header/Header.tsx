import Loader from 'components/Loader'

export const Header = () => {
    return (
        <div className="w-full border-b-2 py-3 px-3 flex justify-between items-center text-sky-600">
            <span className="font-semibold text-xl">Podcaster</span>
            <Loader />
        </div>
    )
}
