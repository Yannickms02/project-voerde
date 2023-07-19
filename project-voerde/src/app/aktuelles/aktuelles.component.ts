import { Component, OnInit } from '@angular/core';
import { GottesdienstService } from '../gottesdienst.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.less']
})
export class AktuellesComponent implements OnInit{
  nextGottesdienstDate: Date = new Date();
  formattedNextGottesdienstDate: string = '';
  isGottesdienstToday: boolean = false;

  constructor(private gottesdienstService: GottesdienstService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.nextGottesdienstDate = this.gottesdienstService.getNextGottesdienstDate();

    // Überprüfe, ob das Datum gültig ist, bevor du es formatierst
    if (this.nextGottesdienstDate instanceof Date && !isNaN(this.nextGottesdienstDate.getTime())) {
      const formattedDate = this.datePipe.transform(this.nextGottesdienstDate, 'dd.MM.yyyy');
      if (formattedDate) {
        this.formattedNextGottesdienstDate = formattedDate;
      }
    }

    // Überprüfung, ob der nächste Gottesdienst heute ist
    const today = new Date();
    this.isGottesdienstToday = this.nextGottesdienstDate.toDateString() === today.toDateString();
  }
}
