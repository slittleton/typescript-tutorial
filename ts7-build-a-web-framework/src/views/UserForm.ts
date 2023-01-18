import { User } from '../models/User';
import { UserProps } from '../interfaces/UserProps';
import { View } from './View';


export class UserForm extends View<User, UserProps> {



  // each event is has a key that is the event type
  // and a function that returns nothingp
  eventsMap(): { [key: string]: () => void; } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();

  };

  onSetNameClick = (): void => {
    // user parent element to find input and get value from it
    const input = this.parent.querySelector('input');


    if (input) {
      const name = input.value;
      this.model.set({ name });
    } else {
      console.log('No name entered');
    }


  };

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <div> User name: ${this.model.get('name')}</div>
        <div> User age: ${this.model.get('age')}</div>
        <input>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }




  // end of class
}