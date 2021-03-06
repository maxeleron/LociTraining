const setFullpage = () => {
  new fullpage("#fullpage", {
    licenseKey: '8vNBb$F@d4', // my open source license

    //Navigation
    menu: "#menu",
    lockAnchors: false,
    anchors: ["firstPage", "secondPage"],
    navigation: false,
    navigationPosition: "right",
    navigationTooltips: ["firstSlide", "secondSlide"],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: "bottom",

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Access
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    //   sectionsColor: ["#ccc", "#fff"],
    //   paddingTop: "3em",
    //   paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Selectors options
    sectionSelector: ".section",
    //   slideSelector: ".slide",

    lazyLoading: true,

    //Events
    onLeave: function (origin, destination, direction) {},
    afterLoad: function (origin, destination, direction) {},
    afterRender: function () {},
    afterResize: function (width, height) {},
    afterReBuild: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (section, origin, destination, direction) {},
    onSlideLeave: function (section, origin, destination, direction) {},
  });
};
let myFullpage = setFullpage();
