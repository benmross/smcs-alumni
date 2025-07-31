import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { Event } from '@/lib/models';
import { ObjectId } from 'mongodb';

// PUT - Update event
export const PUT = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, date, location, imageUrl } = body;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid event ID' },
        { status: 400 }
      );
    }

    if (!title || !description || !date) {
      return NextResponse.json(
        { error: 'Title, description, and date are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const updateData = {
      title,
      description,
      date: new Date(date),
      location: location || undefined,
      imageUrl: imageUrl || undefined,
      updatedAt: new Date(),
    };

    const result = await db
      .collection<Event>('events')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    const updatedEvent = await db
      .collection<Event>('events')
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error('Failed to update event:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
});

// DELETE - Delete event
export const DELETE = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid event ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const result = await db
      .collection<Event>('events')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete event:', error);
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
});