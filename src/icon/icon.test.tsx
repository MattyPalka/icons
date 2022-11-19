import { render, screen } from "@testing-library/react";
import { Icon, IconName } from "./icon";
import { icons } from "./icons";
import { axe, toHaveNoViolations } from "jest-axe";

describe("<Icon />", () => {
  expect.extend(toHaveNoViolations);
  it.each(Object.keys(icons) as IconName[])(
    "renders correct %s icon without violations",
    async (iconName: IconName) => {
      const { container } = render(<Icon icon={iconName} />);
      await screen.findByText(/svg/i);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
      expect(screen.getByRole("img")).toHaveAttribute("aria-label", iconName);
    }
  );
});
