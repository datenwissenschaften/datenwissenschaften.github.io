import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EasingLogic, NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        NgOptimizedImage,
        NgxPageScrollCoreModule,
        NgxPageScrollModule,
        RouterLink,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {}
