import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    if (pathname.startsWith('/doctor') && token?.role !== 'doctor') {
      return new Response('Forbidden', { status: 403 });
    }
    if (pathname.startsWith('/patient') && token?.role !== 'patient') {
      return new Response('Forbidden', { status: 403 });
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ['/dashboard', '/doctor/:path*', '/patient/:path*'] };