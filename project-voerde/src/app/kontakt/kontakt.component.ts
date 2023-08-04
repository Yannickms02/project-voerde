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
      // validate input
      if (!this.msg.name) {
        document.getElementById("form-name")!.className = "tw-input tw-input-bordered tw-placeholder-red-700 tw-border-red-700";
        document.getElementById("form-name")!.setAttribute("placeholder", "Bitte einen Namen eingeben!");
      }
      else {
        document.getElementById("form-name")!.className = "tw-input tw-input-bordered";
        document.getElementById("form-name")!.setAttribute("placeholder", "");
      }
      if (!this.msg.mail) {
        document.getElementById("form-mail")!.className = "tw-input tw-input-bordered tw-placeholder-red-700 tw-border-red-700";
        document.getElementById("form-mail")!.setAttribute("placeholder", "Bitte eine E-Mail eingeben!");
      }
      else {
        document.getElementById("form-name")!.className = "tw-input tw-input-bordered";
        document.getElementById("form-name")!.setAttribute("placeholder", "");
      }
      if (!this.msg.subject) {
        document.getElementById("form-subject")!.className = "tw-input tw-input-bordered tw-placeholder-red-700 tw-border-red-700";
        document.getElementById("form-subject")!.setAttribute("placeholder", "Bitte einen Betreff eingeben!");
      }
      else {
        document.getElementById("form-name")!.className = "tw-input tw-input-bordered";
        document.getElementById("form-name")!.setAttribute("placeholder", "");
      }
      if (!this.msg.message) {
        document.getElementById("form-msg")!.className = "tw-input tw-input-bordered tw-placeholder-red-700 tw-border-red-700";
        document.getElementById("form-msg")!.setAttribute("placeholder", "Bitte eine Nachricht eingeben!");
      }
      else {
        document.getElementById("form-name")!.className = "tw-input tw-input-bordered";
        document.getElementById("form-name")!.setAttribute("placeholder", "");
      }

      // change btn style
      if (this.msg.name && this.msg.subject && this.msg.subject && this.msg.message) {
        submitBtn!.innerHTML = "Gesendet!";
        submitBtn!.className = "tw-btn";
      }
      
    });
  }
}
