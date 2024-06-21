import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { GithubService } from '../github.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-animated-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './animated-list.component.html',
  styleUrls: ['./animated-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0.5)' }),
            stagger(100, [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'scale(1)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
        query(
          ':leave',
          [
            stagger(100, [
              animate(
                '200ms ease-in',
                style({ opacity: 0, transform: 'scale(0.5)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class AnimatedListComponent implements OnInit {
  categories: string[] = [];
  items = [
    {
      name: 'Automotive',
      category: 'Projects',
      description:
        'Developing automated statistical analysis of driving behavior, combining sensor and user data on a big data platform to detect patterns for analysis and automated reactions.',
      flipped: false,
      image: '/assets/img/portfolio/automotive-project-image.png',
      url: '',
    },
    {
      name: 'Health Care',
      category: 'Projects',
      description:
        'BODYVISER GmbH offers mobile solutions to tackle chronic stress, connect with experts, and establish an adaptive lifestyle for inner balance..',
      flipped: false,
      image: '/assets/img/portfolio/healthcare-project-image.png',
      url: '',
    },
    {
      name: 'Publisher',
      category: 'Projects',
      description:
        'Social Sweethearts GmbH, a top digital publisher, optimizes fortune-telling quizzes on Facebook, enhancing user targeting and increasing share rates and ad impressions.',
      flipped: false,
      image: '/assets/img/portfolio/content-publishing-project-image.png',
      url: '',
    },
    {
      name: 'Media',
      category: 'Projects',
      description:
        'The long-term project aimed to migrate the data warehouse from PostgreSQL to Apache Hadoop, integrating 30+ data sources for key KPI extraction.',
      flipped: false,
      image: '/assets/img/portfolio/media-project-image.png',
      url: '',
    },
    {
      name: 'Data Strategy',
      category: 'Services',
      description:
        'Assess your data, identify improvements, and create a strategy aligned with your goals. We ensure effective data use from governance to architecture.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
    {
      name: 'Workshops',
      category: 'Services',
      description:
        'Empower your team with customized training and workshops in data science. Equip them to leverage data effectively and boost your data initiatives’ success.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
    {
      name: 'Predictive Analytics',
      category: 'Services',
      description:
        'Stay ahead with our predictive analytics solutions. Using advanced models, we forecast future outcomes so you can tackle challenges and seize opportunities.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
    {
      name: 'Visualization',
      category: 'Services',
      description:
        'Transform raw data into compelling stories with our visualization and reporting services. We create clear visuals that turn insights into actionable information.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
    {
      name: 'Big Data',
      category: 'Services',
      description:
        'Navigate vast data with confidence. Our big data analytics services extract insights from complex datasets, uncovering patterns and opportunities missed by traditional methods.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
    {
      name: 'AI',
      category: 'Services',
      description:
        'Automate tasks, enhance customer experiences with chatbots, and optimize processes with machine learning for greater efficiency and innovation.',
      flipped: false,
      image: '/assets/img/portfolio/service.png',
      url: '',
    },
  ];

  filteredItems: any = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos('datenwissenschaften').subscribe((repos) => {
      const repoItems = repos
        .filter((repo) => !repo.archived)
        .map((repo) => {
          return {
            name: repo.name,
            category: 'Open Source',
            description: repo.description || 'No description provided',
            flipped: false,
            image: 'https://www.svgrepo.com/show/361509/github-logo.svg',
            url: repo.html_url,
          };
        });
      // @ts-ignore
      this.items = [...this.items, ...repoItems];
      this.categories = this.items.map((item) => item.category);
      this.categories = this.categories.filter(
        (category, index) => this.categories.indexOf(category) === index,
      );
      this.categories.unshift('All');
      this.filteredItems = this.items;
      this.shuffleItems();
    });
  }

  filterItems(category: string) {
    // this.filteredItems = []; // Trigger leave animation
    setTimeout(() => {
      if (category === 'All') {
        this.filteredItems = this.items;
        this.shuffleItems();
      } else {
        this.filteredItems = this.items.filter(
          (item) => item.category === category,
        );
        this.shuffleItems();
      }
    }, 100);
  }

  shuffleItems() {
    this.filteredItems = this.filteredItems.sort(() => Math.random() - 0.5);
  }

  toggleFlip(item: any) {
    item.flipped = !item.flipped;
  }
}
