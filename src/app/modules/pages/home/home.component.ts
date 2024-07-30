import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    AsideComponent, 
    ContentComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
