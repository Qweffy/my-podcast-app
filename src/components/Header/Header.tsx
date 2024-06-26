import { Link } from 'react-router-dom'
import Loader from 'components/Loader'

export const Header = ({ isLoading }) => {
    return (
        <div className="w-full border-b-2 py-3 px-3 flex justify-between items-center text-sky-600">
            <Link to="/" className="font-semibold text-xl">
                Podcaster
            </Link>
            {isLoading && <Loader />}
        </div>
    )
}
