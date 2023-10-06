if (!customElements.get('s-card-slider')) {

  customElements.define('s-card-slider', class SCardSlider extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initSlider()
    }

    initSlider() {

    }
  })

}