import { Button, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { useState } from "react"

export const SubscribeForm = (props: { submitTimeString: (timeString: string) => void }): JSX.Element => {

    const [timeString, setTimeString] = useState("")

    return (
        <Grid2 container>
            <Grid2 xs={"auto"}>
                Enter time in the format HHMM:
            </Grid2>
            <Grid2 xs={"auto"}>
                {/* <TextField data-testid="time-input" variant="outlined" value={timeString} onInput={(data) => console.log(data)} onChange={(data) => setTimeString(data.target.value)} /> */}
                <TextField data-testid="time-input" variant="outlined" value={timeString} onInput={(data) => console.log(data)} onChange={(data) => setTimeString(data.target.value)} />
            </Grid2>
            <Grid2 xs={12}>
                <Button data-testid="submit-button" onClick={() => props.submitTimeString(timeString)}>Submit</Button>
            </Grid2>
        </Grid2>
    )
}