import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ExamplesListComponent } from "./examples-list.component";
import { SharedModule } from "./shared/shared.module";

export const routes = [{
    path: "",
    component: ExamplesListComponent
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        SharedModule,
    ],
    declarations: [
        ExamplesListComponent,
    ],
})
export class ExamplesListModule { }
