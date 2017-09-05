import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";

import { ExamplesListModule } from "./examples-list.module";
import { ActionBarExamplesModule } from "./ui-category/action-bar/action-bar-examples.module";
import { ActivityIndicatorExamplesModule } from "./ui-category/activity-indicator/activity-indicator-examples.module";
import { AnimationsExamplesModule } from "./ui-category/animations/animations-examples.module";
import { ButtonExamplesModule } from "./ui-category/button/button-examples.module";
import { DatePickerExamplesModule } from "./ui-category/date-picker/date-picker-examples.module";
import { DialogsExamplesModule } from "./ui-category/dialogs/dialogs-examples.module";
import { FormattedStringExamplesModule } from "./ui-category/formatted-string/formated-string-examples.module";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptAnimationsModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
export class AppModule { }
