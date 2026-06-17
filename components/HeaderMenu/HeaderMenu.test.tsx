import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderMenu from "./HeaderMenu";
import { renderWithProviders } from "@/utils/testUtils/test-utils";
import React from "react";
import { HeaderMenuProps } from "@/types/common";

describe("HeaderMenu Component", () => {
  const mockProps: HeaderMenuProps = {
    onLogout: jest.fn(),
    onClose: jest.fn(),
    springStyle: {},
    menuRef: React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>,
    t: (key: string) => key,
  };

  test("renders menu items correctly", () => {
    renderWithProviders(<HeaderMenu {...mockProps} />);

    expect(screen.getByText("header.profile")).toBeInTheDocument();
    expect(screen.getByText("header.logout")).toBeInTheDocument();
  });

  test("calls onClose when clicking profile link", async () => {
    const user = userEvent.setup();
    renderWithProviders(<HeaderMenu {...mockProps} />);

    const profileLink = screen.getByText("header.profile");
    await user.click(profileLink);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onLogout and onClose when clicking logout button", async () => {
    const user = userEvent.setup();
    renderWithProviders(<HeaderMenu {...mockProps} />);

    const logoutButton = screen.getByText("header.logout");
    await user.click(logoutButton);

    expect(mockProps.onLogout).toHaveBeenCalled();
    expect(mockProps.onClose).toHaveBeenCalled();
  });
});
