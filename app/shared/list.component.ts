import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "sdk-list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
    @Input() links: string[];
}
