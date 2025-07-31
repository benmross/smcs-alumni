'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { Announcement, Event, FeaturedAlumni } from '@/lib/models';

export default function Content() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [alumni, setAlumni] = useState<FeaturedAlumni[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [announcementsRes, eventsRes, alumniRes] = await Promise.all([
                    fetch('/api/announcements'),
                    fetch('/api/events'),
                    fetch('/api/alumni')
                ]);

                const [announcementsData, eventsData, alumniData] = await Promise.all([
                    announcementsRes.json(),
                    eventsRes.json(),
                    alumniRes.json()
                ]);

                setAnnouncements(announcementsData);
                setEvents(eventsData);
                setAlumni(alumniData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff3131] mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading content...</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Announcements Section */}
                <section className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3131] mb-8 text-center lg:text-left">
                        Announcements
                    </h2>
                    {announcements.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {announcements.map((announcement) => (
                                <div key={announcement._id?.toString()} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    {announcement.imageUrl && (
                                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={announcement.imageUrl}
                                                alt={announcement.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {announcement.title}
                                    </h3>
                                    <p className="text-sm text-[#ff3131] font-semibold mb-3">
                                        {formatDate(announcement.date.toString())}
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        {announcement.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl text-gray-600 text-center py-8">
                            No announcements available at this time.
                        </p>
                    )}
                </section>

                {/* Events Section */}
                <section className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3131] mb-8 text-center lg:text-left">
                        Upcoming Events
                    </h2>
                    {events.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map((event) => (
                                <div key={event._id?.toString()} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    {event.imageUrl && (
                                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={event.imageUrl}
                                                alt={event.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-[#ff3131] font-semibold mb-1">
                                        {formatDate(event.date.toString())}
                                    </p>
                                    {event.location && (
                                        <p className="text-sm text-gray-600 mb-3">
                                            📍 {event.location}
                                        </p>
                                    )}
                                    <p className="text-gray-700 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl text-gray-600 text-center py-8">
                            No upcoming events scheduled at this time.
                        </p>
                    )}
                </section>

                {/* Featured Alumni Section */}
                <section>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff3131] mb-8 text-center lg:text-left">
                        Featured Alumni
                    </h2>
                    {alumni.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {alumni.map((person) => (
                                <div key={person._id?.toString()} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                                    {person.imageUrl && (
                                        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                            <Image
                                                src={person.imageUrl}
                                                alt={person.name}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-full"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-[#ff3131] font-semibold mb-2">
                                        Class of {person.graduationYear}
                                    </p>
                                    {person.currentPosition && person.company && (
                                        <p className="text-sm text-gray-600 mb-3">
                                            {person.currentPosition} at {person.company}
                                        </p>
                                    )}
                                    <p className="text-gray-700 leading-relaxed text-left">
                                        {person.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl text-gray-600 text-center py-8">
                            No featured alumni profiles available at this time.
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}