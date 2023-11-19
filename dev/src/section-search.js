if (!customElements.get('search-main')) {
  customElements.define('search-main', class CartMain extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        console.log('search main')
      }
    }
  )
}