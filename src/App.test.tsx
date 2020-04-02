import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Header from "./components/Header/Header.component";

describe("Home Page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Header component", () => {
    const headerElement = wrapper.find(Header);
    expect(headerElement.exists()).toBeTruthy();
  });
});
