import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.boxShadow ='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    this.elementRef.nativeElement.style.borderRadius= '12px'
   }
@HostListener('mouseover') fun1(){
  this.elementRef.nativeElement.style.boxShadow ='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.95)'

}
@HostListener('mouseout') fun2(){
  this.elementRef.nativeElement.style.boxShadow ='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

}
}
