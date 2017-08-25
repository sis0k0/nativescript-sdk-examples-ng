import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
        <sdk-list [links]="links"></sdk-list>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityIndicatorExamplesComponent {
    public links: string[];

    constructor() {
        this.links = [
            "setting-busy",
        ];
    }
}

