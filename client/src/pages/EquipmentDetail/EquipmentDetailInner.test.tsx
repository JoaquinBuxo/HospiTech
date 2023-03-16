import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, afterEach, describe, test, expect, vi } from 'vitest';

import EquipmentDetailInner from './EquipmentDetailInner';

let windowApiSpy;

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

const mockEquipment = {
  condition: 'TEST CONDITION',
  createdAt: '2023-03-11T15:00:10.994Z',
  description: 'TEST DESCRIPTION',
  id: 'id',
  images: ['TEST IMAGE'],
  lastRevision: '2023-03-06T00:00:00.000Z',
  model: 'TEST MODEL',
  ownerId: 'owner_id',
  repairs: [],
  serialNumber: 'TEST SERIAL NUMBER',
  type: 'TEST TYPE',
  userId: 'user_id',
};

const mockApiResponse = () => {
  return mockEquipment;
};

let mockApi = async (): Promise<any> => {
  await wait(70);
  return {
    ok: true,
    status: 200,
    json: async () => mockApiResponse,
  };
};

describe('Test Equipment load', () => {
  beforeEach(async () => {
    windowApiSpy = vi.spyOn(window, 'fetch').mockImplementation(mockApi);
    render(<EquipmentDetailInner />);

    expect(windowApiSpy).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByText(/TEST TYPE/i));
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('Image', () => {
    const elementSelector = '.image-equipment';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.getAttribute('src')).toBe(mockEquipment.images[0]);
    } else throw Error(`${elementSelector} not found`);
  });

  test('Title', () => {
    const elementSelector = '.model-equipment';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.textContent).toBe(mockEquipment.model);
    } else throw Error(`${elementSelector} not found`);
  });

  test('Type', () => {
    const elementSelector = '.type-equipment .item-detail__value';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.textContent).toBe(mockEquipment.type);
    } else throw Error(`${elementSelector} not found`);
  });

  test('Condition', () => {
    const elementSelector = '.condition-equipment .item-detail__value';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.textContent).toBe(mockEquipment.condition);
    } else throw Error(`${elementSelector} not found`);
  });

  test('Description', () => {
    const elementSelector = '.description-equipment .item-detail__value';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.textContent).toBe(mockEquipment.description);
    } else throw Error(`${elementSelector} not found`);
  });

  test('Serial Number', () => {
    const elementSelector = '.serial-number-equipment .item-detail__value';
    const element = document.querySelector(elementSelector);
    if (element) {
      expect(element.textContent).toBe(mockEquipment.serialNumber);
    } else throw Error(`${elementSelector} not found`);
  });
});
