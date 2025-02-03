import { NextRequest, NextResponse } from "next/server";
import AuthService from "./modules/auth/services/auth-service";

export const config = {
    matcher: '/((?!_next|favicon.ico|public|.*\\..*).*)'
}

const publicPages = [
    '/',
    '/notanfe',
    '/notanfe/suporte',
    '/notanfe/treinamento',
    '/notanfe/login'
]


export async function middleware(req: NextRequest){
    const pathname = req.nextUrl.pathname

    if(publicPages.includes(pathname)){
        return NextResponse.next()
    }

    const session = await AuthService.isSessionValid()

    if(!session){
        const isAPIRoute = pathname.startsWith('/api')

        if(isAPIRoute){
            return NextResponse.json({ message:'Unauthorized' }, { status: 401 })
        }
        return NextResponse.redirect(new URL('/notanfe/login', req.url))
    }

    return NextResponse.next()
}