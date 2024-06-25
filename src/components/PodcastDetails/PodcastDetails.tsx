import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PodcastDetails = () => {
    const { podcastId } = useParams<string>()
    const [podcastDetails, setPodcastDetails] = useState(null)

    useEffect(() => {
        const fetchPodcastDetails = async () => {
            const url = `https://allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`
            const response = await fetch(url)
            const data = await response.json()
            setPodcastDetails(data.contents)
        }

        fetchPodcastDetails()
    }, [podcastId])

    console.log('podcast detailssssss', podcastDetails)
    return (
        <div className="flex flex-col w-full border items-center">
            <div className="flex gap-10">
                <section className="shadow-md min-h-[10rem] ">
                    <img></img>
                    <div>
                        <h3>Song Exploder</h3>
                        <p>by Song Exploder</p>
                    </div>
                </section>
                <section className="min-w-[20rem]">
                    <div className="shadow-md">EPISODES</div>
                    <div className="shadow-md p-3">
                        <table>
                            <th className="border-b-2 flex justify-between font-semibold">
                                <td>Title</td>
                                <td>Date</td>
                                <td>Duration</td>
                            </th>

                            <tr className="text-sm">
                                <td>Clipping - Work Work</td>
                                <td>18/2/2016</td>
                                <td>15:03</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PodcastDetails
