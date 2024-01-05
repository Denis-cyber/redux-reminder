import { FC, useState } from "react";
import PostItem from "./PostItem";
import { postsApi } from "../services/PostService";

const PostContainer: FC = () => {
  const [limit] = useState<number>(10);
  const { data: posts, error, isLoading } = postsApi.useFetchAllpostsQuery(limit);

  return (
    <div>
      <div className='post__list'>
        {/* <button onClick={() => refetch()}>REFETCH</button> */}
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
