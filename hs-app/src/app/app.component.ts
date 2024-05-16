import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { SettingsComponent } from './settings/settings.component';
import { StorageComponent } from './storage/storage.component';
import { HomeComponent } from './home/home.component'
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule, 
    RecipiesComponent, 
    SettingsComponent, 
    StorageComponent, 
    HomeComponent, 
    NewsComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
