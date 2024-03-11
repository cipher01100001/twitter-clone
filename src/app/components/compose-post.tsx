import { Avatar } from '@nextui-org/react';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { ComposePostTextarea } from './compose-post-textarea';
import { ComposePostButton } from './compose-post-button';

export function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string,
}) {

    const addPost = async (formData: FormData) => {
        'use server'

        const content = formData.get('content');

        if (content === null || content === "") return;

        const supabase = createServerActionClient({ cookies })

        const { data: { user } } = await supabase.auth.getUser();
        if (user === null) return;

        await supabase.from('posts').insert({ content, user_id: user.id });

        revalidatePath('/');
    }

    return (
        <form action={addPost} className='flex flex-row p-3 border-b border-white/20'>
            <Avatar className='mr-2' isBordered radius="full" size="md" src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <ComposePostTextarea />
                <ComposePostButton />
            </div>
        </form>
    )
}