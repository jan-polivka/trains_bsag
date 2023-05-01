import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export const SubscribeForm = (props: {
  submitTimeString: (timeString: string) => void;
}): JSX.Element => {
  const [hourString, setHourString] = useState("");
  const [minuteString, setMinuteString] = useState("");

  return (
    <Grid2 container>
      <Grid2 xs={"auto"}>Enter time in the format HHMM:</Grid2>
      <Grid2 xs={"auto"}>
        <TextField
          inputProps={{ "aria-label": "hour-input" }}
          variant="outlined"
          value={hourString}
          onChange={(data) => setHourString(data.target.value)}
        />
      </Grid2>
      <Grid2 xs={"auto"}>
        <TextField
          inputProps={{ "aria-label": "minute-input" }}
          variant="outlined"
          value={minuteString}
          onChange={(data) => setMinuteString(data.target.value)}
        />
      </Grid2>
      <Grid2 xs={12}>
        <Button
          aria-label="submit-time-input"
          // onClick={() => props.submitTimeString(timeString)}
        >
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
};
