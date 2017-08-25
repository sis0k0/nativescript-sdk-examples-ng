import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
        <sdk-list [links]="links"></sdk-list>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExamplesComponent {
    public links: string[];

    constructor() {
        this.links = [
            "tap-event"
        ];
    }
}
