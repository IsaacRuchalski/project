import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "resume"})
export class ResumePipe implements PipeTransform {
  transform(value : string, ...args : unknown[]): unknown {
    if (value.length > 150) {
      value = value.substring(0, 100) + "...";
    }
    return value;
  }
}
