import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  observe(element: HTMLElement): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => observer.next(entry.isIntersecting));
      });
      intersectionObserver.observe(element);
      return () => intersectionObserver.disconnect();
    });
  }
}
