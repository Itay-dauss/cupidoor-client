import GenericHousesList from "../GenericHousesList";
import { PersonalInfoContainer } from "./styles"

const MyProperties = () => {
    return <PersonalInfoContainer>
        <GenericHousesList apartments={[]}/>
    </PersonalInfoContainer>;
}
 
export default MyProperties;