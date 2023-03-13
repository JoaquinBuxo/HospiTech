import { render, screen} from "@testing-library/react";
import { beforeEach, describe, test, expect} from "vitest";
import ItemEquipment from './ItemEquipment'
import {mockEquipment} from '../../mocks/mockdata'


describe("Test Equipment Homepage load", () => {
  beforeEach(async () => {
    render(<ItemEquipment equipment={mockEquipment[0]} />);
  });

  test("image has been displayed", () => {
    const image = screen.getByRole("img", { AltText: /test model 1/i });
    expect(image.getAttribute('src')).toBe(mockEquipment[0].images[0])
  });
  test("model has been displayed", () => {
    const model = screen.getByRole("heading", { text: /test model 1/i });
    expect(model).toBeDefined();
  });
});
