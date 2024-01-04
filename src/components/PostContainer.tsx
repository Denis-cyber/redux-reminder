import { postsApi } from "../services/PostService";

const PostContainer = () => {
  const { data: posts } = postsApi.useFetchAllpostsQuery("");

  return <div></div>;
};

export default PostContainer;
