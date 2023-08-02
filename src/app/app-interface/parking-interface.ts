import { StatusInterface } from './status-interface';

export interface ParkingInterface {
    id: number;
    location: string;
    latitude: number;
    longitude: number;
    priceHour: number;
    status: StatusInterface
}