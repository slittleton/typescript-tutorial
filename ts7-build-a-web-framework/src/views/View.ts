import { HasId } from "../interfaces/HasId";
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {

  regions: { [key: string]: Element; } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string; } {
    return {};
  }

  eventsMap(): { [key: string]: () => void; } {
    return {};
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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelectorAll(selector);
      if (element) {
        this.regions[key];
      }

    }
  }

  onRender = (): void => {

  }

  render(): void {

    // delete any html that is already there 
    this.parent.innerHTML = '';

    // replace html with updated version 
    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }



  // end of class
}