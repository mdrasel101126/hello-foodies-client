import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./components/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
