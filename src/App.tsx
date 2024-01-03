import { userSlice } from "./store/reducers/UserSlice";
import { useAppSelector, useAppDispatch } from "./hooks/redux";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);

  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
    </div>
  );
}

export default App;
