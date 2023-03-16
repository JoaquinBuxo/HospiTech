import { vi, describe, test, expect } from 'vitest';
import { AuthProp } from '../Typescript-Interfaces/Types';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import Equipments from '../pages/Equipments/Equipments';
import * as auth0 from '@auth0/auth0-react';
import { mockAuth } from '../mocks/mockdata';

vi.mock('@auth0/auth0-react');
let mockUseAuth0: () => AuthProp;
const renderComponent = (authResponse: AuthProp) => {
  // @ts-ignore
  auth0.useAuth0 = vi.fn().mockReturnValue(authResponse);
  if (authResponse) {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<Equipments />);
    const result = renderer.getRenderOutput();
    return result;
  }
};

describe('Check authentication', () => {
  let result = renderComponent(mockAuth)!;
  test('Authenticated called', () => {
    expect(result.type).toBe('div');
    expect(auth0.useAuth0).toHaveBeenCalled();
  });

  test('Logged in', () => {
    expect(result.props.className).toBe('login-loading');
  });

  test('Logged out', () => {
    mockAuth.isAuthenticated = false;
    mockAuth.isLoading = false;
    result = renderComponent(mockAuth)!;

    expect(result.props.className).toBe('logout-container');
  });
});
