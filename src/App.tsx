import { Grid } from "@mui/material";
import AvatarImage from "./component/Card";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} padding={2}>
        <AvatarImage />
      </Grid>
    </div>
  );
}

export default App;
