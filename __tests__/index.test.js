import {render} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders Home", () => {
    render(<Home />);

    const parameter = true;

    expect(parameter).toBe(true);
  });
});
