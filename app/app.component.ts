import { Component } from "@angular/core";
import { Router, NavigationError } from "@angular/router";
import "rxjs";

@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
    constructor(router: Router) {
        router.events
            .filter(e => e instanceof NavigationError)
            .subscribe(error => console.log(error.toString()));
    }
}
