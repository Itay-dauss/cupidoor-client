import MainFeed from "../MainFeed";
import { Container, ContentSection } from "./styles";
import Navbar from "../Navbar";

const App = () => {
  return (
    <Container>
      <Navbar />
      <ContentSection>
        <MainFeed />
      </ContentSection>
    </Container>
  );
};

export default App;
