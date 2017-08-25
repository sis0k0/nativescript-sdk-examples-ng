import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListComponent } from "./list.component";
import { ListNamePipe } from "./list-name.pipe";
import { ActionBarTitleDirective } from "./action-bar-title.directive";
import { ToggleNavButtonDirective } from "./toggle-nav-button.directive";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        ListComponent,
        ListNamePipe,
        ActionBarTitleDirective,
        ToggleNavButtonDirective,
    ],
    imports: [
        NativeScriptRouterModule,
        NativeScriptCommonModule,
    ],
    exports: [
        NativeScriptCommonModule,

        ListComponent,
        ListNamePipe,
        ActionBarTitleDirective,
        ToggleNavButtonDirective,
    ],
})
export class SharedModule { }

