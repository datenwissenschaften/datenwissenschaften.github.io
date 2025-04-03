import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  build = packageJson.version;
}
