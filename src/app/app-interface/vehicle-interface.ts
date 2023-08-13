import { StatusInterface } from './status-interface';

export interface VehicleInterface {
    id: number;
    plate: string;
    color: string;
    brand: string;
    line: string;
    model: number;
    user: number;
    status: StatusInterface
}