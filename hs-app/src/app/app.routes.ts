import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { StorageComponent } from './storage/storage.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { MediaComponent } from './media/media.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        title: "Home Page",
        component: HomeComponent
    },
    {
        path: 'login',
        title: "Login Page",
        component: LoginComponent
    },
    {
        path: 'settings',
        title: 'Settingspage',
        component: SettingsComponent
    },

    {
        path: 'storage',
        title: "Storage",
        component: StorageComponent
    },    
    {
        path: 'recipies',
        title: "Oatmeal",
        component: RecipiesComponent
    },
    {
        path: 'news',
        title: "News",
        component: NewsComponent
    },
    {
        path: 'weather',
        title: "Weather",
        component: WeatherComponent
    },
    {
        path: 'media',
        title: "Mediaserver",
        component: MediaComponent
    },
    {
        path: 'register',
        title: "Create account",
        component: RegisterComponent
    }
    

    
];
