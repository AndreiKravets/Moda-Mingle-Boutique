if (!customElements.get('s-images-scroll')) {

  customElements.define('s-images-scroll', class SImagesScroll extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.addStyles()
        this.scrollEvent()
      }

      elemContainer = this.querySelector('.s-images-scroll__container')
      elemRow = this.querySelector('.s-images-scroll__row')
      elemWrapperImages = this.querySelector('.s-images-scroll__images')
      stepsArray = Array.from(this.querySelectorAll('.s-images-scroll__content_step'))
      screenHeight = window.screen.availHeight
      containerHeight = this.elemContainer.offsetHeight
      rowHeight = this.screenHeight * (80 / 100)
      containerTopPosition = (this.screenHeight - this.rowHeight) / 4
      containerBottomPosition = (this.containerHeight - this.rowHeight)
      activeStepIndex = 0

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
          this.elemRow.style.transform = 'translateY(' + (this.containerHeight - this.rowHeight + 50) + 'px)'
        } else {
          this.elemRow.classList.remove('active--bottom')
          this.elemRow.style.transform = 'translateY(0px)'
        }
      }

      translateImages() {
        if (this.elemContainer.getBoundingClientRect().y < 0 && this.elemContainer.getBoundingClientRect().y > -(this.containerHeight - this.rowHeight)) {
          this.elemWrapperImages.style.transform = 'translateY(' + (this.elemContainer.getBoundingClientRect().y) + 'px)'
        }
      }

      switchSteps() {
        let stepIndex = Math.abs(Math.round((this.elemContainer.offsetHeight + this.elemContainer.getBoundingClientRect().y) / (this.elemContainer.offsetHeight / this.stepsArray.length) - this.stepsArray.length))
        if (this.elemContainer.getBoundingClientRect().y < 0 && this.elemContainer.getBoundingClientRect().y > -(this.containerHeight - this.rowHeight) && this.activeStepIndex != stepIndex) {
          this.activeStepIndex = stepIndex
          this.stepsArray[stepIndex -1] == undefined ? false : this.stepsArray[stepIndex -1].classList = 's-images-scroll__content_step s-images-scroll__content_step--top'
          this.stepsArray[stepIndex] == undefined ? false : this.stepsArray[stepIndex].classList = 's-images-scroll__content_step s-images-scroll__content_step--active'
          this.stepsArray[stepIndex + 1] == undefined ? false : this.stepsArray[stepIndex +1].classList = 's-images-scroll__content_step s-images-scroll__content_step--bottom'
        }
      }

      scrollEvent() {
        window.addEventListener('scroll', () => (this.toggleFixedSection(), this.translateImages(), this.switchSteps()))
      }
    }
  )
}