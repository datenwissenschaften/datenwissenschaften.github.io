import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SectionComponent } from '../section/section.component';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'app-home',
    imports: [
        AboutComponent,
        ContactComponent,
        FooterComponent,
        NavbarComponent,
        PortfolioComponent,
        SectionComponent,
        TitleComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
