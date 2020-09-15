import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {
            
  }

  ngOnInit(): void {
    this.httpClient.get(this.url)
            .subscribe(response => {
              this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = "";
    this.httpClient.post(this.url,JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response.id;
          this.posts.splice(0,0,post);
          console.log(response);
        });
  }

  updatePost(post){
    this.httpClient.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}))
        .subscribe(response => {
          console.log(response);
        });    
  }

  deletePost(post){
    this.httpClient.delete(this.url + "/" + post.id)
        .subscribe(response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        });
  }
}
