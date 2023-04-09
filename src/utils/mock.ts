import { Apartment } from "../types/apartment";
import { randomDate, randomPaymentCond } from "./random";
import { PROPERTY_CONDITIONS } from "./properyConditions";
  
export const HOUSES: Apartment[] = [
{id: 1, name: 'Avi', address: 'Tel Aviv, George Wise 2' , propertyCond: PROPERTY_CONDITIONS.NEW ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 2, squareMeter: 60, balcony: 1, parkings: 0, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 2, name: 'Yehuda', address: 'Jerusalem, Gooday 32' , propertyCond: PROPERTY_CONDITIONS.NEW_FROM_A_CONTRACTOR ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 5, squareMeter: 60, balcony: 1, parkings: 1, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 3, name: 'Afik', address: 'Rishon, Yordei hasira 4' , propertyCond: PROPERTY_CONDITIONS.RENOVATED ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 1, squareMeter: 60, balcony: 1, parkings: 1, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 4, name: 'Omer', address: 'Maccabbim-Reut, Meshushim 666' , propertyCond: PROPERTY_CONDITIONS.RENOVATION_IS_NEEDED ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 0, squareMeter: 60, balcony: 1, parkings: 3, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 5, name: 'Itay', address: 'Tivon, Pashus 99' , propertyCond: PROPERTY_CONDITIONS.NEW ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 1, squareMeter: 60, balcony: 1, parkings: 1,match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 6, name: 'Amnon', address: 'Hod hasharon, Tsharnichovsky 11' , propertyCond: PROPERTY_CONDITIONS.NEW ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 2, squareMeter: 60, balcony: 1, parkings: 0, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 7, name: 'Benji', address: 'Neverland, Chip 55' , propertyCond: PROPERTY_CONDITIONS.RENOVATED ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 1, squareMeter: 60, balcony: 1, parkings: 3, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 8, name: 'Dibo', address: 'Eilat, Hovevei zion 34' , propertyCond: PROPERTY_CONDITIONS.NEW ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 0, squareMeter: 60, balcony: 1, parkings: 1,match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 9, name: 'Lori', address: 'Holon, Matityahu 12' , propertyCond: PROPERTY_CONDITIONS.NEW_FROM_A_CONTRACTOR ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 3, squareMeter: 60, balcony: 1, parkings: 0, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 10, name: 'Chief', address: 'Modiin, Lev hair 10' , propertyCond: PROPERTY_CONDITIONS.NEW ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 2, squareMeter: 60, balcony: 1, parkings: 2, match: 95, rooms: 3, paymentsCond: randomPaymentCond()},
{id: 11, name: 'Fitz', address: 'Dimona, Lilach 92' , propertyCond: PROPERTY_CONDITIONS.PRESERVED ,entryDate: randomDate(new Date(2012, 0, 1), new Date()), floor: 4, squareMeter: 60, balcony: 1, parkings: 1, match: 95, rooms: 3, paymentsCond: randomPaymentCond()}
]

export const HOUSE_INIT: Apartment = {
    id: 0, name: '', address: '', propertyCond: PROPERTY_CONDITIONS.NEW, entryDate: new Date(),
    floor: 0, squareMeter: 0, balcony: 0, parkings: 0, match: 0, rooms: 0, paymentsCond: {
        rent: 0,
        propertyTax: 0,
        numOfPayments: 0,
        houseCommittee: 0,
        paymentDay: 0
    }
}