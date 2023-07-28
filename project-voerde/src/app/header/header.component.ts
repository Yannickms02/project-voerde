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
        if (mobileNavBox!.className === "block md:hidden") {
          navBarToggle!.className = "block md:hidden p-2";
          navBarClose!.className = "hidden md:hidden";
          mobileNavBox!.className = "hidden md:hidden";
        }
      }
    });

    navBarToggle?.addEventListener("click", () => {
      if (mobileNavBox!.className === "hidden md:hidden") {
        navBarToggle!.className = "hidden md:hidden";
        navBarClose!.className = "block md:hidden p-2";
        mobileNavBox!.className = "block md:hidden";

        navBarClose?.addEventListener("click", () => {
          if (navBarClose.className === "block md:hidden p-2") {
            navBarToggle!.className = "block md:hidden p-2";
            navBarClose!.className = "hidden md:hidden";
            mobileNavBox!.className = "hidden md:hidden";
          }
        });

      }
      else {
        mobileNavBox!.className = "hidden md:hidden";
        navBarToggle!.className = "block md:hidden p-2";
        navBarClose!.className = "hidden md:hidden";
      }
    });
    
  }
}
