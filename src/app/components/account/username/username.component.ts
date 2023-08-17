import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {InfoComponent} from "../info/info.component";


@Component({
  standalone: true,
  selector: 'app-username',
  imports: [
    CommonModule,
    InfoComponent
  ],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.sass']
})
export class UsernameComponent {

  // input
  @Input() username: string = 'András';

  // event
  @Output() userClicked = new EventEmitter<string>();

  onUserNameClicked() {
    this.userClicked.emit(this.username);
  }

}
