import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DockerHubService {
  private baseUrl: string = 'https://www.datenwissenschaften.com/dockerhub';

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<DockerHubResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<DockerHubResponse>(this.baseUrl, { headers });
  }
}

export interface DockerHubResponse {
  count: number;
  next: any;
  previous: any;
  results: Result[];
}

export interface Result {
  name: string;
  namespace: string;
  repository_type: string;
  status: number;
  status_description: string;
  description: string;
  is_private: boolean;
  star_count: number;
  pull_count: number;
  last_updated: string;
  date_registered: string;
  affiliation: string;
  media_types: string[];
  content_types: string[];
  categories: Category[];
}

export interface Category {
  name: string;
  slug: string;
}
