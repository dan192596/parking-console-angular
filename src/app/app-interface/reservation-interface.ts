import { ParkingInterface } from './parking-interface';
import { StatusInterface } from './status-interface';
import { VehicleInterface } from './vehicle-interface';

export interface ReservationInterface {
    id: number;
    start: string;
    end: string;
    parking: ParkingInterface;
    vehicle: VehicleInterface;
    status: StatusInterface
}