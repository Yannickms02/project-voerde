import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  activeRoute: string | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    const navBarToggle = document.querySelector("#navBarToggle");
    const navBarClose = document.querySelector("#navBarClose");
    const mobileNavBox = document.querySelector("#mobileNavBox");
    // get active route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url.split("/")[1];
        if (mobileNavBox!.className === "tw-block tw-md:hidden") {
          navBarToggle!.className = "tw-block tw-md:hidden tw-p-2";
          navBarClose!.className = "tw-hidden tw-md:hidden";
          mobileNavBox!.className = "tw-hidden tw-md:hidden";
        }
      }
    });

    navBarToggle?.addEventListener("click", () => {
      if (mobileNavBox!.className === "tw-hidden tw-md:hidden") {
        navBarToggle!.className = "tw-hidden tw-md:hidden";
        navBarClose!.className = "tw-block tw-md:hidden tw-p-2";
        mobileNavBox!.className = "tw-block tw-md:hidden tw-z-10";

        navBarClose?.addEventListener("click", () => {
          if (navBarClose.className === "tw-block tw-md:hidden tw-p-2") {
            navBarToggle!.className = "tw-block tw-md:hidden tw-p-2";
            navBarClose!.className = "tw-hidden tw-md:hidden";
            mobileNavBox!.className = "tw-hidden tw-md:hidden";
          }
        });

      }
      else {
        mobileNavBox!.className = "tw-hidden tw-md:hidden";
        navBarToggle!.className = "tw-block tw-md:hidden tw-p-2";
        navBarClose!.className = "tw-hidden tw-md:hidden";
      }
    });
    
  }
}
