import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./tap-event.component.html"
})
export class ButtonTapEventComponent {
    public counter: number = 0;
    private titleBackground: string;
    private oddColor: string;
    private evenColor: string;

    constructor() {
        this.oddColor = "red";
        this.evenColor = "blue";

        this.titleBackground = this.evenColor;
    }

    onTap() {
        this.counter += 1;
        this.updateTitleBackground();
    }
    
    private updateTitleBackground() {
        this.titleBackground = this.counter % 2 === 0 ?
            this.evenColor :
            this.oddColor;
    }
}

