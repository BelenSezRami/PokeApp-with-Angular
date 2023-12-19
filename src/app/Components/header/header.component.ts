import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  headerImg: string = "assets/img/pokesite.jpg"
  altContent: string = "Header image - Pokeworld"
}
