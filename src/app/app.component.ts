import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(
               ) { }

    logOut(): void {
        
    }
}
