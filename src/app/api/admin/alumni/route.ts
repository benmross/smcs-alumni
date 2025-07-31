import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { FeaturedAlumni } from '@/lib/models';

// GET - List all featured alumni
export const GET = requireAdmin(async (request: NextRequest) => {
  try {
    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const alumni = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .find({})
      .sort({ graduationYear: -1 })
      .toArray();

    return NextResponse.json(alumni);
  } catch (error) {
    console.error('Failed to fetch alumni:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alumni' },
      { status: 500 }
    );
  }
});

// POST - Create new featured alumni
export const POST = requireAdmin(async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { name, graduationYear, bio, currentPosition, company, imageUrl } = body;

    if (!name || !graduationYear || !bio) {
      return NextResponse.json(
        { error: 'Name, graduation year, and bio are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const alumni: Omit<FeaturedAlumni, '_id'> = {
      name,
      graduationYear: parseInt(graduationYear),
      bio,
      currentPosition: currentPosition || undefined,
      company: company || undefined,
      imageUrl: imageUrl || undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .insertOne(alumni);

    const createdAlumni = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .findOne({ _id: result.insertedId });

    return NextResponse.json(createdAlumni, { status: 201 });
  } catch (error) {
    console.error('Failed to create alumni:', error);
    return NextResponse.json(
      { error: 'Failed to create alumni' },
      { status: 500 }
    );
  }
});