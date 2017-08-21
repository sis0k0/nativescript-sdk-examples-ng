import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./link";

@Component({
    moduleId: module.id,
    templateUrl: "./examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesListComponent {
    public links: Link[];

    constructor() {
        this.links = [
            new Link("ActionBar", "/action-bar"),
            new Link("Activity Indicator", "/activity-indicator"),
            new Link("Animations", "/animations"),
            new Link("Button", "/button"),
            new Link("Date Picker", "/date-picker"),
            new Link("Dialogs", "/dialogs"),
            new Link("Formatted String", "/formatted-string"),
        ];
    }
}
