import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ExamplesListComponent } from "./examples-list.component";
import { SharedModule } from "./shared/shared.module";

export const routes = [{
    path: "",
    component: ExamplesListComponent
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
    ],
    declarations: [
        ExamplesListComponent,
    ],
})
export class ExamplesListModule { }
