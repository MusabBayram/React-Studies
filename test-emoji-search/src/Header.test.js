import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders without crashing", () => {
    render(<Header/>);
  const header = screen.getByText(/Emoji Search/);
  expect (header).toBeInTheDocument();
});
