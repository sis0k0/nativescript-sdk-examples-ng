// tslint:disable:max-line-length

import { routes as listRoutes } from "./examples-list.module";
import { routes as actionBarRoutes } from "./ui-category/action-bar/action-bar-examples.module";
import { routes as activityIndicatorRoutes } from "./ui-category/activity-indicator/activity-indicator-examples.module";
import { routes as animationsRoutes } from "./ui-category/animations/animations-examples.module";
import { routes as buttonRoutes } from "./ui-category/button/button-examples.module";
import { routes as datePickerRoutes } from "./ui-category/date-picker/date-picker-examples.module";
import { routes as dialogsRoutes } from "./ui-category/dialogs/dialogs-examples.module";
import { routes as formattedStringRoutes } from "./ui-category/formatted-string/formated-string-examples.module";

export const routes = [
    {
        path: "",
        data: { title: "NativeScript Code Samples" },
        children: listRoutes,
        pathMatch: "full",
    },
    {
        path: "action-bar",
        data: { title: "ActionBar" },
        children: actionBarRoutes,
    },
    {
        path: "activity-indicator",
        data: { title: "ActivityIndicator" },
        children: activityIndicatorRoutes,
    },
    {
        path: "animations",
        data: { title: "Animations" },
        children: animationsRoutes,
    },
    {
        path: "button",
        data: { title: "Button" },
        children: buttonRoutes,
    },
    {
        path: "date-picker",
        data: { title: "DatePicker" },
        children: datePickerRoutes,
    },
    {
        path: "dialogs",
        data: { title: "Dialogs" },
        children: dialogsRoutes,
    },
    {
        path: "formatted-string",
        data: { title: "Formatted String" },
        children: formattedStringRoutes,
    },
];
