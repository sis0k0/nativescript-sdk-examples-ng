import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: "alert-dialog-component",
    templateUrl: "ui-category/dialogs/alert-dialog/alert-dialog.component.html"
})

export class AlertDialogComponent {
     displayAlertDialog() {
        // >> alert-dialog-code
        let options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };
        dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
}
