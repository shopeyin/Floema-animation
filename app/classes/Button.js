import Component from 'classes/Component'
import GSAP from 'gsap'
export default class Button extends Component {
  constructor ({ element }) {
    super({ element })

    this.path = element.querySelector('path:last-child')

    this.pathLength = this.path.getTotalLength()

    this.timeline = GSAP.timeline({ paused: true })
    this.timeline.fromTo(this.path, {
      strokeDashoffset: this.path.getTotalLength(),
      strokeDasharray: `${this.path.getTotalLength()} ${this.path.getTotalLength()}`
    }, {
      strokeDashoffset: 0,
      strokeDasharray: `${this.path.getTotalLength()} ${this.path.getTotalLength()}`
    })
  }

  onMouseEnter () {
    this.timeline.play()
  }

  onMouseLeave () {
    this.timeline.reverse()
  }

  addEventListeners () {
    this.onMouseEnterEvent = this.onMouseEnter.bind(this)
    this.onMouseLeaveEvent = this.onMouseLeave.bind(this)
    this.element.addEventListener('mouseenter', this.onMouseEnterEvent)
    this.element.addEventListener('mouseleave', this.onMouseLeaveEvent)
  }

  removeEventListeners () {
    this.element.removeEventListener('mouseenter', this.onMouseEnter)
    this.element.removeEventListener('mouseleave', this.onMouseLeave)
  }
}
