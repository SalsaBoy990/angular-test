import { Component } from '@angular/core';
import {HobbyComponent} from "../../components/hobbies/hobby/hobby.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HobbyComponent
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {
  hobbies: string[] = [
    'Skiing', 'Dancing', 'Running'
  ];

  hobby: string = '';
  message: string = '';

  onAddHobby() {
    this.hobbies.push(this.hobby);
    this.message = '';
  }

  onDeleteHobby(hobby: string) {
    const position = this.hobbies.indexOf(hobby);
    this.hobbies.splice(position, 1);
    /*    const hobby: string = this.hobbies[index];
        this.hobbies.splice(index, 1);*/
    this.message = '"' + hobby + '"' + ' was deleted.';
  }

  hasMoreThanThreeHobbies(): boolean {
    return this.hobbies.length > 3
  }

  getColor(element: number) {
    return (element % 2 === 0) ? 'tomato' : 'green';
  }
}
