import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
test("should render component", () => {
  render(<App />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
});
