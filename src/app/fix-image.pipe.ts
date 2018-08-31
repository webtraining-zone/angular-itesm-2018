import {Pipe, PipeTransform} from '@angular/core';
import {API} from './config/API';

@Pipe({
  name: 'fixImage'
})
export class FixImagePipe implements PipeTransform {

  transform(imageURL: any, args?: any): any {
    return `${API.imagesURL}${imageURL}`;
  }

}
