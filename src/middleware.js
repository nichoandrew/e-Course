import { NextResponse } from 'next/server'


export function middleware(request) {
    const token = request.cookies.has('token');
    const role = request.cookies.get('role')
    if (token) {
        if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register') || request.nextUrl.pathname.startsWith('/forget-password') || request.nextUrl.pathname.startsWith('/reset-password')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
    if (!token) {
        if (request.nextUrl.pathname.startsWith('/laman-checkout') || request.nextUrl.pathname.startsWith('/user') ){
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}