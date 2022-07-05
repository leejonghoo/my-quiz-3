import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("checkbox의 첫 상태는 checked=false", () => {
  render(<App />);

  const checkBox = screen.getByRole("checkbox"); // <-- element 찾는 방법
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox); // <-- fireEvent 사용방법
}); // toBeChecked

test("input textbox는 처음에 비어있어야 한다.", () => {});

test("input text에 글자가 없으면 clear 버튼은 enable 되어야한다", () => {});

test("input text에 글자를 입력하면 clear 버튼은 enable 되어야한다", () => {});

test("clear 버튼이 눌리면 input textbox는 초기화되야한다. ", () => {});
