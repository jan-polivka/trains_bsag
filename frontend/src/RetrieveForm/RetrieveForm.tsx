import { Button } from "@mui/material"

export const RetrieveForm = (props: { retrieveTimeString: () => string }): JSX.Element => {
    return (
        <>
            <Button aria-label="retrieve-time-string">Retrieve time string</Button>
        </>
    )
}