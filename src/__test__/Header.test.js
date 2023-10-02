import {  render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import store from "../utils/store";
import App from "../App";

test("sidebar loading on browser", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const sidebar = screen.queryByTestId("sidebar_Opened");
  expect(sidebar).toBeInTheDocument();
});

test("menu bar loading on navbar",()=>{
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
   const  menu=screen.getByTestId("toggle")
  expect(menu).toBeInTheDocument()
})
