import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Announcement } from '@/lib/models';

// GET - List all announcements for public display
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const announcements = await db
      .collection<Announcement>('announcements')
      .find({})
      .sort({ date: -1 })
      .limit(3) // Limit to 3 most recent announcements for home page
      .toArray();

    return NextResponse.json(announcements);
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}