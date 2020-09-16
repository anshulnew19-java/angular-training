import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url)
            .pipe(map(res => res ));
            
  }

  createPost(post){
    return this.httpClient.post(this.url,JSON.stringify(post))
            .pipe(map(res => res ));  
  }

  updatePost(post){
    return this.httpClient.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}))
            .pipe(map(res => res ));
  }

  deletePost(id){
    return this.httpClient.delete(this.url + "/" + id)
            .pipe(map(res => res ));
  }
}
