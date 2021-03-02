import React from "react";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Header from "./components/Header";

describe("Home Page", () => {
  let wrapper: ShallowWrapper;

  const INITIAL_STATE = {
    auth: {
      initialized: true,
    },
  };

  const mockStore = configureStore([thunk]);
  const store = mockStore(INITIAL_STATE);

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should render a Header component", () => {
    const headerElement = wrapper.find(Header);
    expect(headerElement.exists()).toBeTruthy();
  });
});
