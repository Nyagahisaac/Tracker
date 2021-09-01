import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   
  private username!: string;
  private token = environment.apikey;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;


  constructor(private http:HttpClient) { }

  getProfileData () {
     
    return this.http.get(`https:api.github.com/search/repositories/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`)
  }
}
