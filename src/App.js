import "./App.css";
import VideoBody from "./components/VideoBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosContainer from "./components/VideosContainer";
import Watchpage from "./components/Watchpage";
import SearchResults from "./components/SearchResults";
import Error from "./components/Error";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <VideoBody />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
        errorElement: <Error />,
      },
      {
        path: "watch",
        element: <Watchpage />,
        errorElement: <Error />,
      },
      {
        path: "results",
        element: <SearchResults />,
        errorElement: <Error />,
      },
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
