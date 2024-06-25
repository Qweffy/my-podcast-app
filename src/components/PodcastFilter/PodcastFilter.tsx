import { PodcastFilterProps } from './PodcastFilter.types.ts'

export const PodcastFilter = ({ filter, setFilter }: PodcastFilterProps) => {
    return (
        <section className="flex justify-end w-3/5">
            <div className="flex gap-3 items-center">
                <span className="rounded-md font-bold bg-sky-600 text-white px-1 text">100</span>
                <input
                    type="text"
                    className="min-w-[14rem] rounded border-2 border-gray-100 shadow-sm text-sm px-3 py-2 placeholder font-semibold focus:shadow-xl outline-none ease-in-out duration-300 placeholder:text-gray-400"
                    placeholder="Filter podcasts..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
        </section>
    )
}
