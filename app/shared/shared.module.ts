import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListComponent } from "./list.component";
import { ListNamePipe } from "./list-name.pipe";
import { ExampleTitleDirective } from "./example.directive";
import { ToggleNavButtonDirective } from "./toggle-nav-button.directive";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        ListComponent,
        ListNamePipe,
        ExampleTitleDirective,
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
        ExampleTitleDirective,
        ToggleNavButtonDirective,
    ],
})
export class SharedModule { }

