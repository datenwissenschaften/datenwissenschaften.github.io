import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  loadScript(src: string, id: string): void {
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
