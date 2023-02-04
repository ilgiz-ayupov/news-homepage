class DomElement {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
  }

  isEqual(otherObject) {
    return this.$el === otherObject.$el;
  }
}

const $ = (selector) => {
  return new DomElement(selector);
};
