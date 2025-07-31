import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { Announcement } from '@/lib/models';

// GET - List all announcements
export const GET = requireAdmin(async (request: NextRequest) => {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const announcements = await db
      .collection<Announcement>('announcements')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(announcements);
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
});

// POST - Create new announcement
export const POST = requireAdmin(async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { title, content, date, imageUrl } = body;

    if (!title || !content || !date) {
      return NextResponse.json(
        { error: 'Title, content, and date are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const announcement: Omit<Announcement, '_id'> = {
      title,
      content,
      date: new Date(date),
      imageUrl: imageUrl || undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection<Announcement>('announcements')
      .insertOne(announcement);

    const createdAnnouncement = await db
      .collection<Announcement>('announcements')
      .findOne({ _id: result.insertedId });

    return NextResponse.json(createdAnnouncement, { status: 201 });
  } catch (error) {
    console.error('Failed to create announcement:', error);
    return NextResponse.json(
      { error: 'Failed to create announcement' },
      { status: 500 }
    );
  }
});