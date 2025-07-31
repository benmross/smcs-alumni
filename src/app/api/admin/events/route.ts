import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { Event } from '@/lib/models';

// GET - List all events
export const GET = requireAdmin(async (request: NextRequest) => {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const events = await db
      .collection<Event>('events')
      .find({})
      .sort({ date: -1 })
      .toArray();

    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
});

// POST - Create new event
export const POST = requireAdmin(async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { title, description, date, location, imageUrl } = body;

    if (!title || !description || !date) {
      return NextResponse.json(
        { error: 'Title, description, and date are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const event: Omit<Event, '_id'> = {
      title,
      description,
      date: new Date(date),
      location: location || undefined,
      imageUrl: imageUrl || undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection<Event>('events')
      .insertOne(event);

    const createdEvent = await db
      .collection<Event>('events')
      .findOne({ _id: result.insertedId });

    return NextResponse.json(createdEvent, { status: 201 });
  } catch (error) {
    console.error('Failed to create event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
});