import { Button } from "@mui/material";
import { useState } from "react";

export const RetrieveForm = (props: {
  retrieveTimeString: () => Promise<string>;
}): JSX.Element => {
  const [timeString, setTimeString] = useState("");

  return (
    <>
      <label aria-label="retrieved-time-string">{timeString}</label>
      <br />
      <Button
        aria-label="retrieve-time-string"
        onClick={async () => {
          setTimeString(await props.retrieveTimeString());
        }}
      >
        Retrieve time string
      </Button>
    </>
  );
};
