import { StatusInterface } from './status-interface';

export interface PaymentInterface {
    id: number;
    total: number;
    reservation: number;
    client: number;
    status: StatusInterface
}