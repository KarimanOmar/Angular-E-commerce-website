import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardnumber'
})
export class CardnumberPipe implements PipeTransform {

  transform(value: String): string {
 // Remove any non-digit characters from the input value
 //=>/\D/g: This is a regular expression pattern. In regular
//  expressions, \D represents any character that is not a digit (0-9)
const cleanedValue = value.replace(/\D/g, '');

    // Split the value into groups of 4 digits
    ///.{1,4}/g: This regular expression pattern specifies
    //  that we want to match any sequence of characters that has a
    //  length of 1 to 4 characters. The . represents any character,
    //  and the {1,4} specifies that we want to match between 1 and 4 occurrences
    //  of the previous character (which is . in this case)
    const groups = cleanedValue.match(/.{1,4}/g);

    // If there are groups, join them with " – "
    //  groups ? groups.join(' - ') : '';
    //join method, it will always return "string"
    var newString =groups ? groups.join(' - ') : '';
    return newString;
  }

}
