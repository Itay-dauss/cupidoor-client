import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: white;
  margin: 15px;
`;

export const DetailsContainer = styled.div`
  border: 1px solid lightgray;
  height: 100%;
  border-radius: 8px;
  margin: 5px 0;
`;

export const ElementsLineOne = styled.div`
  display: flex;
  flex-direction: row;
  height: 33%;
`;

export const DryDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 25px;
    align-items: flex-start;
    justify-content: space-around;
`;

export const ImageContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: -webkit-fill-available;
  border-radius: 8px;
`;

export const NumbersSection = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`;

export const NumbersPropery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  justify-content: space-between;
`;

export const RentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
`;