import { gsap } from 'gsap';
import { closestEdge } from './utils';

export class MenuItem {
  constructor(el) {
    // .menu__item element
    this = { el: el };
    // .menu__item-link element
    this.link = this.el.querySelector('a.menu__item-link');
    // .marquee element
    this.marquee = this.el.querySelector('.marquee');
    // .marquee__inner-wrap element
    this.marqueeInner = this.marquee.querySelector(
      '.marquee__inner-wrap'
    );
    // some default options for the animation's speed and easing
    this.animationDefaults = { duration: 0.6, ease: 'expo' };
    // events initialization
    this.initEvents();
  }
  initEvents() {
    this.onMouseEnterFn = (ev) => this.mouseEnter(ev);
    this.link.addEventListener('mouseenter', this.onMouseEnterFn);
    this.onMouseLeaveFn = (ev) => this.mouseLeave(ev);
    this.link.addEventListener('mouseleave', this.onMouseLeaveFn);
  }
  mouseEnter(ev) {
    // find closest side to the mouse
    const edge = this.findClosestEdge(ev);

    // set the initial y position for both the marquee and marqueeInner elements
    // for the reveal effect to happen, both start at opposite positions
    // the directions are different depending on the direction the cursor enters the element (bottom or top)
    gsap
      .timeline({ defaults: this.animationDefaults })
      .set(this.marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(this.marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([this.marquee, this.marqueeInner], { y: '0%' }, 0);
  }
  mouseLeave(ev) {
    // find closest side to the mouse
    const edge = this.findClosestEdge(ev);

    gsap
      .timeline({ defaults: this.animationDefaults })
      .to(this.marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(this.marqueeInner, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  }
  // find closest side to the mouse when entering/leaving
  findClosestEdge(ev) {
    const x = ev.pageX - this.el.offsetLeft;
    const y = ev.pageY - this.el.offsetTop;
    return closestEdge(x, y, this.el.clientWidth, this.el.clientHeight);
  }
}
