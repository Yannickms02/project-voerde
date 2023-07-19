import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  activeRoute: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}
