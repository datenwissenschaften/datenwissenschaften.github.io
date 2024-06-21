import { Component, Input } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { EasingLogic } from 'ngx-page-scroll-core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgxPageScrollModule, NgIf],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public showButton: boolean = false;

  public easeInOutQuad: EasingLogic = (
    t: number,
    b: number,
    c: number,
    d: number,
  ): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
}
