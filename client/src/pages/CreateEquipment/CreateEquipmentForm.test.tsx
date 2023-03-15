import React, { Component } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import CreateEquipmentForm from './CreateEquipmentForm';
import userEvent from '@testing-library/user-event';
import * as mocks from '../../mocks/mockdata';

const userEmail = mocks.mockUser[0].email;

const formsetup = function () {
  const form = render(<CreateEquipmentForm email={userEmail} />);
  const model: HTMLInputElement = screen.getByRole('textbox', {
    name: 'Model',
  });
  const serialNumber: HTMLInputElement = screen.getByRole('textbox', {
    name: 'Serial Number',
  });
  const type: HTMLInputElement = screen.getByRole('textbox', { name: 'Type' });
  const condition = screen.getByRole('textbox', { name: 'Condition' });
  const description = screen.getByRole('textbox', { name: 'Description' });
  const date = screen.getByLabelText(/last revision/i);
  const button = screen.getByTestId('addEquipment');
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

describe('create equipment form test', () => {
  test('Correctly displaying the title', async () => {
    render(<CreateEquipmentForm email={userEmail} />);
    expect(screen.getByText(/add new equipment/i)).toBeDefined();
  });

  test('Input to model field is correctly rendering', () => {
    const { model } = formsetup();
    fireEvent.change(model, { target: { value: 'test' } });
    expect(model.value).toBe('test');
  });
  test('Input to serialNumber field is correctly rendering', () => {
    const { serialNumber } = formsetup();
    fireEvent.change(serialNumber, { target: { value: '123' } });
    expect(serialNumber.value).toBe('123');
  });
  test('Input type field is correctly rendering', () => {
    const { type } = formsetup();
    fireEvent.change(type, { target: { value: 'testtype' } });
    expect(type.value).toBe('testtype');
  });

  test('Should not be able to submit empty form', () => {
    const { button, model } = formsetup();
    fireEvent.click(button);
    expect(model.value).toBe('');
  });
});
