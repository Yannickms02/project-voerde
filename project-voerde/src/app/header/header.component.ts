import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  activeRoute: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const navBarToggle = document.querySelector("#hamburgerBtn");
    const mobileNavBox = document.querySelector("#mobileNavBox");

    navBarToggle?.addEventListener("click", () => {
      const currentView = mobileNavBox!.className;
      if (currentView === "hidden md:hidden") {
        mobileNavBox!.className = "block md:hidden mx-5 mt-2 border border-black rounded-lg w-52 float-right";
      }
      else {
        mobileNavBox!.className = "hidden md:hidden";
      }
      
    });
    const navbarToggle = document.getElementById('navbar-toggle')!;
    const navbar = document.getElementById('navbar')!;
    navbarToggle.addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });

  }
}
