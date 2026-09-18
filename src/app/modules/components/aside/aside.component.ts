import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.sass'
})
export class AsideComponent {
  constructor(public resume: ResumeDataService) {}

  onDownload(): void {
    window.print();
  }
}
