import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
        <sdk-list [links]="links"></sdk-list>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesListComponent {
    public links: string[];

    constructor() {
        this.links = [
            "/action-bar",
            "/activity-indicator",
            "/animations",
            "/button",
            "/date-picker",
            "/dialogs",
            "/formatted-string",
        ];
    }
}
