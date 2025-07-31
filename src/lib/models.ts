import { ObjectId } from 'mongodb';

export interface Announcement {
  _id?: ObjectId;
  title: string;
  content: string;
  date: Date;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  _id?: ObjectId;
  title: string;
  description: string;
  date: Date;
  location?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeaturedAlumni {
  _id?: ObjectId;
  name: string;
  graduationYear: number;
  bio: string;
  currentPosition?: string;
  company?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser {
  _id?: ObjectId;
  username: string;
  passwordHash: string;
  createdAt: Date;
}