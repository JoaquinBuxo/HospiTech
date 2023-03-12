import React, { Component } from "react";
import {
  screen,
  render,
  fireEvent,
} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import CreateEquipmentForm from "./CreateEquipmentForm";
const formsetup = function () {
  const form = render(<CreateEquipmentForm />);
  const model = screen.getByRole("textbox", { name: "Model" });
  const serialNumber = screen.getByRole("textbox", { name: "Serial Number" });
  const type = screen.getByRole("textbox", { name: "Type" });
  const condition = screen.getByRole("textbox", { name: "Condition" });
  const description = screen.getByRole("textbox", { name: "Description" });
  const date = screen.getByLabelText(/last revision/i);
  const button = screen.getByTestId("addEquipment");
  return {
    model,
    serialNumber,
    type,
    condition,
    description,
    button,
    date,
    form,
  };
};

describe("create equipment form test", () => {
  test("Correctly displaying the title", async () => {
    render(<CreateEquipmentForm />);
    expect(screen.getByText(/add new equipment/i)).toBeDefined();
  });

  test("Input to model field is correctly rendering", () => {
    const { model } = formsetup();
    fireEvent.change(model, { target: { value: "test" } });
    expect(model.value).toBe("test");
  });

  test("Should not be able to submit empty form", () => {
    const { button, model } = formsetup();
    fireEvent.click(button);
    expect(model.value).toBe("");
  });
});
