import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {

}
