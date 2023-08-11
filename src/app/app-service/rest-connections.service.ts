import {environment} from '../../environments/environment';

export const REST = {
    service: {
        timeout: 1000,
        console: environment.protocol + environment.domain + (environment.domain=='localhost'?":8000":".com/console/")
    }
};