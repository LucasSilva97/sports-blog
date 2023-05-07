import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {fake_database} from '../../data/fake_database';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""

  constructor(private route:ActivatedRoute){

  }

  private name:string | null = ""

  ngOnInit():void{
    this.route.paramMap.subscribe(
      value => this.name = value.get("name")
    )

    this.setValuesToComponent(this.name)
  }

  setValuesToComponent(name:string | null){
    const data = fake_database.filter(article => article.name == name)[0]

    this.photoCover = data.photoCover;
    this.contentDescription = data.description;
    this.contentTitle = data.title;
  }
}
