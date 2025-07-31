# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application for the SMCS Alumni Collective - a website for connecting SMCS alumni for networking and fundraising to support current students. The site features donation functionality and uses Firebase for backend services.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production application 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture & Key Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom colors (primary red: #ff3131)
- **Font**: League Spartan from Google Fonts
- **Backend**: Firebase (Firestore, Storage, Auth)
- **Language**: TypeScript with strict mode enabled

## Project Structure

- `src/app/` - App Router pages (layout.tsx, page.tsx, donate/page.tsx)
- `src/components/` - Reusable React components
- `config-firebase.ts` - Firebase configuration and exports
- TypeScript path alias: `@/*` maps to `./src/*`

## Firebase Integration

The application uses Firebase services:
- **Firestore**: For storing announcements and alumni data
- **Storage**: For images (announcements, alumni photos)
- **Auth**: Authentication services

Key utilities in `src/components/firebase-util.ts`:
- `getImage(id, type)` - Retrieve images from Firebase Storage
- `getAllAnnouncements()` - Fetch all announcements from Firestore
- `getAllAlumni()` - Fetch all alumni data from Firestore

## Component Architecture

- **Layout Pattern**: Root layout includes Header and Footer components
- **Page Structure**: Uses HeroSection component with configurable types
- **Content Display**: Content component dynamically fetches and displays MongoDB data
- **Styling**: Consistent use of Tailwind classes with custom red theme color
- **Responsive**: Mobile-responsive design with Tailwind breakpoints

## Admin Dashboard

- **Access**: `/admin` (not accessible through navigation)
- **Authentication**: Username/password login (credentials in .env.local)
- **Features**: Full CRUD operations for announcements, events, and featured alumni
- **Image Upload**: Supports image uploads for all content types
- **Database**: MongoDB for persistent storage

### Admin API Routes
- `/api/auth/login` - Admin authentication
- `/api/admin/announcements` - Announcements CRUD
- `/api/admin/events` - Events CRUD
- `/api/admin/alumni` - Featured alumni CRUD
- `/api/admin/upload` - Image upload handler

### Public API Routes
- `/api/announcements` - Fetch 3 most recent announcements for home page display
- `/api/events` - Fetch 3 upcoming events for home page display
- `/api/alumni` - Fetch 3 featured alumni profiles for home page display

**Cache Management**: All public API routes use `dynamic = 'force-dynamic'` and `revalidate = 0` to prevent caching and ensure real-time data updates.

## Content Loading & Caching

The home page uses aggressive anti-caching mechanisms to ensure data freshness:

- **API Routes**: Configured with `force-dynamic` rendering and zero revalidation
- **Next.js Config**: Global API route headers disable all caching layers
- **Client-Side**: Uses `cache: 'no-store'` with timestamp and random parameters
- **Auto-Refresh**: Content refreshes every 30 seconds and when tab becomes visible
- **Error Handling**: Comprehensive retry logic with exponential backoff
- **Manual Refresh**: Users can manually refresh content via UI button

## Important Notes

- Firebase config contains public API keys (normal for client-side Firebase)
- Images stored in `/public/` directory (wire.png, mail.png, link.png)
- Admin uploaded images stored in `/public/uploads/`
- Donation functionality integrates with Hack Club Bank (hcb.hackclub.com)
- Uses Next.js Image component for optimized image loading
- MongoDB connection string and admin credentials in .env.local
- **Data Freshness**: Content updates are immediately visible due to comprehensive cache-busting