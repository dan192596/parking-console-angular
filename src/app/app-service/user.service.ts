import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private data: any;

    public getData(): any {
        this.data = sessionStorage.getItem('data');
        return JSON.parse(this.data);
    }

    public getToken():any{
        const token = sessionStorage.getItem('token');
        if (token === null) {
            return '';
        }
        return token;
    }

    public setToken(token:string){
        sessionStorage.setItem('token',token);
    }

    public setUserData(data:string, token:string) {
        // Save data
        sessionStorage.setItem('data', JSON.stringify(data));
        sessionStorage.setItem('token', token);

        // Set logged
        sessionStorage.setItem('logged', (data != null ? '1' : '0'));
    }

    public deleteUserData() {
        sessionStorage.setItem('logged', '0');
        sessionStorage.removeItem('data');
        sessionStorage.removeItem('token');
    }
}
