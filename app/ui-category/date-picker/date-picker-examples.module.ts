import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "../../shared/shared.module";
import { DatePickerExamplesComponent } from "./date-picker-examples.component";
import { ConfigureDatePickerComponent } from "./configure-date-picker/configure-date-picker.component";

export const routes = [
    {
        path: "",
        component: DatePickerExamplesComponent
    },
    {
        path: "configure",
        component: ConfigureDatePickerComponent,
        data: { title: "Configure DatePicker" }
    },
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    declarations: [
        DatePickerExamplesComponent,
        ConfigureDatePickerComponent,
    ],
})
export class DatePickerExamplesModule { }
