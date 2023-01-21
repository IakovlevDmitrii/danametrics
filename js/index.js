document.addEventListener('DOMContentLoaded', () => {
  heroAnimation()
  underlineAnimation()
  analyticVector()
  // zoomCards()
  tryParallax()
  showConfidence()
  showIndicators()
  // showPartners()

  const bubble1 = document.querySelector('.hero_main__animation-img-bubble--1'),
    bubble2 = document.querySelector('.hero_main__animation-img-bubble--2'),
    bubble1Anim = shakeBubble(bubble1),
    bubble2Anim = shakeBubble(bubble2, -10)

  bubble1.addEventListener('mouseenter', event => bubble1Anim.resume())
  bubble1.addEventListener('mouseleave', event => bubble1Anim.pause())
  bubble2.addEventListener('mouseenter', event => bubble2Anim.resume())
  bubble2.addEventListener('mouseleave', event => bubble2Anim.pause())

})

function heroAnimation(){

  const grid = document.querySelector('.hero_main__animation')
  const gridColWidth = window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split('px ')
  const [gridColWidth1, gridColWidth2, gridColWidth3, gridColWidth4] = gridColWidth.map(el => parseInt(el))
  const gridHeight = window.getComputedStyle(grid).getPropertyValue("grid-template-rows").split('px ')
  const [gridHeight1, gridHeight2] = gridHeight

  const block1 = document.querySelector('.hero_main__animation-img-wrapper--1'),
  block2 = document.querySelector('.hero_main__animation-img-wrapper--2'),
  block3 = document.querySelector('.hero_main__animation-img-wrapper--3'),
  block4 = document.querySelector('.hero_main__animation-img-wrapper--4'),
    block5 = document.querySelector('.hero_main__animation-img-wrapper--5'),
    block6 = document.querySelector('.hero_main__animation-img-wrapper--6'),
    block7 = document.querySelector('.hero_main__animation-img-wrapper--7'),
    arrow = document.querySelector('.hero_main__animation-arrow-wrapper'),
    bubble1 = document.querySelector('.hero_main__animation-img-bubble--1'),
    bubble2 = document.querySelector('.hero_main__animation-img-bubble--2')

    //Hero Pics animations
    const tlHeroAnim = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: 'bounce',
        delay: 0.2
      },
    })

  tlHeroAnim
    .add('start', 0)
    .to(grid, {
      delay: 0.5,
      duration: 1,
      clipPath: 'circle(100% at 55% 50%)',
      ease: 'none',
    })
    .to(block3, {
      duration: 0.5,
      rotate: 360,
      ease: 'elastic',
    },
    '-=180%')
  .to(block1, { //man
    height: gridHeight1,
    y: 0,
  },
    '-=80%')
    .to(block1, {
      width: gridColWidth1 + gridColWidth2,
      x: 0,
    })
    .to(block6, { //pink egg
      x: gridColWidth4,
    },
    '-=220%')
    .to(block6, {
      height: gridHeight1,
      y: 0,
    },
    '-=30%')
    .to(block5, { // guy
      width: gridColWidth1,
      x: 0,
    },
      '-=150%')
    .to(block5, {
      delay: 0,
      height: gridHeight1,
      y: 0,
    },
      '-=20%')
    .to(block2, { //bot
      height: gridHeight1,
      y: 0,
    },
      '-=180%')
    .to(block2, {
      width: gridColWidth1,
      x: 0,
    },
      '-=80%')
    .to(block7, { //blue egg
      width: gridColWidth2 + gridColWidth3,
      x: 0,
    },
      '-=220%')
    .to(block7, {
      height: gridHeight1,
      y: 0,
    })
    .to(block6, { //pink egg
      x: 0
    },
      '-=220%')
    .to(block3, { //graph
      width: gridColWidth1,
      x: 0,
    },
      '-=120%')
    .to(block4, { //girl
      width: gridColWidth2 + gridColWidth3 + gridColWidth4,
    },
      '<')
    .add('pics-end')

    //arrow on 01-hero animation
  tlHeroAnim.to(arrow, {
    clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
    delay: 1.5,
    duration: 3.5,
    ease: 'none',
  },
  'start')

    //bubbles animation
  tlHeroAnim.to(bubble1, {
    clipPath: 'circle(125% at 100% 100%)',
    ease: 'none',
    duration: 0.2,
    delay: 0,
  },
  'pics-end')
    .to(bubble2, {
      clipPath: 'circle(125% at 0% 100%)',
      ease: 'none',
      duration: 0.2,
      delay: 0,
    },
      '<')
}

//TODO bubbles animation on hover
function shakeBubble(bubble, deg){
  return gsap.fromTo(bubble, {
    rotate: '0deg',
  },
    {
      rotate: `${deg || 10}deg`,
      ease: 'elastic',
      repeat: -1,
      yoyo: true,
    }).pause()
}

function underlineAnimation(){
  const underline = document.querySelector('.hero_header__underline')

  gsap.to(underline,{
    duration: 1,
    delay: 0.8,
    ease: "sine",
    width:'53%',
  })
}

// plane animation
function analyticVector () {
  gsap.timeline({defaults: {duration: 1}})
  .from(".slogan_step", {
    duration: 1,
    height: "auto",
    ease: "power1.out",
    stagger: {
      each: 0.1
    },
    scrollTrigger: {
      trigger: '.slogan',
      start: "top-=650px 20%",
      end: "bottom-=550px",
      scrub: true
    }
  })
  .to('.slogan-picture_plane', {
    clipPath: `polygon(0% 0%, 0% 100%, 160% 100%, 80% 0%)`,
    delay: 1,
    duration: 1.5,
    ease: 'power1.out',
  })
}

function tryParallax () {
  gsap.timeline({duration: 0.8, ease: 'power3' })
    .from('.usage', {
    scrollTrigger: {
      trigger: '.usage',
      start: "top 80%",
      end: "bottom 20%"
    }
  })
    .fromTo('.usage-img', {
      autoAlpha: 0.5
    },
    {
      duration: 2,
      repeat: -1,
      autoAlpha: 1,
      ease: 'bounce'
    })
    .to(".usage_ball-4", {
      xPercent: 30,
      ease: "none",
      scale: 1.2,
      scrollTrigger: {
        trigger: ".usage-img",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    })
    .from(".big-img", {
      backgroundPosition: "0% 50%",
      scale: 1,
      xPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".usage",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    })
    .from(".usage_ball-1", {
      backgroundPosition: "0% 50%",
      ease: "none",
      xPercent: 30,
      scrollTrigger: {
        trigger: ".usage-img",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    })
    .from(".usage_ball-2", {
      backgroundPosition: "0% 80%",
      ease: "none",
      scale: 1,
      xPercent: 30,
      scrollTrigger: {
        trigger: ".usage-img",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    })
    .from(".usage_ball-3", {
      backgroundPosition: "0% 50%",
      ease: "none",
      scale: 1,
      xPercent: 30,
      scrollTrigger: {
        trigger: ".usage-img",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    });
}

function showConfidence () {
  gsap.fromTo('.confidence_img',
    {
      duration: 0.5,
      autoAlpha: 0,
        x: -30,
      scrollTrigger: {
          trigger: ".confidence",
        start: "top-=150 center",
        scrub: true,
      }
    },
      {
        duration: 0.5,
        autoAlpha:1,
        x:10,
        stagger: {
          from: "start",
          axis: "x",
          each: 0.7
        },
        scrollTrigger: {
          trigger: ".confidence",
          start: "top-=150 center",
          end: "bottom-=150 center",
          scrub: true,
        }
      }
      )
}

function showIndicators () {
  gsap.fromTo('.indicator_item',
    { duration: 1,
      xPercent: -30,
      stagger: {
        amount: 1
      },
      ease: "elastic",
      scrollTrigger: {
        trigger: ".indicator",
        start: "top-=150 center",
        scrub: true,
      }
    },{
        xPercent: 0,
        stagger: {
          amount: 1
        },
        scrollTrigger: {
          trigger: ".indicator",
          start: "top-=150 center",
          // end: "bottom-=50 center",
          end: "center-=100 center",
          scrub: true,
        }
      })
}