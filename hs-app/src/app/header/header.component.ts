import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    title = [
        "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
        "No place like 127.0.0.1",
        "Sweet Homeserver~bama",
        "It's alive! It's alive!",
        "Hello Moto!",
        "( U w U) ",
        "404 Pop-reference not found",

        ];
    x = Math.floor(Math.random() * this.title.length);
    currentTitle = this.title[this.x];
}
