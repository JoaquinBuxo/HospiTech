import { vi, describe, test } from 'vitest';
import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AuthProp } from '../Typescript-Interfaces/Types';
import Equipments from '../pages/Equipments/Equipments';

vi.mock('@auth0/auth0-react');
let mockUseAuth0:()=>void;
const renderComponent = (authResponse:AuthProp) => {
  mockUseAuth0 = vi.fn().mockReturnValue(authResponse);
  const result = render(<Equipments />);
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
    expect(mockUseAuth0).toHaveBeenCalled();
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
