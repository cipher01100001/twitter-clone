import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { AuthButtomServer } from "./components/auth-buttom-server";
import { redirect } from "next/navigation";
import { PostsList } from "./components/posts-list";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data: { session } } = await supabase.auth.getSession();
  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*, user: users(name, avatar_url, user_name)');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section className="max-w-[600px] mx-auto border-l border-r border-white/30 min-h-screen">
        <AuthButtomServer />
        <PostsList posts={posts} />
      </section>
    </main>
  );
}