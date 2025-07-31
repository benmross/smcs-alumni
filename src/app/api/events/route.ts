import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Event } from '@/lib/models';

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

    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}