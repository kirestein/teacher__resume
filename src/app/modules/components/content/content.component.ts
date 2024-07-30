import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule, 
    MatSidenavModule,
    AsideComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  showFiller = false;
}
