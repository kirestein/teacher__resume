import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
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

  public location = 'São Paulo, SP';

  calcAge = () => {
    let age = this.year - this.birthdayYear;
    if (this.month < this.birthdayMonth || (this.month === this.birthdayMonth && this.date < this.birthdayDate)) {
      age--;
    }
    return age;
  }

  onDownload(): void {
    window.print();
  }
}
