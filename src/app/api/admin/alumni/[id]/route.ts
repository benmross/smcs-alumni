import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { FeaturedAlumni } from '@/lib/models';
import { ObjectId } from 'mongodb';

// PUT - Update featured alumni
export const PUT = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, graduationYear, bio, currentPosition, company, imageUrl } = body;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid alumni ID' },
        { status: 400 }
      );
    }

    if (!name || !graduationYear || !bio) {
      return NextResponse.json(
        { error: 'Name, graduation year, and bio are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const updateData = {
      name,
      graduationYear: parseInt(graduationYear),
      bio,
      currentPosition: currentPosition || undefined,
      company: company || undefined,
      imageUrl: imageUrl || undefined,
      updatedAt: new Date(),
    };

    const result = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Alumni not found' },
        { status: 404 }
      );
    }

    const updatedAlumni = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json(updatedAlumni);
  } catch (error) {
    console.error('Failed to update alumni:', error);
    return NextResponse.json(
      { error: 'Failed to update alumni' },
      { status: 500 }
    );
  }
});

// DELETE - Delete featured alumni
export const DELETE = requireAdmin(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid alumni ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('smcs-alumni');
    
    const result = await db
      .collection<FeaturedAlumni>('featured_alumni')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Alumni not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete alumni:', error);
    return NextResponse.json(
      { error: 'Failed to delete alumni' },
      { status: 500 }
    );
  }
});