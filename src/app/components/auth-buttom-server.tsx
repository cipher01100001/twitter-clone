import { createRouteHandlerClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthButtomClient } from './auth-buttom-client';

export async function AuthButtomServer() {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    return <AuthButtomClient session={session} />
}