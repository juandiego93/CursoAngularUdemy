import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(this.nuevoColor || null);
  }

  private resaltar(color: string) {
    this.element.nativeElement.style.background = color;
  }

}
