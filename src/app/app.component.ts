import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {
  NgxPageScrollCoreModule,
  PageScrollService,
} from 'ngx-page-scroll-core';
import { SectionComponent } from './section/section.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleComponent,
    NavbarComponent,
    CallToActionComponent,
    AboutComponent,
    PortfolioComponent,
    NgOptimizedImage,
    CommonModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    SectionComponent,
    ContactComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Datenwissenschaften';

  constructor() {}
}
