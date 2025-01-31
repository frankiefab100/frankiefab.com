import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect to 404 for specific patterns
  if (request.nextUrl.pathname.startsWith('/api/non-existent')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  // Redirect old URLs to 404
  if (request.nextUrl.pathname.startsWith('/old-')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  // Handle image requests from Strapi
  if (request.nextUrl.pathname.startsWith('/api/images')) {
    const strapiImageUrl = `${process.env.STRAPI_API_URL}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(strapiImageUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Add paths that should be checked by the middleware
    '/api/:path*',
    '/old-:path*',
    '/api/images/:path*',
  ],
}
