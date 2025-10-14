import { describe, expect, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("アプリタイトルが表示されている", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Todoアプリ!" })
    ).toBeInTheDocument();
  });

  test("TODOを追加することができる", () => {
    render(<App />);
    const input = screen.getByRole("textbox", { name: "新しいタスクを入力" });
    const addButton = screen.getByRole("button", { name: "追加" });

    fireEvent.change(input, { target: { value: "テストタスク" } });
    fireEvent.click(addButton);
    const list = screen.getByRole("list");
    expect(within(list).getByText("テストタスク")).toBeInTheDocument();
  });
});
