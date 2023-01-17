

export class UserForm {


  constructor(public parent: Element) { }


  // each event is has a key that is the event type
  // and a function that returns nothing
  eventsMap(): { [key: string]:()=>void } {
    return {
      'click:button': this.onButtonClick
    };
  }


  onButtonClick(): void {
    console.log('HI');
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <input>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');


    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }




  // end of class
}