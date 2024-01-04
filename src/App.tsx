import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      {isLoading && <h2>Идет загрузка...</h2>}
      {JSON.stringify(users, null, 2)}
      {error && <h2>{error}</h2>}
    </div>
  );
}

export default App;
