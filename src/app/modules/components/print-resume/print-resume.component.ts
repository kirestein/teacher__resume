import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

/**
 * Flat, single-column resume layout used only for window.print()/PDF export.
 * It renders in the DOM at all times (hidden via :host { display: none })
 * so every section is guaranteed to be present when printing — unlike the
 * interactive mat-tab-group in ContentComponent, which only renders a tab's
 * content once that tab has been activated at least once.
 */
@Component({
  selector: 'app-print-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print-resume.component.html',
  styleUrl: './print-resume.component.sass',
})
export class PrintResumeComponent {
  constructor(public resume: ResumeDataService) {}
}
