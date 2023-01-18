import { HasId } from "../interfaces/HasId";
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>,K extends HasId> {

  abstract eventsMap(): { [key: string]: () => void; };
  abstract template(): string;


  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  // update/cause a re-render of the page
  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }


  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    // obj = {"click:button":()=>{}}
    // the key contains info describing the even and the selector it acts on 'click:button' 
    // the value is the function/event that is called eventsMap[eventKey] = ()=>{}
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });

    }
  }

  render(): void {

    // delete any html that is already there 
    this.parent.innerHTML = '';

    // replace html with updated version 
    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }



  // end of class
}