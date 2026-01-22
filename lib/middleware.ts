import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // If logged in, prevent access to login/signup pages
    if (token && (pathname === '/auth/signin' || pathname === '/auth/signup')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Protect dashboard and role-based routes
    if (pathname.startsWith('/dashboard') && !token) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    if (pathname.startsWith('/doctor') && token?.role !== 'doctor') {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    if (pathname.startsWith('/patient') && token?.role !== 'patient') {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        // Allow access to auth pages without token
        if (pathname === '/auth/signin' || pathname === '/auth/signup') return true;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ['/dashboard/:path*', '/doctor/:path*', '/patient/:path*', '/auth/signin', '/auth/signup'] };