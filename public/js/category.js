const ATELIER_CATEGORIES = {
  fashion: {
    title: "Wear your own story.", crumb: "FASHION",
    description: "Easy layers, everyday favourites and little statement pieces. Find the things that feel unmistakably you.",
    names: ["Everyday cotton shirt","Relaxed denim jacket","Classic white sneakers","Soft-touch weekend tee","The everyday tote","Easy-day dress","Street-style overshirt","Minimal crossbody bag","Everyday denim","Weekend co-ord set","Classic leather-look belt","The going-out layer"],
    prices: [899,1799,2199,699,799,1499,1299,1199,1599,1899,599,1699],
    images: ["photo-1483985988355-763728e1935b", "photo-1529139574466-a303027c1d8b", "photo-1515886657613-9f3515b0c78f", "photo-1490481651871-ab68de25d43d", "photo-1521572163474-6864f9cf17ab", "photo-1525507119028-ed4c629a60a3", "photo-1551028719-00167b16eac5", "photo-1543163521-1bf539c55dd2", "photo-1539109136881-3be0616acf4b", "photo-1515372039744-b8f02a3ae446", "photo-1542291026-7eec264c27ff", "photo-1483985988355-763728e1935b"],
    desc: "Thoughtful style for everyday plans, spontaneous outings and everything in between."
  },
  electronics: {
    title: "A smarter kind of everyday.", crumb: "TECH & GADGETS",
    description: "Clever upgrades, good sound and useful tech that makes daily life feel that little bit easier.",
    names: ["Wireless sound headphones","Everyday smart watch","Portable Bluetooth speaker","Pocket-size power bank","Wireless earbuds","Minimal mechanical keyboard","Precision wireless mouse","Everyday laptop stand","Compact instant camera","Smart desk light","Travel charging hub","Noise-softening headphones"],
    prices: [1899,2499,1599,899,1299,2199,799,999,3499,1199,699,2799],
    images: ["photo-1505740420928-5e560c06d30e", "photo-1523275335684-37898b6baf30", "photo-1546868871-7041f2a55e12", "photo-1583394838336-acd977736f90", "photo-1598327105666-5b89351aff97", "photo-1511707171634-5f897ff02aa9", "photo-1498049794561-7780e7231661", "photo-1527443224154-c4a3942d3acf", "photo-1527814050087-3793815479db", "photo-1526170375885-4d8ecf77b99f", "photo-1588872657578-7efd1f1555ed", "photo-1590658268037-6bf12165a8df"],
    desc: "Small tech upgrades with a big everyday payoff — picked for work, play and everything between."
  },
  home: {
    title: "Make room for lovely.", crumb: "HOME & LIVING",
    description: "Warm textures, calm corners and thoughtful little details that make your space feel like yours.",
    names: ["Soft neutral cushion","Ceramic coffee mug","Sunday slow-down candle","Sculptural table lamp","Everyday glass vase","Cosy woven throw","Minimal wall clock","Little bedside tray","Soft cotton bedsheet","Handmade-look planter","Warm ambient light","Decor accent bowl"],
    prices: [699,449,699,1799,599,1299,999,499,1899,549,899,749],
    images: ["photo-1494438639946-1ebd1d20bf85", "photo-1616486338812-3dadae4b4ace", "photo-1618221195710-dd6b41faaea6", "photo-1600210492486-724fe5c67fb0", "photo-1603006905003-be475563bc59", "photo-1514228742587-6b1558fcca3d", "photo-1615874694520-474822394e73", "photo-1493663284031-b7e3aefcae8e", "photo-1505693416388-ac5ce068fe85", "photo-1600566753086-00f18fb6b3ea", "photo-1600607687939-ce8a6c25118c", "photo-1493809842364-78817add7ffb"],
    desc: "Little home comforts and considered details to make slow mornings and cosy evenings even better."
  },
  beauty: {
    title: "Your daily feel-good.", crumb: "BEAUTY",
    description: "Everyday self-care, feel-good essentials and little rituals worth making time for.",
    names: ["Daily glow skincare set","Hydrating face serum","Soft matte lip colour","Gentle face cleanser","Everyday moisturiser","Fresh-feel body mist","Nourishing hair oil","Tinted lip balm","Calm-night face cream","Makeup brush set","Daily sunscreen","Signature fragrance mist"],
    prices: [1299,899,499,599,749,699,549,299,999,799,649,899],
    images: ["photo-1596462502278-27bfdc403348", "photo-1608248543803-ba4f8c70ae0b", "photo-1608571423902-eed4a5ad8108", "photo-1598440947619-2c35fc9aa908", "photo-1611930022073-b7a4ba5fcccd", "photo-1620916566398-39f1143ab7be", "photo-1601049541289-9b1b7bbbfe19", "photo-1595425970377-c9703cf48b6d", "photo-1580870069867-74c57ee1bb07", "photo-1596462502278-27bfdc403348", "photo-1608248543803-ba4f8c70ae0b", "photo-1608571423902-eed4a5ad8108"],
    desc: "A little care goes a long way. Discover easy essentials for your everyday routine."
  },
  books: {
    title: "For curious minds.", crumb: "BOOKS & MORE",
    description: "Page-turners, desk companions and thoughtful gifts for people who love to learn and explore.",
    names: ["The slow living journal","Stories for quiet evenings","The creative thinking book","A little book of ideas","The everyday planner","Modern design stories","The mindful moments journal","A reader's companion","The art of small things","The curious minds collection","A pocket poetry book","The weekend reading list"],
    prices: [499,599,699,399,549,799,449,499,649,899,349,599],
    images: ["photo-1507842217343-583bb7270b66", "photo-1512820790803-83ca734da794", "photo-1544947950-fa07a98d237f", "photo-1519682337058-a94d519337bc", "photo-1516979187457-637abb4f9353", "photo-1495446815901-a7297e633e8d", "photo-1532012197267-da84d127e765", "photo-1513001900722-370f803f498d", "photo-1543002588-bfa74002ed7e", "photo-1524995997946-a1c2e315a42f", "photo-1513475382585-d06e58bcb0e0", "photo-1507842217343-583bb7270b66"],
    desc: "A good read, a fresh idea or a journal for your next big thought — find something to get lost in."
  },
  everyday: {
    title: "Little things, big joy.", crumb: "EVERYDAY FINDS",
    description: "Useful, lovely and always ready to go. Meet the small essentials that make every day smoother.",
    names: ["Everyday canvas tote","Reusable water bottle","Pocket notebook set","Travel organiser pouch","Compact umbrella","Daily carry backpack","Insulated coffee tumbler","Minimal card holder","Weekend picnic blanket","Everyday sunglasses","Reusable lunch box","Compact desk organiser"],
    prices: [799,599,299,499,699,1399,649,549,1199,899,499,749],
    images: ["photo-1544816155-12df9643f363", "photo-1590874103328-eac38a683ce7", "photo-1553062407-98eeb64c6a62", "photo-1526170375885-4d8ecf77b99f", "photo-1523275335684-37898b6baf30", "photo-1495474472287-4d71bcdd2085", "photo-1590874103328-eac38a683ce7", "photo-1553062407-98eeb64c6a62", "photo-1544816155-12df9643f363", "photo-1526170375885-4d8ecf77b99f", "photo-1495474472287-4d71bcdd2085", "photo-1523275335684-37898b6baf30"],
    desc: "Thoughtful everyday companions for your commute, your desk, your weekend and everywhere else."
  },
  "for-him": {
    title: "His kind of good stuff.", crumb: "FOR HIM",
    description: "Clean fits, fresh sneakers, everyday tech and accessories that do the talking. His new favourite corner starts here.",
    names: ["Relaxed streetwear jacket","Everyday white sneakers","Classic wristwatch","Wireless headphones","Signature men's fragrance","Minimal leather wallet","Everyday overshirt","Weekend crossbody bag","Classic cotton tee","Smart everyday watch","Everyday running shoes","Travel-ready backpack"],
    prices: [1899,2299,2499,1899,1699,899,1399,1199,699,2799,1999,1599],
    images: ["photo-1516257984-b1b4d707412e", "photo-1542291026-7eec264c27ff", "photo-1524592094714-0f0654e20314", "photo-1505740420928-5e560c06d30e", "photo-1594035910387-fea47794261f", "photo-1627123424574-724758594e93", "photo-1551028719-00167b16eac5", "photo-1548036328-c9fa89d128fa", "photo-1521572163474-6864f9cf17ab", "photo-1523275335684-37898b6baf30", "photo-1542291026-7eec264c27ff", "photo-1553062407-98eeb64c6a62"],
    desc: "From street-style staples to the finishing touches — good everyday picks, made simple."
  }
};

const atelierAllProducts = Object.entries(ATELIER_CATEGORIES).flatMap(([category, data]) =>
  data.names.map((name, index) => ({
    id: category + "-" + (index + 1),
    name,
    category,
    categoryName: data.crumb,
    description: data.desc,
    price: data.prices[index],
    oldPrice: Math.round(data.prices[index] * (1.12 + (index % 4) * 0.07)),
    image: "https://images.unsplash.com/" + data.images[index] + "?auto=format&fit=crop&w=1200&q=92",
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
