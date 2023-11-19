if (!customElements.get('product-card')) {
  customElements.define('product-card', class CardProduct extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.querySelector('.product-card__content_add').addEventListener('click', () => this.addToCart())
      }

      addToCart() {
        const form = this.querySelector('.shopify-product-form')
        const formUrl = window.theme.shopUrl + window.theme.routes.cart_add_url
        const formBody = {
          method: 'POST',
          body: new FormData(form)
        }
        fetch(formUrl, formBody).then((res) => {
          if (res.ok) {
            PubSub.publish('cart-updated')
            // PubSub.publish('open-drawer')
          }
        });
      }


    }
  )
}
