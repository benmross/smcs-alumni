import uniqid from 'uniqid'
import Image from 'next/image'
import { storage, database } from '../config-firebase'
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'

export async function getImage(id: string, type: string) {
    const imageRef = ref(storage, "/" + type, + "/" + id)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch {
        if (type == "announcement") {
            return null // default announcement image
        } else if (type == "alumni") {
            return null // default profile pic
        } else {
            return null
        }
    }
}

export async function getAllAnnouncements() {
    const announcementsRef = collection(database, 'announcements')
    const announcementSnap = await getDocs(announcementsRef)
    var data = []
    announcementSnap.forEach((announcement) => {
        data.push({
            ID: announcement.id,
            TYPE: 'announcement',
            IMG_ID: announcement.data().IMG_ID,
            TITLE: announcement.data().TITLE,
            DATE: announcement.data().DATE,
            TEXT: announcement.data().TEXT
        })
    })
    return data
}

export async function getAllAlumni() {
    const alumniRef = collection(database, 'alumni')
    const alumniSnap = await getDocs(alumniRef)
    var data = []
    alumniSnap.forEach((alumni) => {
        data.push({
            ID: alumni.id,
            TYPE: 'alumni',
            IMG_ID: alumni.data().ID,
            NAME: alumni.data().NAME,
            YEAR: alumni.data().DATE
        })
    })
    return data
}