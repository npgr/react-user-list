import React from "react";
import { render } from "@testing-library/react";
import UserForm from "./UserForm";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe("UserForm component", () => {
  const MOCK_USER_DATA = {
    id: 10,
    first_name: "jhon",
    last_name: "Doe",
    email: "the@email.com",
    avatar: "the avatar",
  };

  const renderUserForm = () => render(<UserForm user={MOCK_USER_DATA} />);

  test("it should render a field with the user first name value", () => {
    const wrapper = renderUserForm();
    const firstName = wrapper.getByPlaceholderText(/First Name/i);

    expect(firstName.value).toEqual(MOCK_USER_DATA.first_name);
  });

  test("it should render a field with the user last name value", () => {
    const wrapper = renderUserForm();
    const lastName = wrapper.getByPlaceholderText(/Last Name/i);

    expect(lastName.value).toEqual(MOCK_USER_DATA.last_name);
  });
});
