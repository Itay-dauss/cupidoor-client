import GenericHousesList from "../GenericHousesList";
import { PersonalInfoContainer } from "./styles"

const LikedApartments = () => {
    return <PersonalInfoContainer>
        <GenericHousesList apartments={[]}/>
    </PersonalInfoContainer>;
}
 
export default LikedApartments;