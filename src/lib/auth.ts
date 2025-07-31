import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export interface AdminPayload {
  username: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}

export function verifyAdminToken(request: NextRequest): AdminPayload | null {
  try {
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      return null;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as AdminPayload;
    
    if (!payload.isAdmin) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function requireAdmin(handler: (request: NextRequest, ...args: any[]) => Promise<Response>) {
  return async (request: NextRequest, ...args: any[]) => {
    const admin = verifyAdminToken(request);
    
    if (!admin) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return handler(request, ...args);
  };
}