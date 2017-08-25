import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { ActivityIndicatorExamplesComponent } from "./activity-indicator-examples.component";
import { SettingBusyComponent } from "./setting-busy/setting-busy.component";

export const routes = [
    {
        path: "",
        component: ActivityIndicatorExamplesComponent
    },
    {
        path: "setting-busy",
        component: SettingBusyComponent,
        data: { title: "Set busy property" }
    },
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
    ],
    declarations: [
        ActivityIndicatorExamplesComponent,
        SettingBusyComponent,
    ],
})
export class ActivityIndicatorExamplesModule { }
