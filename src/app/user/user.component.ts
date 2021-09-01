import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userProfile: any;
  repos: any;
  followers: any;
  following: any;
  username!: string;
  notFound = false;
  http: any;
  constructor(private service: UserService) { }
   
  searchUser() {
    this.service.updateFields(this.username);
    this.service.getProfileData()
      .subscribe(profile => {

        
        // console.log(profile);
        this.userProfile = profile;
      }, error => {
        this.notFound = !this.notFound;
      });
    // clears input field
    this.username = '';

    this.service.getRepoData()
      .subscribe(repos => {
        this.repos = repos;
        // console.log(repos);
      });

    this.service.getFollowers()
      .subscribe(followers => {
        this.followers = followers;
      })

    this.service.getFollowing()
      .subscribe(following => {
        this.following = following;
      })
    }

  ngOnInit(): void {
  }

}
