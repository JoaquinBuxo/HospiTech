import { vi, describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';

import * as auth0 from '@auth0/auth0-react';

import Equipments from '../pages/Equipments/Equipments';

vi.mock('@auth0/auth0-react');

const renderComponent = (authResponse) => {
  auth0.useAuth0 = vi.fn().mockReturnValue(authResponse);

  const renderer = new ShallowRenderer();
  renderer.render(<Equipments />);
  const result = renderer.getRenderOutput();
  return result;
};

describe('Check authentication', () => {
  const loginWithRedirect = vi.fn();

  const loggedIn = {
    isAuthenticated: true,
    isLoading: true,
    loginWithRedirect,
  };
  let result = renderComponent(loggedIn);

  test('Authenticated called', () => {
    expect(result.type).toBe('div');
    expect(auth0.useAuth0).toHaveBeenCalled();
  });

  test('Logged in', () => {
    expect(result.props.className).toBe('login-loading');
  });

  test('Logged out', () => {
    const loggedOut = {
      isAuthenticated: false,
      isLoading: false,
      loginWithRedirect,
    };
    result = renderComponent(loggedOut);

    expect(result.props.className).toBe('logout-container');
  });
});
