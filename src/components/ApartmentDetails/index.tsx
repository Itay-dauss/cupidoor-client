import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apartment } from "../../types/apartment";
import { HOUSES, HOUSE_INIT } from "../../utils/mock";
import { Container, DetailsContainer} from "./styles";


const ApartmentDetails = () => {
    const [apartmentInfo, setApartmentInfo] = useState<Apartment>(HOUSE_INIT);
    const params = useParams();

    useEffect(() => {
        const fetchApartmentData = async (id: number) => {
            const apartmentData: Apartment | undefined = HOUSES.find(house => house.id === id);
            return apartmentData || HOUSE_INIT;
          };
      
        const apartmentId: number = parseInt(params.id || "");
    
        if(apartmentId)
            fetchApartmentData(apartmentId).then(apartment => setApartmentInfo(apartment))
        else
            console.log("error")
    }, [])

    return (  
        <Container>
            <Typography>
                Apartment Details
            </Typography>
            <DetailsContainer>
                
            </DetailsContainer>
        </Container>
    );
}
 
export default ApartmentDetails;