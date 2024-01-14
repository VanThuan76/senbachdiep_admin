import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { APP_SAVE_KEY } from './shared/constants/main';

export default function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get(APP_SAVE_KEY.TOKEN_KEY);
    console.log(token?.value);
    if (token && token.value !== '') {
      return NextResponse.next({});
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (e) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [],
};
