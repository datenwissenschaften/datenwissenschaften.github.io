import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  viewChild
} from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  readonly calendlyContainer = viewChild.required<ElementRef>('calendlyContainer');

  constructor(private renderer: Renderer2) {}

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

    this.renderer.appendChild(this.calendlyContainer().nativeElement, script);
  }

  initializeCalendlyWidget(): void {
    // @ts-ignore
    if (window['Calendly']) {
      // @ts-ignore
      window['Calendly'].initInlineWidget({
        url: 'https://calendly.com/datenwissenschaften',
        parentElement: this.calendlyContainer().nativeElement,
      });
    }
  }
}
