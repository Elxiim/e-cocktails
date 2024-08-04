import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective {
  @Input() public appSelected!: boolean;
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.fontWeight') fontWeight!: string;
  @HostBinding('style.color') color!: string;

  constructor() {}

  ngOnChanges() {
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.fontWeight = '500';
      this.color = 'var(--white)';
    } else {
      this.backgroundColor = 'var(--white)';
      this.fontWeight = 'normal';
      this.color = 'var(--text-regular)';
    }
  }
}
