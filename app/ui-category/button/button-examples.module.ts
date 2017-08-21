import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SharedModule } from "../../shared/shared.module";
import { ButtonExamplesComponent } from "./button-examples.component";
import { ButtonTapEventComponent } from "./tap-event/tap-event.component";

export const routes = [
    {
        path: "",
        component: ButtonExamplesComponent
    },
    {
        path: "tap-event",
        component: ButtonTapEventComponent,
        data: { title: "Tap event" }
    },
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        SharedModule,
    ],
    declarations: [
        ButtonExamplesComponent,
        ButtonTapEventComponent,
    ],
})
export class ButtonExamplesModule { }
