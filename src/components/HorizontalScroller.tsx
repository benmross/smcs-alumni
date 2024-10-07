import { useEffect, useState } from 'react'

export default function HorizontalScroller() {
    return (
        <div className="flex w-screen overflow-x-auto whitespace-nowrap">

        </div>
    )
}

export function HorizontalScrollAnnouncement(title: string, date: Date) {
    date = date.toLocaleDateString()
    const [imageUrl, setImageUrl] = useState(imgid)
    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(imgid, 'announcements')
            setImageUrl(url)
        }
        fetchImage()
    }, [])
    return (
        <div className="flex justify-center items-center">
            <div className="w-[25vw] h-[25vw] rounded-full overflow-hidden flex items-center justify-center">
                <img src={imageUrl} className="max-w-full h-auto" />
            </div>
            <p className="text-2xl">{date}</p>
            <p className="text-3xl">{title}</p>
        </div>
    )
}

export function HorizontalScrollAlumni(name: string, year: number, imgid: string) {
    const [imageUrl, setImageUrl] = useState(imgid)
    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(imgid, 'alumni')
            setImageUrl(url)
        }
        fetchImage()
    }, [])
    return (
        <div className="flex justify-center items-center">
            <div className="w-[25vw] h-[25vw] rounded-full overflow-hidden flex items-center justify-center">
                <img src={imageUrl} className="max-w-full h-auto" />
            </div>
            <p className="text-2xl">Class of {year}</p>
            <p className="text-3xl">{name}</p>
        </div>
    )
}