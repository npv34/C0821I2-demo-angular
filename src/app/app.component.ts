import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component2.css']
})
export class AppComponent implements OnInit{
  formAddPost?: FormGroup
  posts = [
    {
      title: "Nhat ky ngay 19/12",
      date: "2021-12-19",
      desc: "Hom nay hoc bai Angular Over view, minh da ngu gat trong lop",
      user: "Pham Van Nam",
      comments: [
        {
          name: "Luan",
          content: "Bai viet hay"
        },
        {
          name: "Thanh",
          content: "Bai viet kha oke"
        },
      ],
      likes: 400
    },
    {
      title: "Nhat ky ngay 18/12",
      date: "2021-12-18",
      desc: "Hom nay hoc bai Angular Over view, minh da ngu gat trong lop",
      user: "Pham Van Nam",
      comments: [
        {
          name: "Cuong",
          content: "Bai viet hay"
        },
        {
          name: "Son",
          content: "Bai viet kha oke"
        },
      ],
      likes: 100
    }
  ]
  title = 'blog-angular';
  indexPostHide = -1;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formAddPost = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required]],
      // user: ['', [Validators.required]]
    })
  }

  showBoxCommentPost(index: number) {
    this.indexPostHide = index
  }

  addComment(event: any) {
    this.posts[this.indexPostHide].comments.push(event)
    this.indexPostHide = -1;
  }

  submit() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let post = this.formAddPost?.value;
    post.date = date
    post.user = "Phan Van Luan"
    post.comments = [];
    post.likes = 0;
    console.log(post)
    this.posts.push(post);
  }

  get titlePost() {
    return this.formAddPost?.get('title');
  }

}
