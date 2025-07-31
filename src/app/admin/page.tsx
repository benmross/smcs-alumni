'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnnouncementsManager from '@/components/admin/AnnouncementsManager';
import EventsManager from '@/components/admin/EventsManager';
import AlumniManager from '@/components/admin/AlumniManager';

interface DashboardStats {
  announcements: number;
  events: number;
  alumni: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({ announcements: 0, events: 0, alumni: 0 });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'announcements' | 'events' | 'alumni'>('announcements');
  const router = useRouter();

  useEffect(() => {
    // Check authentication and load stats
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load stats for each collection
      const [announcementsRes, eventsRes, alumniRes] = await Promise.all([
        fetch('/api/admin/announcements'),
        fetch('/api/admin/events'),
        fetch('/api/admin/alumni')
      ]);

      if (announcementsRes.status === 401 || eventsRes.status === 401 || alumniRes.status === 401) {
        router.push('/admin/login');
        return;
      }

      const [announcements, events, alumni] = await Promise.all([
        announcementsRes.json(),
        eventsRes.json(),
        alumniRes.json()
      ]);

      setStats({
        announcements: announcements.length || 0,
        events: events.length || 0,
        alumni: alumni.length || 0
      });
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-white">
              SMCS Alumni Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.announcements}</p>
                <p className="text-gray-400">Announcements</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-6 4a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4H8z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.events}</p>
                <p className="text-gray-400">Events</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.alumni}</p>
                <p className="text-gray-400">Featured Alumni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden">
          <div className="border-b border-gray-700/30">
            <nav className="flex">
              {[
                { id: 'announcements', label: 'Announcements', icon: '📢' },
                { id: 'events', label: 'Events', icon: '📅' },
                { id: 'alumni', label: 'Featured Alumni', icon: '👥' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#ff3131]/20 text-[#ff3131] border-b-2 border-[#ff3131]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'announcements' && (
              <AnnouncementsManager onStatsUpdate={(count) => setStats(prev => ({ ...prev, announcements: count }))} />
            )}
            {activeTab === 'events' && (
              <EventsManager onStatsUpdate={(count) => setStats(prev => ({ ...prev, events: count }))} />
            )}
            {activeTab === 'alumni' && (
              <AlumniManager onStatsUpdate={(count) => setStats(prev => ({ ...prev, alumni: count }))} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}