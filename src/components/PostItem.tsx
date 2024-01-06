import { FC } from "react";
import { postsApi } from "../services/PostService";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const [updatePost] = postsApi.useUpdatePostMutation();
  const [deletePost] = postsApi.useDeletePostMutation();

  return (
    <div
      className='post'
      onClick={() => {
        const title = prompt() || "";
        updatePost({ ...post, title });
      }}
    >
      {post.id}. {post.title}
      <button
        onClick={(event) => {
          event.stopPropagation();
          deletePost(post.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PostItem;
