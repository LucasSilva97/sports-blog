import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights-card',
  templateUrl: './highlights-card.component.html',
  styleUrls: ['./highlights-card.component.css']
})
export class HighlightsCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  newsTitle:string = ""
  @Input()
  newsDescription:string = ""
  @Input()
  name:string = ""
  @Input()
  dateNews:string = ""
}
