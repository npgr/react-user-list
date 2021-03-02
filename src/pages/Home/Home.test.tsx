import React from "react";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Home from "./Home";
import userListData from "../../models/fixtures/UserList";
import * as actions from "../../store/users/users.actions";

const getUsersSpy = jest.spyOn(actions, "getUsers");

describe("Home page", () => {
  const INITIAL_STATE = {
    users: {
      userList: userListData,
    },
  };

  const mockStore = configureStore([thunk]);
  const store = mockStore(INITIAL_STATE);

  const renderHomePage = () =>
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

  test("it should renders home page title", () => {
    const wrapper = renderHomePage();
    const title = wrapper.getByRole("heading", {
      name: /User List/i,
    });

    expect(title).toBeInTheDocument();
  });

  test("it should dispatch 'get users' on load page", () => {
    renderHomePage();

    expect(getUsersSpy).toBeCalledWith();
  });

  test("it should render as many user cards as user list data on store", () => {
    const wrapper = renderHomePage();

    const cards = wrapper.getAllByTestId("user-card");

    expect(cards.length).toEqual(userListData.length);
  });
});
