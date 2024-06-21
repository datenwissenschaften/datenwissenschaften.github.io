import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverService } from '../intersection-observer.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '1s ease-out',
          style({ opacity: 0, transform: 'translateY(-20px)' }),
        ),
      ]),
    ]),
  ],
})
export class SectionComponent implements OnInit {
  @Input() id: string = '';
  isVisible: boolean = false;

  constructor(
    private el: ElementRef,
    private intersectionObserverService: IntersectionObserverService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
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
