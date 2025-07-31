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
- **Styling**: Consistent use of Tailwind classes with custom red theme color
- **Responsive**: Mobile-responsive design with Tailwind breakpoints

## Important Notes

- Firebase config contains public API keys (normal for client-side Firebase)
- Images stored in `/public/` directory (wire.png, mail.png, link.png)
- Donation functionality integrates with Hack Club Bank (hcb.hackclub.com)
- Uses Next.js Image component for optimized image loading