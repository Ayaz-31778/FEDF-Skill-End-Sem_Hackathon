const ATELIER_CATEGORIES = {
  fashion: {
    title: "Wear your own story.", crumb: "FASHION",
    description: "Easy layers, everyday favourites and little statement pieces. Find the things that feel unmistakably you.",
    names: ["Everyday cotton shirt","Relaxed denim jacket","Classic white sneakers","Soft-touch weekend tee","The everyday tote","Easy-day dress","Street-style overshirt","Minimal crossbody bag","Everyday denim","Weekend co-ord set","Classic leather-look belt","The going-out layer"],
    prices: [899,1799,2199,699,799,1499,1299,1199,1599,1899,599,1699],
    images: ["photo-1521572163474-6864f9cf17ab", "photo-1516257984-b1b4d707412e", "photo-1542291026-7eec264c27ff", "photo-1521572163474-6864f9cf17ab", "photo-1590874103328-eac38a683ce7", "photo-1490481651871-ab68de25d43d", "photo-1529139574466-a303027c1d8b", "photo-1548036328-c9fa89d128fa", "photo-1541099649105-f69ad21f3246", "photo-1515372039744-b8f02a3ae446", "photo-1624222247344-550fb8c7a9f7", "photo-1551028719-00167b16eac5"],
    descriptions: ["A breathable cotton shirt for easy everyday outfits.", "A relaxed denim layer for cool mornings and casual plans.", "Classic low-profile sneakers for daily wear.", "A soft cotton tee that works with almost anything.", "A roomy canvas tote for your daily essentials.", "An easy weekend dress with a relaxed silhouette.", "A versatile overshirt for effortless street style.", "A compact crossbody bag for hands-free days.", "A dependable denim staple for everyday styling.", "A coordinated set for a pulled-together weekend look.", "A clean finishing detail for casual outfits.", "A lightweight outer layer for evenings out."],
    desc: "Thoughtful style for everyday plans, spontaneous outings and everything in between."
  },
  electronics: {
    title: "A smarter kind of everyday.", crumb: "TECH & GADGETS",
    description: "Clever upgrades, good sound and useful tech that makes daily life feel that little bit easier.",
    names: ["Wireless sound headphones","Everyday smart watch","Portable Bluetooth speaker","Pocket-size power bank","Wireless earbuds","Minimal mechanical keyboard","Precision wireless mouse","Everyday laptop stand","Compact instant camera","Smart desk light","Travel charging hub","Noise-softening headphones"],
    prices: [1899,2499,1599,899,1299,2199,799,999,3499,1199,699,2799],
    images: ["photo-1505740420928-5e560c06d30e", "photo-1523275335684-37898b6baf30", "photo-1608043152269-423dbba4e7e1", "photo-1609091839311-d5365f9ff1c5", "photo-1590658268037-6bf12165a8df", "photo-1587829741301-dc798b83add3", "photo-1527814050087-3793815479db", "photo-1527443224154-c4a3942d3acf", "photo-1516035069371-29a1b244cc32", "photo-1507473885765-e6ed057f782c", "photo-1612815154858-60aa4c59e8e3", "photo-1546435770-a3e426bf472b"],
    descriptions: ["Over-ear wireless headphones for focused listening and everyday playlists.", "A clean, versatile smartwatch for calls, reminders and activity tracking.", "A compact Bluetooth speaker for music at home or on the go.", "A pocket-friendly power bank to keep your devices charged.", "True wireless earbuds for calls, commutes and music.", "A comfortable keyboard for a tidy and productive desk setup.", "A precise wireless mouse for smooth everyday navigation.", "A raised laptop stand for a more organised workspace.", "A compact instant camera for capturing everyday memories.", "A practical desk light for focused work and reading.", "A multi-port charging hub for your everyday devices.", "Cushioned headphones designed for immersive listening."],
    desc: "Small tech upgrades with a big everyday payoff — picked for work, play and everything between."
  },
  home: {
    title: "Make room for lovely.", crumb: "HOME & LIVING",
    description: "Warm textures, calm corners and thoughtful little details that make your space feel like yours.",
    names: ["Soft neutral cushion","Ceramic coffee mug","Sunday slow-down candle","Sculptural table lamp","Everyday glass vase","Cosy woven throw","Minimal wall clock","Little bedside tray","Soft cotton bedsheet","Handmade-look planter","Warm ambient light","Decor accent bowl"],
    prices: [699,449,699,1799,599,1299,999,499,1899,549,899,749],
    images: ["photo-1584100936595-c0654b55a2e2", "photo-1514228742587-6b1558fcca3d", "photo-1603006905003-be475563bc59", "photo-1507473885765-e6ed057f782c", "photo-1578500494198-246f612d3b3d", "photo-1600369671236-e74521d4b6ad", "photo-1508057198894-247b23fe5ade", "photo-1603199506016-b9a594b593c0", "photo-1631049307264-da0ec9d70304", "photo-1485955900006-10f4d324d411", "photo-1507473885765-e6ed057f782c", "photo-1610701596007-11502861dcfa"],
    descriptions: ["A soft neutral cushion to bring warmth to your sofa or bed.", "A simple ceramic mug for your morning coffee or tea.", "A gently scented candle for a slower, calmer evening.", "A sculptural table lamp that adds a warm glow.", "A minimal vase for fresh stems or a simple shelf accent.", "A cosy woven throw for relaxed evenings at home.", "A clean wall clock that makes a quiet design statement.", "A small bedside tray for jewellery and daily essentials.", "Soft bedding for a more comfortable night's rest.", "A decorative planter to bring greenery into your space.", "A warm ambient light for a softer room atmosphere.", "A sculptural accent bowl for keys, fruit or little keepsakes."],
    desc: "Little home comforts and considered details to make slow mornings and cosy evenings even better."
  },
  beauty: {
    title: "Your daily feel-good.", crumb: "BEAUTY",
    description: "Everyday self-care, feel-good essentials and little rituals worth making time for.",
    names: ["Daily glow skincare set","Hydrating face serum","Soft matte lip colour","Gentle face cleanser","Everyday moisturiser","Fresh-feel body mist","Nourishing hair oil","Tinted lip balm","Calm-night face cream","Makeup brush set","Daily sunscreen","Signature fragrance mist"],
    prices: [1299,899,499,599,749,699,549,299,999,799,649,899],
    images: ["photo-1596462502278-27bfdc403348", "photo-1608248543803-ba4f8c70ae0b", "photo-1608571423902-eed4a5ad8108", "photo-1598440947619-2c35fc9aa908", "photo-1611930022073-b7a4ba5fcccd", "photo-1620916566398-39f1143ab7be", "photo-1601049541289-9b1b7bbbfe19", "photo-1580870069867-74c57ee1bb07", "photo-1611930022073-b7a4ba5fcccd", "photo-1596462502278-27bfdc403348", "photo-1608248543803-ba4f8c70ae0b", "photo-1594035910387-fea47794261f"],
    descriptions: ["A curated skincare set for a simple daily glow routine.", "A hydrating serum to add a fresh layer to your skincare routine.", "A soft matte lip colour for an easy everyday finish.", "A gentle cleanser for a fresh, comfortable skin feel.", "An everyday moisturiser for lasting hydration.", "A light body mist for a fresh finishing touch.", "A nourishing hair oil for your weekly care routine.", "A tinted balm that adds a subtle touch of colour.", "A comforting face cream for your evening routine.", "A versatile brush set for smooth makeup application.", "An everyday sunscreen to complete your morning routine.", "A signature fragrance mist for a light finishing layer."],
    desc: "A little care goes a long way. Discover easy essentials for your everyday routine."
  },
  books: {
    title: "For curious minds.", crumb: "BOOKS & MORE",
    description: "Page-turners, desk companions and thoughtful gifts for people who love to learn and explore.",
    names: ["The slow living journal","Stories for quiet evenings","The creative thinking book","A little book of ideas","The everyday planner","Modern design stories","The mindful moments journal","A reader's companion","The art of small things","The curious minds collection","A pocket poetry book","The weekend reading list"],
    prices: [499,599,699,399,549,799,449,499,649,899,349,599],
    images: ["photo-1544947950-fa07a98d237f", "photo-1512820790803-83ca734da794", "photo-1532012197267-da84d127e765", "photo-1495446815901-a7297e633e8d", "photo-1516979187457-637abb4f9353", "photo-1507842217343-583bb7270b66", "photo-1519682337058-a94d519337bc", "photo-1513001900722-370f803f498d", "photo-1524995997946-a1c2e315a42f", "photo-1543002588-bfa74002ed7e", "photo-1513475382585-d06e58bcb0e0", "photo-1512820790803-83ca734da794"],
    descriptions: ["A journal for slower mornings and thoughtful notes.", "A collection of stories for your next quiet evening.", "A book of creative prompts to spark fresh ideas.", "A compact collection of ideas to dip into anytime.", "A practical planner for organising your everyday.", "An inspiring read for design lovers and curious minds.", "A journal for mindful notes and small reflections.", "A companion for readers who love discovering new pages.", "A thoughtful read celebrating the beauty of everyday details.", "A collection for curious minds and lifelong learners.", "A pocket-sized poetry collection to carry with you.", "A hand-picked reading list for a relaxed weekend."],
    desc: "A good read, a fresh idea or a journal for your next big thought — find something to get lost in."
  },
  everyday: {
    title: "Little things, big joy.", crumb: "EVERYDAY FINDS",
    description: "Useful, lovely and always ready to go. Meet the small essentials that make every day smoother.",
    names: ["Everyday canvas tote","Reusable water bottle","Pocket notebook set","Travel organiser pouch","Compact umbrella","Daily carry backpack","Insulated coffee tumbler","Minimal card holder","Weekend picnic blanket","Everyday sunglasses","Reusable lunch box","Compact desk organiser"],
    prices: [799,599,299,499,699,1399,649,549,1199,899,499,749],
    images: ["photo-1590874103328-eac38a683ce7", "photo-1602143407151-7111542de6e8", "photo-1544816155-12df9643f363", "photo-1590736969955-71cc94901144", "photo-1525609004556-c46c7d6cf023", "photo-1553062407-98eeb64c6a62", "photo-1495474472287-4d71bcdd2085", "photo-1627123424574-724758594e93", "photo-1500530855697-b586d89ba3ee", "photo-1511499767150-a48a237f0083", "photo-1602143407151-7111542de6e8", "photo-1494438639946-1ebd1d20bf85"],
    descriptions: ["A sturdy canvas tote for errands, classes and daily essentials.", "A reusable bottle to keep water close throughout the day.", "A pocket notebook for quick notes, lists and ideas.", "A compact organiser pouch for cables and travel essentials.", "A handy umbrella for unpredictable weather.", "A practical backpack for daily commutes and short trips.", "A reusable tumbler for coffee, tea and cold drinks.", "A slim card holder for the essentials you carry every day.", "A picnic-ready companion for relaxed outdoor afternoons.", "Everyday sunglasses with an easy-to-style silhouette.", "A reusable lunch box for meals on the move.", "A compact organiser to keep your desk neat."],
    desc: "Thoughtful everyday companions for your commute, your desk, your weekend and everywhere else."
  },
  "for-him": {
    title: "His kind of good stuff.", crumb: "FOR HIM",
    description: "Clean fits, fresh sneakers, everyday tech and accessories that do the talking. His new favourite corner starts here.",
    names: ["Relaxed streetwear jacket","Everyday white sneakers","Classic wristwatch","Wireless headphones","Signature men's fragrance","Minimal leather wallet","Everyday overshirt","Weekend crossbody bag","Classic cotton tee","Smart everyday watch","Everyday running shoes","Travel-ready backpack"],
    prices: [1899,2299,2499,1899,1699,899,1399,1199,699,2799,1999,1599],
    images: ["photo-1516257984-b1b4d707412e", "photo-1542291026-7eec264c27ff", "photo-1524592094714-0f0654e20314", "photo-1505740420928-5e560c06d30e", "photo-1594035910387-fea47794261f", "photo-1627123424574-724758594e93", "photo-1551028719-00167b16eac5", "photo-1548036328-c9fa89d128fa", "photo-1521572163474-6864f9cf17ab", "photo-1523275335684-37898b6baf30", "photo-1542291026-7eec264c27ff", "photo-1553062407-98eeb64c6a62"],
    descriptions: ["A relaxed jacket that gives casual outfits a clean streetwear edge.", "A versatile sneaker for everyday outfits and weekend plans.", "A classic wristwatch with a timeless everyday look.", "Wireless headphones for music, calls and commutes.", "A distinctive fragrance for a confident finishing touch.", "A minimal wallet designed to carry everyday essentials.", "An easy overshirt for layering through the week.", "A compact crossbody bag for hands-free everyday carry.", "A comfortable cotton tee that belongs in every wardrobe.", "A smart everyday watch for staying connected on the move.", "A sporty sneaker for daily walks and active days.", "A travel-ready backpack for work, campus and weekends."],
    desc: "From street-style staples to the finishing touches — good everyday picks, made simple."
  }
};

const atelierAllProducts = Object.entries(ATELIER_CATEGORIES).flatMap(([category, data]) =>
  data.names.map((name, index) => ({
    id: category + "-" + (index + 1),
    name,
    category,
    categoryName: data.crumb,
    description: data.descriptions[index],
    price: data.prices[index],
    oldPrice: Math.round(data.prices[index] * (1.12 + (index % 4) * 0.07)),
    image: "https://images.unsplash.com/" + data.images[index] + "?auto=format&fit=crop&w=1400&q=95",
    tag: index % 4 === 0 ? "ATELIER PICK" : index % 4 === 1 ? "GOOD FIND" : index % 4 === 2 ? "JUST IN" : "EVERYDAY FAVOURITE",
    focus: category === "for-him" ? ["streetwear","sneakers","accessories","tech","fragrance","accessories","streetwear","streetwear","streetwear","accessories","sneakers","streetwear"][index] : ""
  }))
);

const params = new URLSearchParams(window.location.search);
let currentCategory = params.get("category") || "all";
const focus = params.get("focus") || "";
const titleEl = document.getElementById("catalogueTitle");
const descriptionEl = document.getElementById("catalogueDescription");
const crumbEl = document.getElementById("breadcrumbCategory");
const grid = document.getElementById("catalogueGrid");
const countEl = document.getElementById("catalogueCount");
const searchInput = document.getElementById("inlineProductSearch");
const sortSelect = document.getElementById("sortProducts");
const modal = document.getElementById("selectionModal");
let activeProduct = null;

function money(value){ return "₹" + Number(value).toLocaleString("en-IN"); }
function safeText(value){ return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
function getVisibleProducts(){
  let products = currentCategory === "all" ? [...atelierAllProducts].slice(0,15) :
    currentCategory === "trending" ? atelierAllProducts.filter((p,i) => i % 7 < 2).slice(0,15) :
    currentCategory === "deals" ? atelierAllProducts.filter((p,i) => i % 3 !== 1).slice(0,15) :
    atelierAllProducts.filter(p => p.category === currentCategory);
  if(focus && currentCategory === "for-him") products.sort((a,b) => Number(b.focus === focus) - Number(a.focus === focus));
  const term = searchInput.value.trim().toLowerCase();
  if(term) products = products.filter(p => (p.name + " " + p.description + " " + p.categoryName).toLowerCase().includes(term));
  if(sortSelect.value === "low") products.sort((a,b)=>a.price-b.price);
  if(sortSelect.value === "high") products.sort((a,b)=>b.price-a.price);
  if(sortSelect.value === "name") products.sort((a,b)=>a.name.localeCompare(b.name));
  return products;
}
function renderCatalogue(){
  const config = ATELIER_CATEGORIES[currentCategory];
  const isSpecial = currentCategory === "all" || currentCategory === "trending" || currentCategory === "deals";
  const title = isSpecial ? ({
    all: ["Find your kind of good.","ALL FINDS"],
    trending: ["The internet's current crush.","TRENDING NOW"],
    deals: ["Good mood. Better prices.","TODAY'S DEALS"]
  })[currentCategory] : [config.title,config.crumb];
  titleEl.innerHTML = currentCategory === "all" ? 'Find your <em>kind</em> of good.' : safeText(title[0]).replace("good stuff.","<em>good stuff.</em>");
  if(currentCategory === "trending") titleEl.innerHTML = "The internet's current <em>crush.</em>";
  if(currentCategory === "deals") titleEl.innerHTML = "Good mood. <em>Better prices.</em>";
  descriptionEl.textContent = isSpecial ? ({
    all:"A thoughtful collection of things you'll love, use and keep. Take your time — your next favourite is here.",
    trending:"The pieces getting all the attention. Fresh finds, everyday favourites and a little something worth a closer look.",
    deals:"A few feel-good prices on lovely everyday finds. Explore the edit and choose your favourites."
  })[currentCategory] : config.description;
  crumbEl.textContent = title[1];
  document.title = title[1] + " | Atelier";
  document.querySelectorAll("[data-category-link]").forEach(link => link.classList.toggle("active", link.dataset.categoryLink === currentCategory));
  const products = getVisibleProducts();
  countEl.textContent = products.length + (products.length === 1 ? " FIND" : " FINDS");
  grid.innerHTML = products.map((p,index)=>`
    <article class="catalogue-product-card">
      <button class="catalogue-product-image" type="button" data-select-product="${p.id}" aria-label="View ${safeText(p.name)}">
        <img src="${p.image}" alt="${safeText(p.name)}" loading="${index<4?"eager":"lazy"}">
        <span class="catalogue-product-tag">${p.tag}</span><span class="catalogue-image-arrow">↗</span>
      </button>
      <div class="catalogue-product-info"><span>${p.categoryName}</span><h3>${safeText(p.name)}</h3><p>${safeText(p.description)}</p><div class="catalogue-price"><strong>${money(p.price)}</strong><del>${money(p.oldPrice)}</del><b>${Math.round((1-p.price/p.oldPrice)*100)}% OFF</b></div><button class="catalogue-select-button" type="button" data-select-product="${p.id}">View this find <span>↗</span></button></div>
    </article>`).join("");
  document.getElementById("catalogueEmpty").classList.toggle("hidden",products.length>0);
}
function openSelection(productId){
  activeProduct = atelierAllProducts.find(p=>p.id===productId);
  if(!activeProduct) return;
  localStorage.setItem("atelier_selected_product",JSON.stringify(activeProduct));
  localStorage.setItem("atelier_selected_category",currentCategory);
  document.getElementById("selectedProductImage").src=activeProduct.image;
  document.getElementById("selectedProductImage").alt=activeProduct.name;
  document.getElementById("selectionTitle").textContent=activeProduct.name;
  document.getElementById("selectedProductDescription").textContent=activeProduct.description;
  document.getElementById("selectedProductPrice").textContent=money(activeProduct.price);
  const next="/category.html?category="+encodeURIComponent(currentCategory);
  document.getElementById("selectionSignup").href="/signup.html?next="+encodeURIComponent(next);
  document.getElementById("selectionLogin").href="/login.html?next="+encodeURIComponent(next);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}
function closeSelection(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
document.addEventListener("click",event=>{
  const select=event.target.closest("[data-select-product]");
  if(select){openSelection(select.dataset.selectProduct);return;}
  if(event.target.closest("[data-close-modal]")) closeSelection();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeSelection();});
searchInput.addEventListener("input",renderCatalogue);
sortSelect.addEventListener("change",renderCatalogue);
document.getElementById("catalogueSearch").addEventListener("submit",event=>{
  event.preventDefault();
  searchInput.value=document.getElementById("catalogueSearchInput").value;
  renderCatalogue();
});
const initialSearch=params.get("search")||"";
searchInput.value=initialSearch;
const categorySelect=currentCategory;
if(!ATELIER_CATEGORIES[currentCategory] && !["all","trending","deals"].includes(currentCategory)) currentCategory="all";
if(focus && currentCategory==="for-him"){
  document.getElementById("catalogueDescription").textContent="A focused edit of "+focus+" favourites, picked for everyday style and good energy.";
}
renderCatalogue();
