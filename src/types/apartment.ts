import { PaymentsCond } from "./paymentsCond";

export type Apartment = {
    id: number;
    name: string;
    address: string;
    propertyCond: string;
    entryDate: Date;
    floor: number;
    squareMeter: number;
    balcony: number;
    match: number;
    parkings: number;
    rooms: number;
    paymentsCond: PaymentsCond
}