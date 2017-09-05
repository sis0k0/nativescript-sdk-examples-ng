// tslint:disable:max-line-length

export const routes = [
    {
        path: "",
        loadChildren: "./examples-list.module#ExamplesListModule",
    },
    {
        path: "action-bar",
        loadChildren: "./ui-category/action-bar/action-bar-examples.module#ActionBarExamplesModule",
        data: { title: "Action Bar" },
    },
    {
        path: "activity-indicator",
        loadChildren: "./ui-category/activity-indicator/activity-indicator-examples.module#ActivityIndicatorExamplesModule",
        data: { title: "Activity Indicator" },
    },
    {
        path: "animations",
        loadChildren: "./ui-category/animations/animations-examples.module#AnimationsExamplesModule",
        data: { title: "Animations" },
    },
    {
        path: "button",
        loadChildren: "./ui-category/button/button-examples.module#ButtonExamplesModule",
        data: { title: "Button" },
    },
    {
        path: "date-picker",
        loadChildren: "./ui-category/date-picker/date-picker-examples.module#DatePickerExamplesModule",
        data: { title: "Date Picker" },
    },
    {
        path: "dialogs",
        loadChildren: "./ui-category/dialogs/dialogs-examples.module#DialogsExamplesModule",
        data: { title: "Dialogs" },
    },
    {
        path: "formatted-string",
        loadChildren: "./ui-category/formatted-string/formated-string-examples.module#FormattedStringExamplesModule",
        data: { title: "Formatted String" },
    },
];
