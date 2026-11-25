// Public homepage catalogue: show a balanced mix before account creation.
(function(){
 const categorySlugs={"Fashion":"fashion","Electronics":"electronics","Home":"home","Beauty":"beauty","Books":"books","Everyday Finds":"everyday","For Him":"for-him"};
 const fallbackImages={
  Fashion:["photo-1490481651871-ab68de25d43d","photo-1529139574466-a303027c1d8b","photo-1521572163474-6864f9cf17ab"],
  Electronics:["photo-1505740420928-5e560c06d30e","photo-1523275335684-37898b6baf30","photo-1608043152269-423dbba4e7e1"],
  Home:["photo-1507473885765-e6ed057f782c","photo-1600210492486-724fe5c67fb0","photo-1505693416388-ac5ce068fe85"],
  Beauty:["photo-1596462502278-27bfdc403348","photo-1522335789203-aabd1fc54bc9","photo-1608248543803-ba4f8c70ae0b"],
  Books:["photo-1544947950-fa07a98d237f","photo-1512820790803-83ca734da794","photo-1495446815901-a7297e633e8d"],
  "Everyday Finds":["photo-1513519245088-0e12902e5a38","photo-1505693416388-ac5ce068fe85","photo-1517841905240-472988babdf9"],
  "For Him":["photo-1516257984-b1b4d707412e","photo-1551028719-00167b16eac5","photo-1542291026-7eec264c27ff"]
 };
 const safe=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 function getMixed(){
  const all=typeof getProducts==="function"?getProducts():(window.ATELIER_DASHBOARD_PRODUCTS||[]);
  const categories=Object.keys(categorySlugs),mixed=[];
  for(let round=0;round<2;round++)categories.forEach(category=>{
   const product=all.filter(p=>p.category===category&&Number(p.stock)>0)[round];
   if(product)mixed.push(product);
  });
  return mixed.slice(0,14);
 }
 function render(){
  const grid=document.getElementById("homeProductGrid");if(!grid)return;
  const products=getMixed();
  grid.innerHTML=products.map(product=>{
   const slug=categorySlugs[product.category]||"all";
   const price="₹"+Number(product.price).toLocaleString("en-IN");
   const old=product.oldPrice?'<del>₹'+Number(product.oldPrice).toLocaleString("en-IN")+'</del>':"";
   return '<article class="home-product-card" data-category="'+safe(product.category)+'">'+
    '<a class="home-product-image" href="/category.html?category='+slug+'" aria-label="Explore '+safe(product.name)+'">'+
    '<img src="'+safe(product.image||"")+'" alt="'+safe(product.name)+'" loading="lazy" decoding="async" onerror="homeImageFallback(this)">'+
    '<span class="product-tag">'+safe(product.tag||"GOOD FIND")+'</span></a>'+
    '<div class="home-product-info"><span class="product-category">'+safe(product.category)+'</span>'+
    '<h3>'+safe(product.name)+'</h3><p class="home-product-description">'+safe(product.description)+'</p>'+
    '<div class="product-price">'+price+old+'</div>'+
    '<a class="product-add" href="/category.html?category='+slug+'">View this find <span>↗</span></a></div></article>';
  }).join("");
  if(!products.length)grid.innerHTML='<p class="home-products-loading">The collection is being refreshed. Please check back shortly.</p>';
 }
 window.homeImageFallback=function(img){
  const category=img.closest("[data-category]")?.dataset.category||"Everyday Finds";
  const list=fallbackImages[category]||fallbackImages["Everyday Finds"];
  const index=Number(img.dataset.fallbackIndex||0);
  if(index>=list.length){
   img.onerror=null;img.alt="Atelier product image";
   img.src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23e8e4d8'/%3E%3Ctext x='300' y='300' text-anchor='middle' fill='%23596756' font-family='Georgia' font-size='32'%3EATELIER FIND%3C/text%3E%3C/svg%3E";
   return;
  }
  img.dataset.fallbackIndex=String(index+1);
  img.src="https://images.unsplash.com/"+list[index]+"?auto=format&fit=crop&w=1600&q=92";
 };
 document.addEventListener("DOMContentLoaded",render);
 if(document.readyState!=="loading")render();
})();
