if (!customElements.get('s-images-scroll')) {

  customElements.define('s-images-scroll', class SImagesScroll extends HTMLElement {
      constructor() {
        super();
        this.scrollBound = this.desktopScroll.bind(this)
      }

      screenHeight
      containerHeight
      rowHeight
      containerTopPosition
      containerBottomPosition
      elemContainer = this.querySelector('.s-images-scroll__container')
      elemRow = this.querySelector('.s-images-scroll__row')
      elemWrapperImages = this.querySelector('.s-images-scroll__images')
      stepsArray = Array.from(this.querySelectorAll('.s-images-scroll__content_step'))
      activeStepIndex = 0
      scrollEvent = false

      connectedCallback() {
        window.addEventListener("resize", this.resizeEvent.bind(this))

        if (window.innerWidth > 900) {
          this.initVariables()
          this.addStyles()
          window.addEventListener('scroll', this.scrollBound)
          this.scrollEvent = true
        }
      }

      resizeEvent() {
        if (window.innerWidth > 900) {
          this.initVariables()
          this.addStyles()
          if (!this.scrollEvent) {
            window.addEventListener('scroll', this.scrollBound)
            this.scrollEvent = true
          }
        } else {
          if (this.scrollEvent) {
            window.removeEventListener('scroll', this.scrollBound)
            this.scrollEvent = false
            this.removeStylesAndClasses()
          }
        }
      }

      desktopScroll() {
        this.toggleFixedSection()
        this.translateImages()
        this.switchSteps()
      }


      initVariables() {
        this.screenHeight = document.documentElement.clientHeight
        this.containerHeight = this.elemWrapperImages.offsetHeight
        this.rowHeight = this.screenHeight * (80 / 100)
        this.containerTopPosition = this.screenHeight * (10 / 100)
        this.containerBottomPosition = (this.containerHeight - this.rowHeight - this.containerTopPosition)
      }
      removeStylesAndClasses(){
        this.elemContainer.style.height = 'auto'
        this.elemRow.style.height = 'auto'
        this.elemRow.style.top = 'unset'
        this.elemRow.style.transform = 'translateY(0)'
        this.elemWrapperImages.style.transform = 'translateY(0)'
        this.elemRow.classList = 's-images-scroll__row'
      }
      addStyles() {
        this.elemContainer.style.height = this.containerHeight + 'px'
        this.elemRow.style.height = this.rowHeight + 'px'
        this.elemRow.style.top = this.containerTopPosition + 'px'
      }

      toggleFixedSection() {
        if (this.elemContainer.getBoundingClientRect().y < this.containerTopPosition) {
          this.elemRow.classList.add('active')
        } else {
          if (this.elemRow.classList.value.includes('active')) {
            this.elemRow.classList.remove('active')
            this.elemWrapperImages.style.transform = 'translateY(0px)'
          }
        }

        if (this.elemContainer.getBoundingClientRect().y < -this.containerBottomPosition) {
          this.elemRow.classList.add('active--bottom')
          this.elemRow.style.transform = 'translateY(' + (this.containerHeight - this.rowHeight) + 'px)'
          this.elemWrapperImages.style.transform = 'translateY(' + -(this.containerHeight - this.rowHeight) + 'px)'

        } else {
          this.elemRow.classList.remove('active--bottom')
          this.elemRow.style.transform = 'translateY(0px)'
        }
      }

      translateImages() {
        if (this.elemRow.classList.length == 2) {
          this.elemWrapperImages.style.transform = 'translateY(' + (this.elemContainer.getBoundingClientRect().y - this.containerTopPosition) + 'px)'
        }
      }

      switchSteps() {
        let stepIndex = Math.abs(Math.round((this.elemContainer.offsetHeight + this.elemContainer.getBoundingClientRect().y) / (this.elemContainer.offsetHeight / this.stepsArray.length) - this.stepsArray.length))
        if (this.elemRow.classList.length == 2 && this.activeStepIndex != stepIndex) {
          this.activeStepIndex = stepIndex
          this.stepsArray.map((e, index) => {
            if (stepIndex > index) {
              e.classList = 's-images-scroll__content_step s-images-scroll__content_step--top'
            } else if (stepIndex === index) {
              e.classList = 's-images-scroll__content_step s-images-scroll__content_step--active'
            } else {
              e.classList = 's-images-scroll__content_step s-images-scroll__content_step--bottom'
            }
          })
        }
      }

    }
  )
}