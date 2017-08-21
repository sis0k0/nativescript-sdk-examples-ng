import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../../shared/shared.module";
import { AnimationsExamplesComponent } from "./animations-examples.component";
import { AnimatingPropertiesComponent } from "./animating-properties/animating-properties.component";
import { ChainingAnimationsComponent } from "./chaining-animations/chaining-animations.component";
import { MultipleViewsComponent } from "./multiple-views/multiple-views.component";

export const routes = [
    {
        path: "",
        component: AnimationsExamplesComponent
    },
    {
        path: "animating-properties",
        component: AnimatingPropertiesComponent,
        data: { title: "Animate properties" }
    },
    {
        path: "chaining-animations",
        component: ChainingAnimationsComponent,
        data: { title: "Chaining animations" }
    },
    {
        path: "multiple-views",
        component: MultipleViewsComponent,
        data: { title: "Animate multiple views" }
    },
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        SharedModule,
    ],
    declarations: [
        AnimationsExamplesComponent,
        AnimatingPropertiesComponent,
        ChainingAnimationsComponent,
        MultipleViewsComponent,
    ],
})
export class AnimationsExamplesModule { }
