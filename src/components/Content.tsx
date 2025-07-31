'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from 'react';
import { Announcement, Event, FeaturedAlumni } from '@/lib/models';

export default function Content() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [alumni, setAlumni] = useState<FeaturedAlumni[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    const fetchData = useCallback(async (isRetry = false) => {
        try {
            setError(null);
            if (!isRetry) {
                setLoading(true);
            }

            // Add cache-busting headers and timestamp to prevent caching issues
            const timestamp = Date.now();
            const randomParam = Math.random().toString(36).substring(7);
            const fetchOptions = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                    'If-None-Match': '*',
                    'If-Modified-Since': 'Thu, 01 Jan 1970 00:00:00 GMT'
                },
                cache: 'no-store' as RequestCache
            };

            const [announcementsRes, eventsRes, alumniRes] = await Promise.all([
                fetch(`/api/announcements?t=${timestamp}&r=${randomParam}`, fetchOptions),
                fetch(`/api/events?t=${timestamp}&r=${randomParam}`, fetchOptions), 
                fetch(`/api/alumni?t=${timestamp}&r=${randomParam}`, fetchOptions)
            ]);

            // Check if all responses are ok
            if (!announcementsRes.ok) {
                throw new Error(`Failed to fetch announcements: ${announcementsRes.status}`);
            }
            if (!eventsRes.ok) {
                throw new Error(`Failed to fetch events: ${eventsRes.status}`);
            }
            if (!alumniRes.ok) {
                throw new Error(`Failed to fetch alumni: ${alumniRes.status}`);
            }

            const [announcementsData, eventsData, alumniData] = await Promise.all([
                announcementsRes.json(),
                eventsRes.json(),
                alumniRes.json()
            ]);

            // Validate data structure
            setAnnouncements(Array.isArray(announcementsData) ? announcementsData : []);
            setEvents(Array.isArray(eventsData) ? eventsData : []);
            setAlumni(Array.isArray(alumniData) ? alumniData : []);
            
            setRetryCount(0); // Reset retry count on success
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setError(error instanceof Error ? error.message : 'Failed to load content');
            
            // Auto-retry up to 3 times with exponential backoff
            if (retryCount < 3) {
                const delay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
                setTimeout(() => {
                    setRetryCount(prev => prev + 1);
                    fetchData(true);
                }, delay);
            }
        } finally {
            setLoading(false);
        }
    }, [retryCount]);

    const handleRetry = () => {
        setRetryCount(0);
        fetchData();
    };

    useEffect(() => {
        fetchData();
        
        // Set up automatic refresh every 30 seconds to catch new content
        const interval = setInterval(() => {
            if (!loading) {
                fetchData(true); // Silent refresh
            }
        }, 30000);
        
        // Refresh when user returns to the tab
        const handleVisibilityChange = () => {
            if (!document.hidden && !loading) {
                fetchData(true); // Silent refresh when tab becomes visible
            }
        };
        
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [fetchData, loading]);

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
                <p className="mt-4 text-gray-600">
                    {retryCount > 0 ? `Loading content... (Attempt ${retryCount + 1}/4)` : 'Loading content...'}
                </p>
            </div>
        );
    }

    if (error && retryCount >= 3) {
        return (
            <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                    <div className="text-red-600 mb-4">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <h3 className="font-semibold text-lg">Failed to Load Content</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="inline-flex items-center px-4 py-2 bg-[#ff3131] text-white rounded-lg hover:bg-[#e02828] transition-colors duration-200"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2A8.003 8.003 0 0019.417 15M15 15H9" />
                        </svg>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Refresh Button */}
                <div className="text-center mb-8">
                    <button
                        onClick={handleRetry}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#ff3131] bg-white border border-[#ff3131] rounded-lg hover:bg-[#ff3131] hover:text-white transition-colors duration-200"
                        disabled={loading}
                    >
                        <svg className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2A8.003 8.003 0 0019.417 15M15 15H9" />
                        </svg>
                        {loading ? 'Refreshing...' : 'Refresh Content'}
                    </button>
                </div>

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