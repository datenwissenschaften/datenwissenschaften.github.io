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
    this.initializeCalendlyIframe();
  }

  initializeCalendlyIframe(): void {
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setAttribute(iframe, 'src', 'https://calendly.com/datenwissenschaften?embed_domain=www.datenwissenschaften.com&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1');
    this.renderer.setAttribute(iframe, 'width', '100%');
    this.renderer.setAttribute(iframe, 'height', '700');
    this.renderer.setAttribute(iframe, 'frameborder', '0');
    this.renderer.setStyle(iframe, 'min-width', '320px');
    this.renderer.setStyle(iframe, 'height', '700px');

    this.renderer.appendChild(this.calendlyContainer().nativeElement, iframe);
  }
}
