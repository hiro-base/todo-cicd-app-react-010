import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("アプリタイトルが表示されている", () => {
    render(<App />);
    expect(screen.getByRole("heading", ""));
  });
});
