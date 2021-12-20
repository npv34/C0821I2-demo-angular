import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component2.css']
})
export class AppComponent {
  posts = [
    {
    title: "Nhat ky ngay 19/12",
    date: "2021-12-19",
    desc: "Hom nay hoc bai Angular Over view, minh da ngu gat trong lop",
      user: "Pham Van Nam"
  },
    {
      title: "Nhat ky ngay 18/12",
      date: "2021-12-18",
      desc: "Hom nay hoc bai Angular Over view, minh da ngu gat trong lop",
      user: "Pham Van Nam"
    }
  ]
  title = 'blog-angular';
}
