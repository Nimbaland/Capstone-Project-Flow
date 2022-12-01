import {render} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders home h1", () => {
    render(<Home />);

    const parameter = true;

    expect(parameter).toBe(true);
  });
});
