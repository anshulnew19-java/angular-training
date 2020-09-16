import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  

  constructor(private service: PostService) {
            
  }

  ngOnInit(): void {
          this.service.getPosts()
            .subscribe(posts =>  this.posts = posts
              ,error => {
                    alert("An Unexpected error occured!!");
                    console.log(error);
          });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = "";
    this.service.createPost(post)
        .subscribe(newPost => {
          post['id'] = newPost['id'];
          this.posts.splice(0,0,post);
        },(error: Response) => {
          if(error.status === 400){
              //this.form.setErrors(error.json());
          }else{
            alert("An Unexpected error occured!!");
            console.log(error); 
          }
        });
  }

  updatePost(post){
    this.service.updatePost(post)
        .subscribe(updatedPost => {
          console.log(updatedPost);
        },error => {
          alert("An Unexpected error occured!!");
          console.log(error);
        });    
  }

  deletePost(post){
    this.service.deletePost(post.id)
        .subscribe(() => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        },(error: Response) => {
           if(error.status === 404){
              alert("This post has been already deleted!!");
           }else{
              alert("An Unexpected error cooured!!");
              console.log(error);
           }
        });
  }
}
