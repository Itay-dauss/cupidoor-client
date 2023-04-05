import { Apartment } from "../types/apartment";

export const HOUSES: Apartment[] = [
{id: 1, name: 'Avi', address: 'Tel Aviv, George Wise 2', floor: 2, price: 5000, parkings: 0, match: 95, rooms: 3},
{id: 2, name: 'Yehuda', address: 'Jerusalem, Gooday 32', floor: 5, price: 5400, parkings: 1, match: 95, rooms: 3},
{id: 3, name: 'Afik', address: 'Rishon, Yordei hasira 4', floor: 1, price: 4800, parkings: 1, match: 95, rooms: 3},
{id: 4, name: 'Omer', address: 'Maccabbim-Reut, Meshushim 666', floor: 0, price: 9500, parkings: 3, match: 95, rooms: 3},
{id: 5, name: 'Itay', address: 'Tivon, Pashus 99', floor: 1, price: 4000, parkings: 1,match: 95, rooms: 3},
{id: 6, name: 'Amnon', address: 'Hod hasharon, Tsharnichovsky 11', floor: 2, price: 5100, parkings: 0, match: 95, rooms: 3},
{id: 7, name: 'Benji', address: 'Neverland, Chip 55', floor: 1, price: 7200, parkings: 3, match: 95, rooms: 3},
{id: 8, name: 'Dibo', address: 'Eilat, Hovevei zion 34', floor: 0, price: 2900, parkings: 1,match: 95, rooms: 3},
{id: 9, name: 'Lori', address: 'Holon, Matityahu 12', floor: 3, price: 3900, parkings: 0, match: 95, rooms: 3},
{id: 10, name: 'Chief', address: 'Modiin, Lev hair 10', floor: 2, price: 5400, parkings: 2, match: 95, rooms: 3},
{id: 11, name: 'Fitz', address: 'Dimona, Lilach 92', floor: 4, price: 2800, parkings: 1, match: 95, rooms: 3}

]

export const HOUSE_INIT: Apartment = {
    id: 0, name: '', address: '', 
    floor: 0, price: 0, parkings: 0, match: 0, rooms: 0
}