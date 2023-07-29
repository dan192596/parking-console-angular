import { Injectable } from '@angular/core';
import { Auth, Amplify } from 'aws-amplify';
import amplify from '../aws-exports-console';

@Injectable({
    providedIn: 'root'
})

export class AmplifyService {
    
    constructor() {
        Amplify.configure(amplify);
     }

    public async signIn(username: string, password: string) {
        try {            
            return await Auth.signIn(username, password);
        } catch (error) {
            return error;
        }
    }

    public async signOut() {
        try {            
            return await Auth.signOut({ global: true });
        } catch (error) {
            return error;
        }
    }
}
