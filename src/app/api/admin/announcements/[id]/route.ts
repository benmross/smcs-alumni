import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { Announcement } from '@/lib/models';
import { ObjectId } from 'mongodb';

// PUT - Update announcement
export const PUT = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, content, date, imageUrl } = body;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid announcement ID' },
        { status: 400 }
      );
    }

    if (!title || !content || !date) {
      return NextResponse.json(
        { error: 'Title, content, and date are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const updateData = {
      title,
      content,
      date: new Date(date),
      imageUrl: imageUrl || undefined,
      updatedAt: new Date(),
    };

    const result = await db
      .collection<Announcement>('announcements')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Announcement not found' },
        { status: 404 }
      );
    }

    const updatedAnnouncement = await db
      .collection<Announcement>('announcements')
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json(updatedAnnouncement);
  } catch (error) {
    console.error('Failed to update announcement:', error);
    return NextResponse.json(
      { error: 'Failed to update announcement' },
      { status: 500 }
    );
  }
});

// DELETE - Delete announcement
export const DELETE = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid announcement ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const result = await db
      .collection<Announcement>('announcements')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Announcement not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete announcement:', error);
    return NextResponse.json(
      { error: 'Failed to delete announcement' },
      { status: 500 }
    );
  }
});