import { useState, useEffect, useMemo } from "react";
import { Container } from "./styles";
import HouseCard from "../HouseCard";
import Spinner from "../Spinner";
import { Apartment } from "../../types/apartment";

const GenericHousesList = ({ apartments } : {apartments: any}) => {
  const [houses, setHousess] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(apartments) {
      setHousess(apartments);
      setIsLoading(false);  
    }
  }, [apartments]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container className="apis-container">
          {houses.map((house) => {
            return (
              <div key={house.address}>
                <HouseCard houseData={house}/>
              </div>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default GenericHousesList;
