import { FC } from "react";
import PostItem from "./PostItem";
import { postsApi } from "../services/PostService";

const PostContainer2: FC = () => {
  const { data: posts, error, isLoading } = postsApi.useFetchAllpostsQuery(100);

  return (
    <div>
      <div className='post__list'>
        {isLoading && <h2>Идет загрузка...</h2>}
        {error && <h2>Произошла ошибка при загрузке</h2>}
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer2;
