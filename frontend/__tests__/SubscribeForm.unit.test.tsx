import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SubscribeForm } from "../src/SubscribeForm/SubscribeForm";

describe("SubscribeForm", () => {
  it("renders the subscribe form", async () => {
    const user = userEvent.setup();
    const mockSubmitTimeString = jest.fn();
    render(<SubscribeForm submitTimeString={mockSubmitTimeString} />);
    const hourInput = screen.getByLabelText("hour-input");
    const minuteInput = screen.getByLabelText("minute-input");
    await user.type(hourInput, "11");
    await user.type(minuteInput, "22");
    await user.click(screen.getByLabelText("submit-time-input"));
    expect(hourInput).toHaveValue("11");
    expect(minuteInput).toHaveValue("22");
    const timeObject = { hour: "11", minute: "22" };
    // expect(mockSubmitTimeString).lastCalledWith(timeObject);
  });
});
