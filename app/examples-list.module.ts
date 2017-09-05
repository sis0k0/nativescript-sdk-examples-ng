import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListComponent } from "./examples-list.component";
import { SharedModule } from "./shared/shared.module";

export const routes = [{
    path: "",
    component: ExamplesListComponent,
    data: { title: "NativeScript Code Samples" },
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    declarations: [
        ExamplesListComponent,
    ],
})
export class ExamplesListModule { }
