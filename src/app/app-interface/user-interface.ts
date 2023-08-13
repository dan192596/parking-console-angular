import { StatusInterface } from './status-interface';

export interface UserInterface {
    id: number;
    name: string;
    lastname: number;
    document: number;
    birthday: string;
    phone: string;
    email: string;
    registerDatetime: string;
    updatedDatetime: string;
    uuid: string;
    status: StatusInterface;
}