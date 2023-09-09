import { Typography } from "@mui/material";
import MembersContainer from "./components/MembersContainer";
import "./app.css"

function App() {
  return (
    <>
      <main>
        <header>
          <Typography
            variant="h1"
            gutterBottom={true}
            sx={{ fontSize: "16px" }}>
            Add members to Front-end development team
          </Typography>
        </header>
        <section>
          <MembersContainer></MembersContainer>
        </section>
      </main>
    </>
  );
}

export default App;
