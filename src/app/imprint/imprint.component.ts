import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SectionComponent } from '../section/section.component';
import { TitleComponent } from '../title/title.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-imprint',
    imports: [NavbarComponent, SectionComponent, TitleComponent, FooterComponent],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.loadCookieDeclarationScript();
  }

  loadCookieDeclarationScript(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://consent.cookiebot.com/58891ae3-ac06-49f8-8f94-bef2aadb2dfe/cd.js';
    script.id = 'CookieDeclaration';
    script.async = true;
    const cookieElement = this.renderer.selectRootElement('#cookies', true);
    this.renderer.appendChild(cookieElement, script);
  }
}
