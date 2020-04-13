import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], ...args: unknown[]): string {
    if (!images) {
      return 'assets/img/original.jfif';
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/original.jfif';
    }
  }
}
