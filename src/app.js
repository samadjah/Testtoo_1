console.log("Hello world!");

//////////////////////////////////////////////////////////////////////

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    // parem oleks kirjutada,aga jätab et arusaadav oleks(!ent.isIntersecting)
    if (ent.isIntersecting === false) {
      //  muutisselleära bodyks document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
