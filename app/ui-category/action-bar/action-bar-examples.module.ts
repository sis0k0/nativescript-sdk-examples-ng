import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarExamplesComponent } from "./action-bar-examples.component";
import { ActionItemsComponent } from "./action-items/action-items.component";
import { NavigationButtonComponent } from "./navigation-button/navigation-button.component";
import { TitleComponent } from "./title/title.component";
import { SharedModule } from "../../shared/shared.module";

export const routes = [
    {
        path: "",
        component: ActionBarExamplesComponent
    },
    {
        path: "action-items",
        component: ActionItemsComponent,
        data: { title: "Action items" }
    },
    {
        path: "navigation-button",
        component: NavigationButtonComponent,
        data: { title: "Navigation button" }
    },
    {
        path: "title",
        component: TitleComponent,
        data: { title: "ActionBar title" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        SharedModule,
    ],
    declarations: [
        ActionBarExamplesComponent,
        ActionItemsComponent,
        NavigationButtonComponent,
        TitleComponent,
    ],
})
export class ActionBarExamplesModule { }
