import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  
  private url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.url)
            .pipe(map(res => res ));
            
  }

}
