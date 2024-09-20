import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value!: string;
}
