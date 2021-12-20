import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  user = {
    name: "Pham Van Nam",
    avatar: "https://i.pinimg.com/736x/5b/b9/59/5bb95935defd974fa87b44eaa8ed9bcd.jpg"
  }
  hideInputUser = true;
  constructor() { }

  ngOnInit(): void {
  }

  showInputUser() {
    this.hideInputUser = !this.hideInputUser;
  }
}
