import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
})
export class CustomAppendPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return `${value} append pipe ${args.join('<->')}`;
  }
}

//impure pipes
@Pipe({
  name: 'changeCase',
  pure: false,
})
export class CustomChangeCasePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    // console.log(value);
    const ne = value.map((data) => {
      data.name = data.name.toString().toUpperCase();
      return data;
    });
    return ne;
  }
}
