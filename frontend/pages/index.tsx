import Grid2 from "@mui/material/Unstable_Grid2"
import { SubscribeForm } from "../src/SubscribeForm"

const homePage = (): any => {
    return (
        <Grid2 container>
            <Grid2 xs={12}>
                Hello world!
            </Grid2>
            <Grid2 xs={"auto"}>
                <SubscribeForm />
            </Grid2>
        </Grid2>
    )
}

export default homePage