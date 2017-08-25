import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
        <sdk-list [links]="links"></sdk-list>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionBarExamplesComponent {
    public links: string[];

    constructor() {
        this.links = [
            "action-items",
            "navigation-button",
            "title",
        ];
    }
}

