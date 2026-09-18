import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { map } from 'rxjs';
import { ResumeDataService } from '../../services/resume-data.service';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    AsideComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  isMobile$ = this.breakpointObserver
    .observe('(max-width: 780px)')
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    public resume: ResumeDataService,
  ) {}
}
