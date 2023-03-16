import { vi, describe, test } from 'vitest';
import { render,screen } from '@testing-library/react';
import { AuthProp } from '../Typescript-Interfaces/Types';
import * as ShallowRenderer from "react-test-renderer/shallow";
import Equipments from '../pages/Equipments/Equipments';
import * as auth0  from "@auth0/auth0-react";

vi.mock('@auth0/auth0-react');
let mockUseAuth0: () => AuthProp;
const renderComponent = (authResponse: AuthProp) => {
 // @ts-ignore
  auth0.useAuth0 = vi.fn().mockReturnValue(authResponse);
  // console.log(auth);
  // const container = render(<Equipments Auth={auth} />);
  // return container;
  if (authResponse) {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<Equipments/>);
    const result = renderer.getRenderOutput();
    console.log(result);
    return result;
  }
};


describe("Check authentication", () => {
  const loginWithRedirect = vi.fn();

  const loggedIn = {
    isAuthenticated: true,
    isLoading: true,
    loginWithRedirect,
  };
  let result = renderComponent(loggedIn)!;
  test("Authenticated called", () => {
    expect(result.type).toBe("div");
    expect(auth0.useAuth0).toHaveBeenCalled();
  });

  test("Logged in", () => {
    expect(result.props.className).toBe("login-loading");
  });

  test("Logged out", () => {
    const loggedOut = {
      isAuthenticated: false,
      isLoading: false,
      loginWithRedirect,
    };
    result = renderComponent(loggedOut)!;

    expect(result.props.className).toBe("logout-container");
  });
});
