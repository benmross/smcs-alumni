import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { FeaturedAlumni } from '@/lib/models';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

    const response = NextResponse.json(alumni);
    
    // Add cache-busting headers to prevent stale data
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Failed to fetch alumni:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alumni' },
      { status: 500 }
    );
  }
}