function addToCart(productId){
  const user=requireLogin("user");if(!user)return;
  const products=getProducts();
  const product=products.find(p=>String(p.id)===String(productId));
  if(!product||Number(product.stock)<=0){alert("This product is currently out of stock.");return;}
  const cart=getCart(user.id);
  const item=cart.find(i=>String(i.productId)===String(productId));
  if(item){
    if(Number(item.quantity)>=Number(product.stock)){alert("Maximum available stock reached.");return;}
    item.quantity=Number(item.quantity)+1;
  }else cart.push({productId:product.id,quantity:1});
  saveCart(user.id,cart);
  updateCartCount();
  const button=event?.currentTarget;
  if(button){const old=button.innerHTML;button.innerHTML="Added ✓";button.disabled=true;setTimeout(()=>{button.innerHTML=old;button.disabled=false;},900);}
}
function updateCartCount(){
  const user=getCurrentUser(),el=document.getElementById("cartCount");
  if(el&&user)el.textContent=getCart(user.id).reduce((sum,item)=>sum+Number(item.quantity||0),0);
}
function cartTotal(userId){
  return getCart(userId).reduce((sum,item)=>{
    const p=getProducts().find(x=>String(x.id)===String(item.productId));
    return sum+(p?Number(p.price)*Number(item.quantity):0);
  },0);
}
function changeQty(productId,delta){
  const user=requireLogin("user");if(!user)return;
  const cart=getCart(user.id),item=cart.find(i=>String(i.productId)===String(productId));
  const product=getProducts().find(p=>String(p.id)===String(productId));
  if(!item||!product)return;
  const next=Number(item.quantity)+Number(delta);
  if(next<=0)cart.splice(cart.indexOf(item),1);
  else if(next>Number(product.stock)){alert("Only "+product.stock+" unit(s) are available.");return;}
  else item.quantity=next;
  saveCart(user.id,cart);renderCart();updateCartCount();
}
function removeFromCart(productId){
  const user=requireLogin("user");if(!user)return;
  saveCart(user.id,getCart(user.id).filter(i=>String(i.productId)!==String(productId)));
  renderCart();updateCartCount();
}
function renderCart(){
  const box=document.getElementById("cartContent");if(!box)return;
  const user=requireLogin("user");if(!user)return;
  const cart=getCart(user.id),products=getProducts();
  const items=cart.map(i=>({i,p:products.find(p=>String(p.id)===String(i.productId))})).filter(x=>x.p);
  if(!items.length){
    if(cart.length)saveCart(user.id,[]);
    box.innerHTML='<div class="panel empty"><h2>Your cart is empty</h2><p>Add some products to continue.</p><br><a class="btn btn-primary" href="dashboard.html">Browse Products</a></div>';
    updateCartCount();return;
  }
  const total=items.reduce((sum,x)=>sum+Number(x.p.price)*Number(x.i.quantity),0);
  box.innerHTML='<div class="cart-layout"><section class="panel"><h2>Cart Items ('+items.length+')</h2>'+
    items.map(({i,p})=>'<div class="cart-item"><div class="cart-thumb">'+(p.image?'<img src="'+p.image+'" alt="'+p.name+'">':(p.emoji||"🛍️"))+'</div><div><strong>'+p.name+'</strong><p class="muted">'+formatCurrency(p.price)+' each</p></div><div class="qty-controls"><button type="button" onclick="changeQty('+Number(p.id)+',-1)">−</button><strong>'+Number(i.quantity)+'</strong><button type="button" onclick="changeQty('+Number(p.id)+',1)">+</button></div><div><strong>'+formatCurrency(p.price*i.quantity)+'</strong><br><button type="button" class="danger-link" onclick="removeFromCart('+Number(p.id)+')">Remove</button></div></div>').join("")+
    '</section><aside class="panel"><h2>Summary</h2><div class="summary-line"><span>Subtotal</span><strong>'+formatCurrency(total)+'</strong></div><div class="summary-line"><span>Delivery</span><strong>FREE</strong></div><div class="summary-line summary-total"><span>Total</span><strong>'+formatCurrency(total)+'</strong></div><a class="btn btn-primary full" href="checkout.html">Proceed to Checkout</a></aside></div>';
}
document.addEventListener("DOMContentLoaded",()=>{if(document.getElementById("cartContent"))renderCart();updateCartCount();});
