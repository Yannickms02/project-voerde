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
    const hamburgerIcon = document.querySelector("#hamburgerIcn");
    const closeIcon = document.querySelector('#closeIcn');

    function hideNavBarListener() {
        mobileNavBox!.className = "hidden md:hidden";
        
    }

    navBarToggle?.addEventListener("click", () => {
      const currentView = mobileNavBox!.className;
      if (currentView === "hidden md:hidden") {
        mobileNavBox!.className = "block md:hidden mx-5 mt-2 border border-black rounded-lg w-52 float-right shadow-md rounded";
        
        mobileNavBox!.addEventListener("click", hideNavBarListener);
      }
      else {
        mobileNavBox!.className = "hidden md:hidden";
        
        mobileNavBox!.removeEventListener("click", hideNavBarListener);
      }
      
    });
    
  }
}
