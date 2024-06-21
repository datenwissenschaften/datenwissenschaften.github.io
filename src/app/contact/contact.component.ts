import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('calendlyContainer', { static: false })
  calendlyContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadCalendlyWidgetScript();
  }

  loadCalendlyWidgetScript(): void {
    // Load the Calendly widget script
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = () => {
      // Initialize the Calendly widget once the script is loaded
      this.initializeCalendlyWidget();
    };

    this.renderer.appendChild(this.calendlyContainer.nativeElement, script);
  }

  initializeCalendlyWidget(): void {
    // @ts-ignore
    if (window['Calendly']) {
      // @ts-ignore
      window['Calendly'].initInlineWidget({
        url: 'https://calendly.com/datenwissenschaften',
        parentElement: this.calendlyContainer.nativeElement,
      });
    }
  }
}
