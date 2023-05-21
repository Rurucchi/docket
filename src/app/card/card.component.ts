import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
@Injectable()
export class CardComponent {
  @Input() bgColor: string | undefined;
}
