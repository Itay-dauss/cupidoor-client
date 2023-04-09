import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apartment } from "../../types/apartment";
import { HOUSES, HOUSE_INIT } from "../../utils/mock";
import DryDetails from "./DryDetails";
import { Container, DetailsContainer, ElementsLineOne, RentContainer, Image, ImageContainer, DryDetailsContainer } from "./styles";


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
    }, [params.id])

    return ( // TODO: Change last updated mock.
        <Container>
            <Typography variant="h6">
                Apartment Details
            </Typography>
            <DetailsContainer>
                <ElementsLineOne>
                    <ImageContainer>
                        <Image alt="Paella dish" src="https://www.apartments.com/images/default-source/2019-naa/parkline-apartment-in-miami-fla2dc2731-e6f2-4dca-89c5-38245ccacea1.tmb-featuredim.jpg?sfvrsn=55bc41ed_1" />
                    </ImageContainer>
                    <DryDetailsContainer>
                        <DryDetails {...apartmentInfo}/>
                    </DryDetailsContainer>
                    <RentContainer>
                            <Typography variant="h4">
                                {`${apartmentInfo.paymentsCond.rent}₪`}
                            </Typography>
                            <Typography variant="subtitle1">
                                {"Last updated: Today"}
                            </Typography>
                        </RentContainer>
                </ElementsLineOne>
            </DetailsContainer>
        </Container>
    );
}
 
export default ApartmentDetails;