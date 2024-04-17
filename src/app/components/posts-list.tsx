import { PostCard } from "./post-card";
import { type Post } from "../types/posts";

export function PostsList({ posts }: { posts: Post[] | null }) {
    return (
        <>
            {
                posts?.map(post => {
                    const {
                        id,
                        user,
                        content
                    } = post

                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl,
                    } = user || {
                        user_name: '',
                        name: '',
                        avatar_url: '',
                    };

                    return (
                        user ? (
                            <PostCard
                                content={content}
                                key={id}
                                userName={userName}
                                userFullName={userFullName}
                                avatarUrl={avatarUrl}
                            />
                        ) : (
                            <p>This post is no longer available because the user has been deleted.</p>
                        )
                    )
                })
            }
        </>
    )
}