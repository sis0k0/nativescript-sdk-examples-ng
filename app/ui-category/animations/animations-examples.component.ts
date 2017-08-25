import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
        <sdk-list [links]="links"></sdk-list>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationsExamplesComponent {
    public links: string[];

    constructor() {
        this.links = [
            "animating-properties",
            "chaining-animations",
            "multiple-views",
        ];
    }
}
