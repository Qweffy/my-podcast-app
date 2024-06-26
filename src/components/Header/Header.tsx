import { Link } from 'react-router-dom'
import Loader from 'components/Loader'

export const Header = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <div className="w-full border-b-2 flex justify-center items-center text-sky-600 p-3">
            <div className="w-3/5 flex justify-between">
                <Link to="/" className="font-semibold text-xl">
                    Podcaster
                </Link>
                {isLoading && <Loader />}
            </div>
        </div>
    )
}
