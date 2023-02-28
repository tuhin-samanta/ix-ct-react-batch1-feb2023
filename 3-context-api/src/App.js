import { Provider } from "./storage";
import Home from "./components/Home";

export default function App(props) {
  return (
    <>
      <Provider>
        <Home />
      </Provider>
    </>
  );
}
