import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.sass'
})
export class AsideComponent {
  fullDateTime: Date = new Date();
  date = this.fullDateTime.getDate();
  month = this.fullDateTime.getMonth() + 1;
  year = this.fullDateTime.getFullYear();

  birthdayDate = 15;
  birthdayMonth = 9;
  birthdayYear = 1984;

  public address = 'Rua Raul José Braconaro, 41'

  calcAge = () => {
    let age = this.year - this.birthdayYear;
    if (this.month < this.birthdayMonth || (this.month === this.birthdayMonth && this.date < this.birthdayDate)) {
      age--;
    }
    return age;
  }

  // age = year

}
