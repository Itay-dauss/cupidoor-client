import MainFeed from "../MainFeed";
import { Container, ContentSection } from "./styles";
import Navbar from "../Navbar";
import QuestionsStepper from "../QuestionsStepper";

const App = () => {
  return (
    <Container>
      <Navbar />
      <ContentSection>
        {/* <MainFeed /> */}
        <QuestionsStepper />
      </ContentSection>
    </Container>
  );
};

export default App;
