import { Component, input } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { EasingLogic } from 'ngx-page-scroll-core';


@Component({
    selector: 'app-title',
    imports: [NgxPageScrollModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent {
  public readonly title = input<string>('');
  public readonly subtitle = input<string>('');
  public readonly showButton = input<boolean>(false);

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
