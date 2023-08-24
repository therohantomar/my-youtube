import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import App from "../App";

test("header loading on browser", async() => {
  render(<App />);
  const menu = screen.getByTestId("toggle");
  fireEvent.click(menu);

  await waitFor(()=>{
    const sidebar=screen.getByTestId("sidebarOpened")
    expect(sidebar).toBeInTheDocument()
  })
 
});
