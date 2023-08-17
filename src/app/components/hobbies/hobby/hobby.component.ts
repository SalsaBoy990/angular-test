import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.sass']
})
export class HobbyComponent {
  @Input() hobbyName: string = '';
  @Input() numberOfHobbies: number = 0;
  @Output() hobbyDeleted = new EventEmitter<string>();

  hasMoreThanThreeHobbies(): boolean {
    return this.numberOfHobbies > 3
  }

  onDeleteHobby() {
    this.hobbyDeleted.emit(this.hobbyName);
  }
}
