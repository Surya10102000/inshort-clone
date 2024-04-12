import { Box , styled } from "@mui/material";
// components
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Article from "./components/Article";

const Container = styled(Box)`
  width: 60%;
  margin : 40px auto 0 auto;
`

const App = () => {
  return (
    <>
      <Box>
        <Header />
        <Container>
          <InfoHeader />
          <Article />
        </Container>
      </Box>
    </>
  );
};

export default App;
