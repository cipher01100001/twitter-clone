import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtom } from "./components/auth-buttom-client";
import { AuthButtomServer } from "./components/auth-buttom-server";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from('posts').select('*');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtomServer />
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  );
}