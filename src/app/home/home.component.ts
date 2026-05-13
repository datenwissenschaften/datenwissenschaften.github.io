import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SectionComponent } from '../section/section.component';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'app-home',
    imports: [
        FooterComponent,
        NavbarComponent,
        SectionComponent,
        TitleComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
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
