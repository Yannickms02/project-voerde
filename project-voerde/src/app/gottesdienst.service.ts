import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GottesdienstService {
  private nextGottesdienstDate!: Date;
  private tageBisGottesdienst!: number;

  constructor() {
    this.updateNextGottesdienstDate();
    setInterval(() => this.updateNextGottesdienstDate(), 1000 * 60 * 60 * 24); // Aktualisierung alle 24 Stunden
  }

  private updateNextGottesdienstDate() {
    const currentDate = new Date();
    const gottesdienstTag = 0; // Wochentag (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
    
    // Wenn der aktuelle Wochentag größer oder gleich dem GottesdienstTag ist, füge Tage bis zum nächsten Gottesdienst hinzu
    if (currentDate.getDay() >= gottesdienstTag) {
      this.nextGottesdienstDate = new Date(currentDate);
      this.nextGottesdienstDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()) + gottesdienstTag);
    } else {
      // Wenn der aktuelle Wochentag kleiner als der GottesdienstTag ist, subtrahiere den Unterschied
      this.nextGottesdienstDate = new Date(currentDate);
      this.nextGottesdienstDate.setDate(currentDate.getDate() + (gottesdienstTag - currentDate.getDay()));
    }

    // Berechne die Differenz in Tagen bis zum nächsten Gottesdienst
    const differenceInTime = this.nextGottesdienstDate.getTime() - currentDate.getTime();
    this.tageBisGottesdienst = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  }

  getNextGottesdienstDate(): Date {
    return this.nextGottesdienstDate;
  }

  getTageBisGottesdienst(): number {
    return this.tageBisGottesdienst;
  }
}
