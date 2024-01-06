import { FC, useState } from "react";
import PostItem from "./PostItem";
import { postsApi } from "../services/PostService";
import { IPost } from "../models/IPost";

const PostContainer: FC = () => {
  const [limit] = useState<number>(100);
  const { data: posts, error, isLoading } = postsApi.useFetchAllpostsQuery(limit);
  const [createPost] = postsApi.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({
      title,
      body: title,
    } as IPost);
  };

  return (
    <div>
      <div className='post__list'>
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h2>Идет загрузка...</h2>}
        {error && <h2>Произошла ошибка при загрузке</h2>}
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
