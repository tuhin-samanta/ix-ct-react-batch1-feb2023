import { useContext } from "react";
import store from "../storage";

export default function Home() {
  const { state, dispatch } = useContext(store);
  return (
    <>
      {state.user.name}
      <div>
        <h2>FoodPlaza</h2>
      </div>
    </>
  );
}
