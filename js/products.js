// Product photography is mapped by product ID so the image matches the product title.
const dashboardProductImages = {
  101:"photo-1505740420928-5e560c06d30e",
  102:"photo-1523275335684-37898b6baf30",
  103:"photo-1521572163474-6864f9cf17ab",
  104:"photo-1542291026-7eec264c27ff",
  105:"photo-1544947950-fa07a98d237f",
  106:"photo-1507473885765-e6ed057f782c",
  107:"photo-1553062407-98eeb64c6a62",
  108:"photo-1514228742587-6b1558fcca3d"
};
function dashboardImageUrl(product){
  if(product.image) return product.image;
  const id=dashboardProductImages[product.id];
  return id ? "https://images.unsplash.com/"+id+"?auto=format&fit=crop&w=1000&q=90" : "";
}
function productImage(product){
  const src=dashboardImageUrl(product);
  return src ? `<img src="${src}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85'">` : '<div class="atelier-image-placeholder">ATELIER<br>FIND</div>';
}
function renderProducts(){
  const grid=document.getElementById("productGrid");
  if(!grid) return;
  const search=(document.getElementById("searchInput")?.value||"").trim().toLowerCase();
  const category=document.getElementById("categoryFilter")?.value||"All";
  const products=getProducts().filter(p=>
    (category==="All" || p.category===category) &&
    ((p.name||"").toLowerCase().includes(search) || (p.description||"").toLowerCase().includes(search))
  );
  grid.innerHTML=products.length ? products.map((p,index)=>`
    <article class="product-card atelier-product-card">
      <div class="product-image atelier-product-image">${productImage(p)}<span class="atelier-product-label">${index%3===0?"ATELIER PICK":index%3===1?"GOOD FIND":"EVERYDAY FAVOURITE"}</span><span class="atelier-product-index">${String(index+1).padStart(2,"0")}</span></div>
      <div class="product-info atelier-product-info">
        <span class="category">${p.category==="Electronics"?"TECH & GADGETS":p.category==="Home"?"HOME & LIVING":p.category==="Books"?"BOOKS & MORE":p.category.toUpperCase()}</span>
        <h3>${p.name}</h3>
        <p class="atelier-product-description">${p.description}</p>
        <div class="atelier-product-meta"><div class="price">${formatCurrency(p.price)}</div><div class="stock">${p.stock>0 ? p.stock+" available" : "Currently unavailable"}</div></div>
        <button class="btn btn-primary atelier-add-button" ${p.stock<1?"disabled":""} onclick="addToCart(${p.id})">Add to bag <span>↗</span></button>
      </div>
    </article>`).join("") : `<div class="empty panel atelier-empty" style="grid-column:1/-1"><h3>No finds just yet.</h3><p>Try another search or browse all categories.</p></div>`;
}
document.addEventListener("DOMContentLoaded",()=>{
  if(!document.getElementById("productGrid")) return;
  const user=requireLogin("user"); if(!user) return;
  document.getElementById("userName").textContent=(user.name||"there").split(" ")[0];
  document.getElementById("searchInput").addEventListener("input",renderProducts);
  document.getElementById("categoryFilter").addEventListener("change",renderProducts);
  renderProducts();
  updateCartCount();
});
