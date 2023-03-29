import { Routes, Route } from "react-router-dom";
import MainFeed from "../MainFeed";
import { Container, ContentSection } from "./styles";
import Navbar from "../Navbar";
import QuestionsStepper from "../QuestionsStepper";
import GenericHousesList from "../GenericHousesList";
import { useState } from "react";

const App = () => {
  const [houses, setHouses] = useState<any[]>([]);

  return (
    <Container>
      <Navbar />
      <ContentSection>
      <Routes>
        <Route path={`/`} element={<MainFeed />}></Route>
        <Route path={`/questions`} element={<QuestionsStepper displayHouses={(apartments : any[]) => setHouses(apartments)} />}></Route>
        <Route path={`/questions/houses`} element={<GenericHousesList apartments={houses}/>}></Route>
      </Routes>

        {/* <MainFeed /> */}
        {/* <QuestionsStepper /> */}
      </ContentSection>
    </Container>
  );
};

export default App;
