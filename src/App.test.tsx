import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("as a user, I want to see the first step of the wizard", () => {
  it("should render Step 1 on load", () => {
    render(<App />);
    const step1Txt = screen.getByText("Step 1", { exact: true });
    const step2Txt = screen.queryByText("Step 2", { exact: true });
    expect(step1Txt).toBeInTheDocument();
    expect(step2Txt).not.toBeInTheDocument();
  });

  it("should render no progress on load", () => {
    render(<App />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveStyle("width: 0%");
  });
});

describe("as a user, I want to step through the wizard", () => {
  it("should render wizard navigation buttons on load", () => {
    render(<App />);
    const previous = screen.getByText("Back");
    const next = screen.getByText("Next");

    expect(previous).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });
  it("should render Step 2 on click next", () => {
    render(<App />);
    const next = screen.getByText("Next");

    fireEvent.click(next);
    const step1Txt = screen.queryByText("Step 1", { exact: true });
    const step2Txt = screen.getByText("Step 2", { exact: true });
    const progress = screen.getByRole("progressbar");

    expect(step1Txt).not.toBeInTheDocument();
    expect(step2Txt).toBeInTheDocument();
    expect(progress).toHaveStyle("width: 100%");
  });
  it("should render Step 1 on click back", () => {
    render(<App />);

    const next = screen.getByText("Next");
    fireEvent.click(next);

    let step1Txt = screen.queryByText("Step 1", { exact: true });
    let step2Txt = screen.queryByText("Step 2", { exact: true });

    expect(step1Txt).not.toBeInTheDocument();
    expect(step2Txt).toBeInTheDocument();

    const previous = screen.getByText("Back");
    fireEvent.click(previous);

    step1Txt = screen.queryByText("Step 1", { exact: true });
    step2Txt = screen.queryByText("Step 2", { exact: true });
    expect(step1Txt).toBeInTheDocument();
    expect(step2Txt).not.toBeInTheDocument();
  });
  it("should render Step 1 on click back when on first step", () => {
    render(<App />);

    const step1Txt = screen.getByText("Step 1", { exact: true });
    const step2Txt = screen.queryByText("Step 2", { exact: true });
    const progress = screen.getByRole("progressbar");

    expect(progress).toHaveStyle("width: 0%");
    expect(step1Txt).toBeInTheDocument();
    expect(step2Txt).not.toBeInTheDocument();

    const previous = screen.getByText("Back");
    fireEvent.click(previous);

    expect(progress).toHaveStyle("width: 0%");
    expect(step1Txt).toBeInTheDocument();
    expect(step2Txt).not.toBeInTheDocument();
  });
  it("should render Step 2 on click next when on last step", () => {
    render(<App />);

    const next = screen.getByText("Next");
    fireEvent.click(next);

    const step1Txt = screen.queryByText("Step 1", { exact: true });
    const step2Txt = screen.queryByText("Step 2", { exact: true });
    const progress = screen.getByRole("progressbar");

    expect(progress).toHaveStyle("width: 100%");
    expect(step1Txt).not.toBeInTheDocument();
    expect(step2Txt).toBeInTheDocument();

    fireEvent.click(next);

    expect(progress).toHaveStyle("width: 100%");
    expect(step1Txt).not.toBeInTheDocument();
    expect(step2Txt).toBeInTheDocument();
  });
});
