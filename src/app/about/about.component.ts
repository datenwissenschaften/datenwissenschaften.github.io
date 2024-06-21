import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EasingLogic } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, NgxPageScrollModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
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
