import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[regionBorderCard]'
})
export class RegionBorderCardDirective {

  private initialColor: string ="#f5f5f5";
  private defaultColor: string ="#009688";
  private defaultHeight:number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('regionBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    let myHeight = "px";     
    this.el.nativeElement.style.border = myHeight+height;
  }

  private setBorder(color: string) {
    let myBorder = "solid 4px ";     
    this.el.nativeElement.style.border = myBorder+color;
  }

}
