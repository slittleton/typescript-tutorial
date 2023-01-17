
type Callback = () => void;


export class Eventing {
  // object with a key value pair where the value is a list of callbacks for each key
  events: { [key: string]: Callback[] } = {};


  on = (eventName: string, callback: Callback): void => {
    // if the eventName is undefined then use [] instead
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    // set key-value pair for eventName and the array of handlers 
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    // if there are callbacks in the array, run each callback
    handlers.forEach(callback => {
      callback();
    });

  };


}