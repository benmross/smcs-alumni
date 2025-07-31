import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { FeaturedAlumni } from '@/lib/models';

// GET - List featured alumni for public display
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const alumni = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .find({})
      .sort({ graduationYear: -1 }) // Sort by graduation year descending (most recent first)
      .limit(3) // Limit to 3 featured alumni for home page
      .toArray();

    return NextResponse.json(alumni);
  } catch (error) {
    console.error('Failed to fetch alumni:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alumni' },
      { status: 500 }
    );
  }
}