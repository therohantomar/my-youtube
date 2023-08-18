import "./App.css";
import Header from "./components/Header";
import VideoBody from "./components/VideoBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosContainer from "./components/VideosContainer";
import Watchpage from "./components/Watchpage";

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
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
        {/* header
     nav
     body 
       buttonlist
       videocontainer
          -shimmer
          -videocard */}
      </Provider>
    </>
  );
}

export default App;
