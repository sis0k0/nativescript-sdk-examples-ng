import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sdkListName"
})
export class ListNamePipe implements PipeTransform {
    transform(value: string): string {
        const url = new UrlController(value);

        return url
            .stripLeadingSlash()
            .capitalize()
            .dashesToUpperCase()
            .value;
    }

}

class UrlController {
    constructor(public value: string) { }

    public stripLeadingSlash() {
        const url = this.value;
        this.value = url[0] === "/" ? url.slice(1) : url;

        return this;
    }

    public capitalize() {
        const url = this.value;
        this.value = `${url[0].toUpperCase()}${url.slice(1)}`;

        return this;
    }

    public dashesToUpperCase() {
        const url = this.value;
        this.value = url.replace(/(-)(.)/g,
            (_, dot, letter) => ` ${letter.toUpperCase()}`);

        return this;
    }
}
