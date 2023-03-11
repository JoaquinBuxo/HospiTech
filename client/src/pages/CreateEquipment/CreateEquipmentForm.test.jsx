import React, { Component } from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {
  screen,
  render,
  fireEvent,
  getByLabelText,
  getByRole,
} from "@testing-library/react";
import { vi,describe, expect, test, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import CreateEquipmentForm from "./CreateEquipmentForm";



describe("create equipment form test", () => {


  test("unable to submit form if model is not provided", async () => {
    render(<CreateEquipmentForm/>)
    const element = screen.getByTestId("addEquipment");

    console.log(element);
  });

});
