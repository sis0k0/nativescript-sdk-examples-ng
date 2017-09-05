import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "../../shared/shared.module";
import { FormattedStringExamplesComponent } from "./formated-string-examples.component";
import { CreateFormattedStringComponent } from "./create-formatted-string/create-formatted-string.component";

export const routes = [
    {
        path: "",
        component: FormattedStringExamplesComponent
    },
    {
        path: "create-formatted-string",
        component: CreateFormattedStringComponent,
        data: { title: "Create Formatted String" }
    },
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    declarations: [
        FormattedStringExamplesComponent,
        CreateFormattedStringComponent,
    ],
})
export class FormattedStringExamplesModule { }
