import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  repoProfile:any;
   name!: string;
   fullname!: string;
   description!: string;
   url!: string;
   language!: string;
   created_at!: string;
   clone_url!: string;
  repositories!: string;
  
  constructor(private service : ServiceService) { }

  searchRepo(){
    this.service.updateFields(this.repositories);
    this.service.getRepoData().subscribe(
      repo=>{
        this.repoProfile = repo;
        console.log(this.repoProfile);
      },error=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
