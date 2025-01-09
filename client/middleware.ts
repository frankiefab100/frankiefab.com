// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Example: Redirect to 404 for specific patterns
//   if (request.nextUrl.pathname.startsWith('/api/non-existent')) {
//     return NextResponse.rewrite(new URL('/not-found', request.url));
//   }

//   // Example: Redirect old URLs to 404
//   if (request.nextUrl.pathname.startsWith('/old-')) {
//     return NextResponse.rewrite(new URL('/not-found', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     // Add paths that should be checked by the middleware
//     '/api/:path*',
//     '/old-:path*'
//   ],
// }

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Redirect to 404 for specific patterns
  if (request.nextUrl.pathname.startsWith('/api/non-existent')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  // Example: Redirect old URLs to 404
  if (request.nextUrl.pathname.startsWith('/old-')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  // Example: Handle image requests from Strapi
  if (request.nextUrl.pathname.startsWith('/api/images')) {
    const strapiImageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(strapiImageUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Add paths that should be checked by the middleware
    '/api/:path*',
    '/old-:path*',
    '/api/images/:path*', // Match image requests from Strapi
  ],
}

// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   {
//       name: 'strapi::cors',
//       config: {
//           origin: ['*'], // Adjust this to your needs
//       },
//   },
//   // other middlewares...
// ];

// {
//   name: "strapi::security",
//   config: {
//     contentSecurityPolicy: {
//       useDefaults: true,
//       directives: {
//         "connect-src": ["'self'", "http:", "https:", "*"],
//         "img-src": ["'self'", "data:", "blob:", "*"],
//         "media-src": ["'self'", "data:", "blob:", "*"],
//         upgradeInsecureRequests: null,
//       },
//     },
//   },
// },