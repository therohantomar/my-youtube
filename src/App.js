import "./App.css";
import VideoBody from "./components/VideoBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosContainer from "./components/VideosContainer";
import Watchpage from "./components/Watchpage";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <VideoBody />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path:"results",
        element:<SearchResults/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
