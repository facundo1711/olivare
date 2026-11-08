const navItems = [
  ["Inicio","index.html"],["Productos","productos.html"],["Nosotros","nosotros.html"],["Recetas","recetas.html"],["Packs","packs.html"],["Contacto","contacto.html"]
];

const leafMark = `<svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 37C17 27 24 17 38 7M14 31C7 25 6 19 7 14C14 16 18 20 18 26M23 21C21 13 24 8 29 4C34 10 33 16 28 20M30 14C35 12 40 13 44 17C39 22 34 22 30 19" stroke="#D8C9A4" stroke-width="1.7" stroke-linecap="round"/><path d="M8 37L4 43" stroke="#D8C9A4" stroke-width="1.7" stroke-linecap="round"/></svg>`;

const currentPage = location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("site-header");

if (header) {
  header.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark site-nav"><div class="container"><a class="navbar-brand" href="index.html">${leafMark}<span>OLIVARÉ</span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Abrir menú"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav ms-auto">${navItems.map(([name,url])=>`<li class="nav-item"><a class="nav-link ${currentPage===url?'active':''}" ${currentPage===url?'aria-current="page"':''} href="${url}">${name}</a></li>`).join("")}</ul><div class="nav-actions ms-lg-4"><a href="productos.html" aria-label="Ver productos"><i class="bi bi-search"></i></a><a href="packs.html" aria-label="Ver packs y regalos"><i class="bi bi-bag"></i></a></div></div></div></nav>`;

}
const footer = document.getElementById("site-footer");

if (footer) {
  footer.className = "site-footer";

  footer.innerHTML = `<div class="container"><div class="row g-4"><div class="col-lg-4"><a class="footer-brand" href="index.html">${leafMark} OLIVARÉ</a><p class="footer-tag mt-2">ACEITES · ACEITUNAS · CONSERVAS</p><p class="small mt-3 opacity-75">El origen de lo extraordinario.</p></div><div class="col-6 col-lg-2"><h2 class="footer-heading">Navegación</h2><ul class="footer-links">${navItems.map(([name,url])=>`<li><a href="${url}">${name}</a></li>`).join("")}</ul></div><div class="col-6 col-lg-3"><h2 class="footer-heading">Contacto</h2><ul class="footer-links"><li><i class="bi bi-geo-alt me-2"></i>San Juan, Argentina</li><li><i class="bi bi-envelope me-2"></i>hola@olivare.com.ar</li><li class="small opacity-50">Datos de contacto ilustrativos</li></ul></div><div class="col-lg-3"><h2 class="footer-heading">Seguinos</h2><div class="social-links"><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a></div><p class="small mt-3 opacity-75">Compartí el sabor de tu mesa.</p></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} OLIVARÉ. Proyecto académico ficticio.</span><span>Diseñado con identidad sanjuanina.</span></div></div>`;

}
const products = [
 {name:"Aceite de oliva extra virgen",category:"Aceites",desc:"Intensidad y equilibrio en cada gota.",img:"assets/aceite-oliva.webp",label:"Selección esencial"},
 {name:"Aceite de oliva reserva",category:"Aceites",desc:"Un perfil aromático para disfrutar despacio.",img:"assets/aceite-oliva.webp",label:"Selección especial"},
 {name:"Aceite de oliva clásico",category:"Aceites",desc:"Un aliado versátil para todos los días.",img:"assets/aceite-oliva.webp",label:"Para tu mesa"},
 {name:"Aceitunas verdes",category:"Aceitunas",desc:"Textura firme y sabor delicado.",img:"assets/aceitunas-gourmet.webp",label:"Sabor tradicional"},
 {name:"Aceitunas negras",category:"Aceitunas",desc:"Un toque intenso para compartir.",img:"assets/aceitunas-gourmet.webp",label:"Selección gourmet"},
 {name:"Conservas artesanales",category:"Conservas",desc:"Sabores preparados para acompañar tus comidas.",img:"assets/conservas-gourmet.webp",label:"Hecho para compartir"}
];

function productCard(p){return `<div class="col-sm-6 col-lg-4 product-item" data-category="${p.category}"><article class="product-card"><img src="${p.img}" alt="${p.name}" loading="lazy"><div class="product-card-body"><span class="card-kicker">${p.label}</span><h3 class="mt-2">${p.name}</h3><p>${p.desc}</p><a class="product-link" href="contacto.html">Consultar producto <i class="bi bi-arrow-right"></i></a></div></article></div>`}
const featured = document.getElementById("featured-products");

if(featured) featured.innerHTML = [products[0],products[3],products[5]].map(productCard).join("");

const catalog = document.getElementById("product-catalog");

if(catalog){catalog.innerHTML=products.map(productCard).join("");
document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
document.querySelectorAll(".product-item").forEach(card=>card.classList.toggle("d-none",btn.dataset.filter!=="Todos"&&card.dataset.category!==btn.dataset.filter));
}));
}
const recipes = [
 {name:"Bruschettas con tomate y aceite de oliva",cat:"Entradas",time:"15 min",level:"Fácil",img:"https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",desc:"Pan tostado, tomate fresco, hierbas y un buen hilo de aceite.",ingredients:["4 rebanadas de pan artesanal","2 tomates maduros","Aceite de oliva extra virgen OLIVARÉ","Hojas de albahaca fresca","Sal y pimienta a gusto"],steps:["Cortá los tomates en cubos pequeños y mezclalos con albahaca, sal y pimienta.","Tostá las rebanadas de pan hasta que estén doradas.","Distribuí el tomate sobre el pan y terminá con un hilo de aceite de oliva."]},
 {name:"Ensalada mediterránea",cat:"Entradas",time:"20 min",level:"Fácil",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",desc:"Una combinación fresca, colorida y llena de textura.",ingredients:["Hojas verdes variadas","1 tomate","1 pepino","Aceitunas verdes o negras","Aceite de oliva extra virgen OLIVARÉ","Jugo de limón, sal y pimienta"],steps:["Lavá y secá las verduras.","Cortá el tomate y el pepino en trozos y mezclalos con las hojas verdes.","Agregá las aceitunas y condimentá con aceite de oliva, limón, sal y pimienta."]},
 {name:"Vegetales al horno con oliva",cat:"Principales",time:"35 min",level:"Fácil",img:"assets/conservas-gourmet.webp",desc:"Vegetales dorados con hierbas y aceite de oliva.",ingredients:["1 zucchini","1 berenjena pequeña","1 morrón","1 cebolla morada","Aceite de oliva OLIVARÉ","Romero, sal y pimienta"],steps:["Precalentá el horno a 200 °C.","Cortá los vegetales en trozos similares y distribuilos en una fuente.","Condimentá con aceite de oliva, romero, sal y pimienta.","Horneá durante 25 a 30 minutos, hasta que estén tiernos y dorados."]},
 {name:"Pan casero con aceite y hierbas",cat:"Consejos",time:"10 min",level:"Fácil",img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",desc:"Una forma simple de disfrutar los aromas del aceite.",ingredients:["Pan casero o artesanal","Aceite de oliva extra virgen OLIVARÉ","Orégano o romero","Una pizca de sal"],steps:["Cortá el pan en rebanadas.","Serví el aceite de oliva en un cuenco pequeño.","Agregá las hierbas y una pizca de sal.","Mojá el pan en el aceite y disfrutá."]},
 {name:"Pasta con tomates y aceitunas",cat:"Principales",time:"25 min",level:"Media",img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",desc:"Una receta reconfortante con ingredientes sencillos.",ingredients:["250 g de pasta","1 taza de tomates cherry","Aceitunas negras descarozadas","2 cucharadas de aceite de oliva OLIVARÉ","Ajo y albahaca a gusto"],steps:["Cociná la pasta en agua con sal siguiendo las indicaciones del envase.","Salteá el ajo y los tomates con aceite de oliva.","Sumá las aceitunas y mezclá con la pasta escurrida.","Terminá con albahaca fresca y un hilo de aceite."]},
 {name:"Cómo elegir y conservar el aceite",cat:"Consejos",time:"5 min",level:"Guía",img:"assets/aceite-oliva.webp",desc:"Consejos básicos para cuidar aroma, sabor y frescura.",ingredients:["Elegí un aceite en envase oscuro o protegido de la luz","Guardalo lejos del calor y la humedad","Cerrá bien la botella después de usarla"],steps:["Conservá el aceite en un lugar fresco y alejado de la luz directa.","Evitá dejar la botella cerca del horno o de fuentes de calor.","Cerrá el envase después de cada uso para preservar mejor sus cualidades."]}
];


function showRecipeModal(recipe) {
  let modalElement = document.getElementById("recipe-detail-modal");

  if (!modalElement) {
    modalElement = document.createElement("div");
    modalElement.id = "recipe-detail-modal";
    modalElement.className = "modal fade recipe-detail-modal";
    modalElement.tabIndex = -1;
    modalElement.setAttribute("aria-labelledby", "recipe-detail-title");
    modalElement.setAttribute("aria-hidden", "true");
    modalElement.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <span class="eyebrow mb-0">INSPIRACIÓN OLIVARÉ</span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body p-0">
            <img class="recipe-modal-image" id="recipe-modal-image" src="" alt="">
            <div class="recipe-modal-content">
              <span class="card-kicker" id="recipe-modal-category"></span>
              <h2 id="recipe-detail-title"></h2>
              <p class="recipe-modal-description" id="recipe-modal-description"></p>
              <div class="recipe-modal-meta" id="recipe-modal-meta"></div>
              <div class="row g-4">
                <div class="col-md-5">
                  <h3>Ingredientes</h3>
                  <ul class="recipe-modal-list" id="recipe-modal-ingredients"></ul>
                </div>
                <div class="col-md-7">
                  <h3>Preparación</h3>
                  <ol class="recipe-modal-list recipe-modal-steps" id="recipe-modal-steps"></ol>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <span class="recipe-modal-signature">OLIVARÉ · El origen de lo extraordinario</span>
            <button type="button" class="btn btn-olive" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modalElement);
  }

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const image = modalElement.querySelector("#recipe-modal-image");
  image.src = recipe.img;
  image.alt = recipe.name;
  modalElement.querySelector("#recipe-modal-category").textContent = recipe.cat;
  modalElement.querySelector("#recipe-detail-title").textContent = recipe.name;
  modalElement.querySelector("#recipe-modal-description").textContent = recipe.desc;
  modalElement.querySelector("#recipe-modal-meta").innerHTML =
    `<span><i class="bi bi-clock"></i> ${escapeHTML(recipe.time)}</span>
     <span><i class="bi bi-check-circle"></i> ${escapeHTML(recipe.level)}</span>`;

  modalElement.querySelector("#recipe-modal-ingredients").innerHTML =
    (recipe.ingredients || []).map(item => `<li>${escapeHTML(item)}</li>`).join("");
  modalElement.querySelector("#recipe-modal-steps").innerHTML =
    (recipe.steps || []).map(step => `<li>${escapeHTML(step)}</li>`).join("");

  bootstrap.Modal.getOrCreateInstance(modalElement).show();
}

const recipeCatalog=document.getElementById("recipe-catalog");

if(recipeCatalog){recipeCatalog.innerHTML=recipes.map((r,i)=>`<div class="col-md-6 col-lg-4 recipe-item" data-recipe="${r.cat}"><article class="recipe-card"><img src="${r.img}" alt="${r.name}" loading="lazy"><div class="product-card-body"><span class="card-kicker">${r.cat}</span><h3 class="mt-2">${r.name}</h3><p class="muted small">${r.desc}</p><div class="recipe-meta"><span><i class="bi bi-clock me-1"></i>${r.time}</span><span><i class="bi bi-check-circle me-1"></i>${r.level}</span></div><button class="text-link border-0 bg-transparent p-0" data-recipe-open="${i}">Ver idea <i class="bi bi-arrow-right"></i></button></div></article></div>`).join("");
document.querySelectorAll("[data-recipe-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-recipe-filter]").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
document.querySelectorAll(".recipe-item").forEach(card=>card.classList.toggle("d-none",btn.dataset.recipeFilter!=="Todas"&&card.dataset.recipe!==btn.dataset.recipeFilter));
}));
recipeCatalog.addEventListener("click",e=>{const b=e.target.closest("[data-recipe-open]");
if(b){const r=recipes[Number(b.dataset.recipeOpen)];

showRecipeModal(r)}});
}
const packs=[
 {name:"Pack Clásico",label:"Para todos los días",desc:"Una combinación esencial de aceite de oliva y aceitunas.",img:"assets/aceite-oliva.webp",items:"Aceite + aceitunas"},
 {name:"Pack Gourmet",label:"Para sorprender",desc:"Una selección de sabores para una mesa especial.",img:"assets/conservas-gourmet.webp",items:"Aceite + conservas"},
 {name:"Pack Premium",label:"Un regalo especial",desc:"Productos seleccionados con una presentación cuidada.",img:"assets/pack-regalo.webp",items:"Selección de productos"},
 {name:"Pack Personalizado",label:"A tu manera",desc:"Armá una propuesta según la ocasión y tus preferencias.",img:"assets/pack-regalo.webp",items:"A elección"}
];

const packCatalog=document.getElementById("pack-catalog");

if(packCatalog)packCatalog.innerHTML=packs.map(p=>`<div class="col-sm-6 col-lg-3"><article class="pack-card"><img src="${p.img}" alt="${p.name}" loading="lazy"><div class="product-card-body"><span class="pack-label">${p.label}</span><h3 class="mt-2">${p.name}</h3><p>${p.desc}</p><p class="small mb-3"><i class="bi bi-box-seam me-2"></i>${p.items}</p><a href="contacto.html" class="product-link">Consultar <i class="bi bi-arrow-right"></i></a></div></article></div>`).join("");

function showToast(message){const old=document.querySelector(".toast-demo");
if(old)old.remove();
const el=document.createElement("div");
el.className="toast-demo";
el.setAttribute("role","status");
el.textContent=message;
document.body.appendChild(el);
setTimeout(()=>el.remove(),5000);
}
document.querySelectorAll("[data-demo-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();
if(form.reportValidity()){showToast("¡Gracias por suscribirte! Esta demostración no almacena datos.");
form.reset();
}}));

const contactForm=document.getElementById("contact-form");

if(contactForm){contactForm.addEventListener("submit",e=>{e.preventDefault();
contactForm.classList.add("was-validated");
if(contactForm.checkValidity()){document.getElementById("contact-feedback").textContent="¡Gracias por tu mensaje! El formulario es demostrativo y todavía no envía datos a un servidor.";
document.getElementById("contact-feedback").className="form-feedback text-success";
contactForm.reset();
contactForm.classList.remove("was-validated");
}});
}


// Carrusel principal: cambia automáticamente cada 3 segundos.
const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const paginationButtons = Array.from(heroCarousel.querySelectorAll('.hero-pagination button'));
  const counter = heroCarousel.querySelector('.hero-counter');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeSlide = 0;
  let autoplayId;

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    paginationButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === activeSlide;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    if (counter) {
      counter.textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
  }

  function startAutoplay() {
    if (reducedMotion || slides.length < 2) return;
    window.clearInterval(autoplayId);
    autoplayId = window.setInterval(() => showSlide(activeSlide + 1), 3000);
  }

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
      startAutoplay();
    });
  });

  showSlide(0);
  startAutoplay();
}
