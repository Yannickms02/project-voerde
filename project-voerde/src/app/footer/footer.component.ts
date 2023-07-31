import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
   aktuellesJahr: number | undefined;
   activeRoute: string | undefined;

   constructor(private router: Router) {}

   ngOnInit() {
    this.aktuellesJahr = new Date().getFullYear();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url.split("/")[1];
      }
    });
   }
}
