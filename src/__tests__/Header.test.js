import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import React from "react";

function Header(props) {
  return <h1>hello from the Header!</h1>;
}

export default Header;

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  let element = screen.queryByText("hello from the Header!")
  screen.debug(element);
  expect(element).toBeInTheDocument();
});
