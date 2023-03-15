import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, afterEach, describe, test, expect, vi } from 'vitest';

import { mockEquipment } from '../../mocks/mockdata';

import EquipmentDetailInner from './EquipmentDetailInner';

let windowApiSpy;

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// const mockEquipment = {
//   condition: 'TEST CONDITION',
//   createdAt: '2023-03-11T15:00:10.994Z',
//   description: 'TEST DESCRIPTION',
//   id: 'id',
//   images: ['TEST IMAGE'],
//   lastRevision: '2023-03-06T00:00:00.000Z',
//   model: 'TEST MODEL',
//   ownerId: 'owner_id',
//   repairs: [],
//   serialNumber: 'TEST SERIAL NUMBER',
//   type: 'TEST TYPE',
//   userId: 'user_id',
// };

const mockApiResponse = () => {
  return mockEquipment;
};

let mockApi = async (id) => {
  if (id) {
    await wait(70);
    return {
      ok: true,
      status: 200,
      json: async () => mockApiResponse,
    };
  }
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
    const imageEl = document.querySelector('.image-equipment');
    expect(imageEl.getAttribute('src')).toBe(mockEquipment.images[0]);
  });

  test('Title', () => {
    const element = document.querySelector('.model-equipment');
    expect(element.textContent).toBe(mockEquipment.model);
  });

  test('Type', () => {
    const element = document.querySelector(
      '.type-equipment .item-detail__value'
    );
    expect(element.textContent).toBe(mockEquipment.type);
  });

  test('Condition', () => {
    const element = document.querySelector(
      '.condition-equipment .item-detail__value'
    );
    expect(element.textContent).toBe(mockEquipment.condition);
  });

  test('Description', () => {
    const element = document.querySelector(
      '.description-equipment .item-detail__value'
    );
    expect(element.textContent).toBe(mockEquipment.description);
  });

  test('Serial Number', () => {
    const element = document.querySelector(
      '.serial-number-equipment .item-detail__value'
    );
    expect(element.textContent).toBe(mockEquipment.serialNumber);
  });
});
