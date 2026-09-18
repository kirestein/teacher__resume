import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AsideComponent } from '../../components/aside/aside.component';
import { ContentComponent } from '../../components/content/content.component';
import { PrintResumeComponent } from '../../components/print-resume/print-resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AsideComponent,
    ContentComponent,
    PrintResumeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  isMobile$ = this.breakpointObserver
    .observe('(max-width: 780px)')
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
