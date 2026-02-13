import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  input
} from '@angular/core';

import { IntersectionObserverService } from '../intersection-observer.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-section',
    imports: [],
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    animations: [
        trigger('scrollAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-20px)' }),
                animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateY(0)' }),
                animate('1s ease-out', style({ opacity: 0, transform: 'translateY(-20px)' })),
            ]),
        ]),
    ]
})
export class SectionComponent {
  readonly id = input<string>('');
  isVisible: boolean = false;

  constructor(
    private el: ElementRef,
    private intersectionObserverService: IntersectionObserverService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
    this.intersectionObserverService
      .observe(this.el.nativeElement)
      .subscribe((isIntersecting) => {
        if (isIntersecting) {
          this.isVisible = true;
          this.cdr.detectChanges();
        }
      });
  }
}
