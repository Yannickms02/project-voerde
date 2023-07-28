import { Component, OnInit } from '@angular/core';

export class Message {
  name!: string;
  mail!: string;
  subject!: string;
  message!: string;
}

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.less']
})

export class KontaktComponent implements OnInit {
  msg: Message = new Message();

  ngOnInit() {
    const submitBtn = document.querySelector("#submit-btn");
    
    submitBtn?.addEventListener("click", () => {
      
      
    });
  }
}
