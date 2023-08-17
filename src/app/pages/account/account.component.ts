import {Component} from '@angular/core';
import {UsernameComponent} from "../../components/account/username/username.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    UsernameComponent
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent {
  name: string = 'András';

  onChangeName() {
    this.name = 'Anita';
  }

  onUserClicked($event: string) {
    alert($event);
  }

}
