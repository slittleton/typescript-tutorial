
import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";



export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize:(json: K)=> T
  ) { }


  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }


  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          //Deserialize function takes in JSON and turns it into an object of type T (such as User)
          this.models.push(this.deserialize(value));
        });
      });

    this.trigger('change');
  }




  //end of class
}