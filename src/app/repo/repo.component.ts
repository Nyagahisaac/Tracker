import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  searchRepo(){}

  ngOnInit(): void {
  }

}
