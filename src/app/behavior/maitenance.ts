import { FormGroup } from "@angular/forms";

export abstract class Maintenance {

    title: string = '';
    mode: string = '';
    currentId: number = 0;
    loading: boolean = false;

    constructor(){}

    initialize(): void {
        switch (this.mode) {
            case 'create':
                break;

            case 'read':
                this.loading = true;
                this.fillForm();
                this.disableForm();
                break;

            case 'update':
                this.loading = true;
                this.fillForm();
                break;

            case 'delete':
                this.loading = true;
                this.fillForm();
                this.disableForm();
                break;

            case 'restore':
                this.loading = true;
                this.fillForm();
                this.disableForm();
                break;

            case 'execute':
                this.loading = true;
                this.fillForm();
                break;

            default:
                break;
        }
    }

    abstract disableForm(): void;
    abstract fillForm(): void;
    abstract create(): void;
    abstract update(): void;
    abstract delete(): void;
    abstract restore(): void;
}