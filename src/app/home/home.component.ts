import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SectionComponent } from '../section/section.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    CallToActionComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    NewsletterComponent,
    PortfolioComponent,
    SectionComponent,
    TitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
