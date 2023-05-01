import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SubscribeForm } from "../src/SubscribeForm/SubscribeForm";

describe("SubscribeForm", () => {
  it("renders the subscribe form", async () => {
    const user = userEvent.setup();
    const mockSubmitTimeString = jest.fn();
    render(<SubscribeForm submitTimeString={mockSubmitTimeString} />);
    // const timeInput = screen.getByLabelText("time-input")
    // await user.type(timeInput, "test")
    // await user.click(screen.getByLabelText("submit-time-input"))
    // expect(timeInput).toHaveValue("test")
    // expect(mockSubmitTimeString).lastCalledWith("test")
  });
});
