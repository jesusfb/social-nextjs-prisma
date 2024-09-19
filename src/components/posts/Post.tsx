import React from 'react'
import { PostData } from '@/lib/types';
import Link from 'next/link';
import UserAvatar from '../UserAvatar';
import { formatRelativeDate } from '@/lib/utils';

interface PostProps {
    post: PostData;
}



const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <article className='rounded-2xl bg-card space-y-3 shadow-sm p-5'>
            <div className='flex flex-wrap gap-3'>
                <Link href={`/users/${post.user.username}`}>
                    <UserAvatar avatarUrl={post.user.avatarUrl} />
                </Link>
                <div>
                    <Link
                        href={`/users/${post.user.username}`}
                        className='block font-medium hover:underline'
                    >
                        {post.user.displayName}
                    </Link>
                    <Link
                        href={`/posts/${post.id}`}
                        className='block text-sm text-muted-foreground hover:underline'
                    >
                        {formatRelativeDate(post.createdAt)}
                    </Link>
                </div>
            </div>
            <div className='whitespace-pre-line break-words'>{post.content}</div>
        </article>
    )
}

export default Post;
