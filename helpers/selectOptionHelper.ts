export class Subject {
  private observers: any[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsuscribe(observer) {
    this.observers = this.observers.filter((e) => e != 0);
  }

  notify(model) {
    this.observers.forEach((observer) => {
      observer.notify(model);
    });
  }
}

class InputSubject extends Subject {
  private text: string;

  constructor() {
    super();
    this.text = "";
  }

  notify(text) {
    this.text = text;

    super.notify(this);
  }
}


class Obverver {
  notify(subject) {
    
  }
}