if (!customElements.get('s-images-scroll')) {

  customElements.define('s-images-scroll', class SImagesScroll extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.addStyles()
        this.scrollEvent()
        console.log(this.screenHeight)
        console.log(this.rowHeight)
      }

      elemContainer = this.querySelector('.s-images-scroll__container')
      elemRow = this.querySelector('.s-images-scroll__row')
      screenHeight = window.screen.availHeight
      containerHeight = this.elemContainer.offsetHeight
      rowHeight = this.screenHeight * (80 / 100)
      containerTopPosition = (this.screenHeight - this.rowHeight) / 4
      containerBottomPosition = (this.containerHeight - this.rowHeight)


      addStyles() {
        this.elemContainer.style.height = this.containerHeight + 'px'
        this.elemRow.style.height = this.rowHeight + 'px'
        this.elemRow.style.top = this.containerTopPosition + 'px'
      }

      toggleFixedSection() {
        this.elemContainer.getBoundingClientRect().y < this.containerTopPosition
          ? this.elemRow.classList.add('active')
          : this.elemRow.classList.remove('active')

        if (this.elemContainer.getBoundingClientRect().y < -this.containerBottomPosition) {
          this.elemRow.classList.add('active--bottom')
          this.elemRow.style.transform = 'translateY('+ (this.containerHeight - this.rowHeight + 50) +'px)'
        } else {
          this.elemRow.classList.remove('active--bottom')
          this.elemRow.style.transform = 'translateY(0px)'
        }
      }

      scrollEvent() {
        window.addEventListener('scroll', () => (this.toggleFixedSection()))
      }
    }
  )
}