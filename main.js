(()=>{"use strict";function e(){const e=document.getElementById("content"),n=document.querySelector(".page-container");n&&e.removeChild(n),t("home");const a=document.createElement("div");a.classList.add("home-page-container"),a.classList.add("page-container");const i=document.createElement("div");i.classList.add("hero-img"),a.appendChild(i);const d=document.createElement("div");d.classList.add("hero-img-accent"),a.appendChild(d);const c=document.createElement("div");c.classList.add("about-container");const s=document.createElement("p");s.classList.add("about-text"),s.innerHTML='Lectus magna fringilla urna, porttitor rhoncus dolor purus non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non <span id="accent-word">enim.</span>',c.appendChild(s),a.appendChild(c);const o=document.createElement("div");o.classList.add("about-img"),c.appendChild(o),a.appendChild(c);const l=document.createElement("p");l.classList.add("home-bottom-text"),l.innerHTML="come and gather.",a.appendChild(l),e.appendChild(a)}function t(e){const t=document.getElementById(e+"-tab"),n=document.querySelector(".tab-active");n?(n.classList.remove("tab-active"),t.classList.add("tab-active")):t.classList.add("tab-active")}function n(e,t,n){const a=document.createElement("div");a.classList.add("menu-row-container");const i=document.createElement("div");i.classList.add("menu-row");const d=document.createElement("div");d.classList.add("menu-item-spacer");const c=document.createElement("p");c.classList.add("menu-item"),c.innerHTML=e;const s=document.createElement("p");s.classList.add("menu-item"),s.innerHTML=t,i.appendChild(c),i.appendChild(d),i.appendChild(s),a.appendChild(i);const o=document.createElement("p");return o.classList.add("menu-item-description"),o.innerHTML=n,a.appendChild(o),a}const a=document.getElementById("content");a.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("title-container");const n=document.createElement("h1");n.innerHTML="THE RESTAURANT",n.classList.add("title");const a=document.createElement("p");return a.innerHTML="- est. 2021 -",a.classList.add("subtitle"),t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),a.appendChild(function(){const a=document.createElement("div");a.classList.add("tabs-container");const i=document.createElement("ul");i.classList.add("tabs");const d=document.createElement("li");d.innerHTML="<a href=#>home</a>",d.id="home-tab",d.onclick=function(){e()},i.appendChild(d);const c=document.createElement("li");c.innerHTML="<a href=#>victurals</a>",c.id="victurals-tab",c.onclick=function(){!function(){const e=document.getElementById("content"),a=document.querySelector(".page-container");a&&e.removeChild(a),t("victurals");const i=document.createElement("div");i.classList.add("victurals-page-container"),i.classList.add("page-container"),document.createElement("div").classList.add("menu-section");const d=document.createElement("div");d.classList.add("menu-header");const c=document.createElement("h2");c.classList.add("menu-title"),c.innerHTML="from the farm",d.appendChild(c),i.appendChild(d);const s=document.createElement("div");s.classList.add("menu-header-accent"),i.appendChild(s);const o=document.createElement("div");o.classList.add("menu-img"),o.classList.add("farm-menu-img"),i.appendChild(o);const l=document.createElement("div");l.classList.add("menu-img-accent"),i.appendChild(l),i.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("beef tartare","$14","egestas pretium aenean pharetra magna ac placerat vestibulum")),e.appendChild(n("mussels provencale","$20","sed adipiscing diam donec adipiscing tristique risus nec")),e.appendChild(n("scallops","$18","vitae congue mauris rhoncus aenean vel elit scelerisque")),e.appendChild(n("flemish onion soup","$10","elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus")),e.appendChild(n("braised short ribs","$22","sagittis purus sit amet volutpat consequat mauris nunc")),e.appendChild(n("wedge salad","$10","nibh sed pulvinar proin gravida hendrerit lectus a")),e.appendChild(n("charcuterie","$16","non blandit massa enim nec dui nunc mattis")),e}()),e.appendChild(i)}()},i.appendChild(c);const s=document.createElement("li");s.innerHTML="<a href=#>libations</a>",s.id="libations-tab",s.onclick=function(){!function(){const e=document.getElementById("content"),a=document.querySelector(".page-container");a&&e.removeChild(a),t("libations");const i=document.createElement("div");i.classList.add("victurals-page-container"),i.classList.add("page-container");const d=document.createElement("div");d.classList.add("menu-header");const c=document.createElement("h2");c.classList.add("menu-title"),c.innerHTML="from the counter",d.appendChild(c),i.appendChild(d);const s=document.createElement("div");s.classList.add("menu-header-accent"),i.appendChild(s);const o=document.createElement("div");o.classList.add("menu-img"),o.classList.add("drink-menu-img"),i.appendChild(o);const l=document.createElement("div");l.classList.add("menu-img-accent"),i.appendChild(l),i.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("grog blossom","$14","adipiscing elit duis tristique sollicitudin nibh sit amet")),e.appendChild(n("la vie en rose","$13","massa tempor nec feugiat nisl pretium fusce id")),e.appendChild(n("italian american","$15","pellentesque dignissim enim sit amet venenatis urna cursus")),e.appendChild(n("quint's revenge","$13","id nibh tortor id aliquet lectus proin nibh")),e.appendChild(n("bonnie & clyde","$12","odio aenean sed adipiscing diam donec adipiscing tristique")),e.appendChild(n("whiskey sour","$10","ultricies integer quis auctor elit sed vulputate mi")),e.appendChild(n("aperol spritz","$12","egestas pretium aenean pharetra magna ac placerat vestibulum")),e}()),e.appendChild(i)}()},i.appendChild(s);const o=document.createElement("li");return o.innerHTML="<a href=#>contact</a>",o.id="contact-tab",o.onclick=function(){displayContact()},i.appendChild(o),a.appendChild(i),a}()),a.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("p");t.classList.add("footer-text"),t.innerHTML="copyright 2021 the restaurant inc.",e.appendChild(t);const n=document.createElement("ul");n.classList.add("footer-icons");const a=document.createElement("a");a.classList.add("footer-icon"),a.href="#",a.innerHTML='<img src="/static/images/social-icons/instagram.svg">',n.appendChild(a);const i=document.createElement("div");i.classList.add("footer-icon"),i.innerHTML='<a href="#"><img src="/static/images/social-icons/twitter.svg"></a>',n.appendChild(i);const d=document.createElement("div");return d.classList.add("footer-icon"),d.innerHTML='<a href="#"><img src="/static/images/social-icons/facebook.svg"></a>',n.appendChild(d),e.appendChild(n),e}()),e()})();