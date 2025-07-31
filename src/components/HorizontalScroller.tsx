import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getImage } from './firebase-util'

export default function HorizontalScroller() {
    return (
        <div className="flex w-screen overflow-x-auto whitespace-nowrap">

        </div>
    )
}

export function HorizontalScrollAnnouncement({ title, date, imgid }: { title: string; date: Date; imgid: string }) {
    const dateString = date.toLocaleDateString()
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(imgid, 'announcements')
            setImageUrl(url)
        }
        fetchImage()
    }, [imgid])
    
    return (
        <div className="flex justify-center items-center">
            <div className="w-[25vw] h-[25vw] rounded-full overflow-hidden flex items-center justify-center">
                <Image src={imageUrl || '/placeholder.png'} alt={title} className="max-w-full h-auto" width={400} height={400} />
            </div>
            <p className="text-2xl">{dateString}</p>
            <p className="text-3xl">{title}</p>
        </div>
    )
}

export function HorizontalScrollAlumni({ name, year, imgid }: { name: string; year: number; imgid: string }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(imgid, 'alumni')
            setImageUrl(url)
        }
        fetchImage()
    }, [imgid])
    
    return (
        <div className="flex justify-center items-center">
            <div className="w-[25vw] h-[25vw] rounded-full overflow-hidden flex items-center justify-center">
                <Image src={imageUrl || '/placeholder.png'} alt={name} className="max-w-full h-auto" width={400} height={400} />
            </div>
            <p className="text-2xl">Class of {year}</p>
            <p className="text-3xl">{name}</p>
        </div>
    )
}