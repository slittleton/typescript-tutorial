import { AxiosPromise, AxiosResponse } from "axios";
import { HasId } from "../interfaces/HasId";
import { ModelAttributes } from "../interfaces/ModelAttributes";
import { Events } from "../interfaces/Events";
import { Sync } from "../interfaces/Sync";




export class Model<T extends HasId> {

  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }


  // return reference to on() method from events
  // it makes it so that the arguments are decoupled from this specific method
  // in other words if you use a getter to just give you the function events.on() then
  // you don't have to worry about the arguments inside Eventing changing in the future.
  // Because if those arguments exist in eventing and are replicated in the "on" function
  // inside our user class then you would need to refactor the arguments in both of these methods
  // or if the on method was used inside a thousand other classes it would have to be refactored
  // inside all those classes as well. So instead we will use getters and setters to
  // avoid having to provide specific arguments inside the class where the Eventing instance is usedMy ti
  // in summary the getter returns the on() function from Eventing


  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(
        (response: AxiosResponse): void => {
          this.trigger('save');
        }
      )
      .catch(() => {
        this.trigger('error');
      });
  }
}