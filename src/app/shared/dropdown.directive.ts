import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') eventType: string = 'click';
  @HostBinding('class.open') open = false;

  @HostListener('mouseenter') dropdownShow(dataEvent: Event) {

    if (this.eventType == 'hover') {
      this.open = true;
    }
  }

  @HostListener('mouseleave') dropdownHide(dataEvent: Event) {
    if (this.eventType == 'hover') {
      this.open = false;
    }
  }

  @HostListener('click') dropdownToggle(dataEvent: Event) {
    if (this.eventType == 'click') {
      this.open = !this.open;
    }
  }
}
