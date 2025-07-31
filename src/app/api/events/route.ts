import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Event } from '@/lib/models';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET - List upcoming events for public display
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const currentDate = new Date();
    
    const events = await db
      .collection<Event>('events')
      .find({ date: { $gte: currentDate } }) // Only future events
      .sort({ date: 1 }) // Sort by date ascending (earliest first)
      .limit(3) // Limit to 3 upcoming events for home page
      .toArray();

    const response = NextResponse.json(events);
    
    // Add cache-busting headers to prevent stale data
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}