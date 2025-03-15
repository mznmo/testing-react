import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("testing hello world text", () => {
    render(<Greeting />); //arrange

    //act - nothing

    //assert
    const helloWorldElement = screen.getByText("hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument(); //expectation
  });

  test("testing text when button not clicked", () => {
    render(<Greeting />); //arrange

    //act - nothing

    //assert
    const helloWorldElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument(); //expectation
  });

  test("testing new text when button is clicked", () => {
    render(<Greeting />); //arrange

    //act
    const button = screen.getByText("Change text");
    button.click();

    //assert
    const newTextElement = screen.getByText("New text");
    expect(newTextElement).toBeInTheDocument(); //expectation
  });

  test("does not render good to see you if button was clicked", () => {
    render(<Greeting />);

    //act
    const button = screen.getByText("Change text");
    button.click();

    //assert
    const newTextElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(newTextElement).toBeNull(); //expectation
  });
});
