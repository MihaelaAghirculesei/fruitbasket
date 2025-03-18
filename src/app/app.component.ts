import { Component } from '@angular/core';
import { HeaderComponent } from './fruitlist/shared/footer/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './fruitlist/shared/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fruitbasket';
}
