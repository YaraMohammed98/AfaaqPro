import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lan="en";

  constructor(){}
  ngOnInit(): void {
    this.lan=localStorage.getItem('lang') || 'en'
  }

  changelan(){
    this.lan =  this.lan === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.lan)
    window.location.reload();
  }

}
