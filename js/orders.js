function escapeOrderText(value){return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function renderCheckout(){
 const summary=document.getElementById("checkoutSummary");if(!summary)return;
 const user=requireLogin("user");if(!user)return;
 const cart=getCart(user.id),products=getProducts();
 const rows=cart.map(item=>({item,product:products.find(p=>String(p.id)===String(item.productId))})).filter(x=>x.product);
 const button=document.getElementById("placeOrderBtn");
 if(!rows.length){summary.innerHTML='<div class="empty">Your cart is empty. <a href="dashboard.html">Shop now</a></div>';button.disabled=true;return;}
 const total=rows.reduce((sum,x)=>sum+Number(x.product.price)*Number(x.item.quantity),0);
 summary.innerHTML=rows.map(x=>'<div class="summary-product"><span>'+escapeOrderText(x.product.name)+' × '+Number(x.item.quantity)+'</span><strong>'+formatCurrency(x.product.price*x.item.quantity)+'</strong></div>').join("")+'<div class="summary-line summary-total"><span>Total</span><strong>'+formatCurrency(total)+'</strong></div>';
 document.getElementById("fullName").value=user.name||"";
}
function checkoutMessage(message,success){const el=document.getElementById("checkoutMessage");el.textContent=message;el.className=success?"form-message success-text":"form-message";}
function placeOrder(event){
 event.preventDefault();const user=requireLogin("user");if(!user)return;
 const form=event.currentTarget;if(!form.reportValidity())return;
 const button=document.getElementById("placeOrderBtn");if(button.dataset.busy==="yes")return;
 const fullName=document.getElementById("fullName").value.trim(),phone=document.getElementById("phone").value.trim(),address=document.getElementById("address").value.trim(),payment=document.getElementById("payment").value;
 const digits=phone.replace(/\D/g,"");
 if(!fullName||!address||digits.length<10||digits.length>15){checkoutMessage("Enter your name, a valid phone number and complete delivery address.",false);return;}
 const cart=getCart(user.id),products=getProducts(),resolved=[];
 if(!cart.length){checkoutMessage("Your cart is empty. Add products before checkout.",false);return;}
 for(const item of cart){
  const p=products.find(x=>String(x.id)===String(item.productId)),qty=Number(item.quantity);
  if(!p||!Number.isInteger(qty)||qty<1){checkoutMessage("A cart item is invalid or unavailable. Please review your cart.",false);return;}
  if(qty>Number(p.stock)){checkoutMessage("Only "+p.stock+" unit(s) of "+p.name+" are available.",false);return;}
  resolved.push({product:p,quantity:qty});
 }
 button.dataset.busy="yes";button.disabled=true;button.textContent=payment==="Cash on Delivery"?"Placing order…":"Simulating payment…";
 checkoutMessage(payment==="Cash on Delivery"?"Confirming your order…":"Processing demo payment. Please wait…",false);
 window.setTimeout(function(){
  const latest=getProducts();
  for(const row of resolved){const p=latest.find(x=>String(x.id)===String(row.product.id));if(!p||Number(p.stock)<row.quantity){button.disabled=false;button.dataset.busy="";button.textContent="Place Order";checkoutMessage("Stock changed during checkout. Please review your cart.",false);return;}}
  const now=new Date(),total=resolved.reduce((sum,row)=>sum+Number(row.product.price)*row.quantity,0);
  const order={id:"ORD"+now.getTime(),userId:user.id,customerName:fullName,phone,address,payment,paymentStatus:payment==="Cash on Delivery"?"Pay on delivery":"Demo payment successful",paymentReference:payment==="Cash on Delivery"?"":"DEMO-"+now.getTime(),items:resolved.map(row=>({productId:row.product.id,productName:row.product.name,price:Number(row.product.price),quantity:row.quantity})),total,status:"Placed",date:now.toLocaleString("en-IN"),createdAt:now.toISOString()};
  try{const all=getOrders();all.unshift(order);setData(STORAGE_KEYS.orders,all);resolved.forEach(row=>{const p=latest.find(x=>String(x.id)===String(row.product.id));p.stock=Number(p.stock)-row.quantity;});setData(STORAGE_KEYS.products,latest);saveCart(user.id,[]);window.location.href="order-success.html?orderId="+encodeURIComponent(order.id);}
  catch(error){button.disabled=false;button.dataset.busy="";button.textContent="Place Order";checkoutMessage("Could not save this order in Local Storage. Please try again.",false);}
 },payment==="Cash on Delivery"?350:1100);
}
function renderOrderSuccess(){
 const root=document.getElementById("orderSuccess");if(!root)return;
 const user=requireLogin("user");if(!user)return;
 const id=new URLSearchParams(location.search).get("orderId"),order=getOrders().find(o=>o.id===id&&String(o.userId)===String(user.id));
 if(!order){root.innerHTML='<section class="panel"><h2>Order not found</h2><p>This order could not be found in this browser.</p><a class="btn btn-primary" href="dashboard.html">Continue shopping</a></section>';return;}
 const lines=(order.items||[]).map(i=>{const p=getProducts().find(x=>String(x.id)===String(i.productId)),name=i.productName||(p&&p.name)||"Product",price=Number(i.price)||0;return '<div class="summary-product"><span>'+escapeOrderText(name)+' × '+Number(i.quantity)+'</span><strong>'+formatCurrency(price*i.quantity)+'</strong></div>';}).join("");
 root.innerHTML='<section class="panel order-success-panel"><div class="order-success-mark" aria-hidden="true">✓</div><p class="eyebrow">ORDER CONFIRMED</p><h1>Thank you for your order!</h1><p>Your order has been saved successfully. Track its progress from My Orders.</p><div class="order-confirmation-id"><span>ORDER ID</span><strong>'+escapeOrderText(order.id)+'</strong></div><div class="order-confirmation-details"><div><span>Order status</span><strong>'+escapeOrderText(order.status)+'</strong></div><div><span>Payment method</span><strong>'+escapeOrderText(order.payment)+'</strong></div><div><span>Payment status</span><strong>'+escapeOrderText(order.paymentStatus||"Pending")+'</strong></div><div><span>Contact number</span><strong>'+escapeOrderText(order.phone)+'</strong></div></div><h2>Items ordered</h2>'+lines+'<div class="summary-line summary-total"><span>Order total</span><strong>'+formatCurrency(order.total)+'</strong></div><p class="order-delivery-address"><strong>Deliver to:</strong> '+escapeOrderText(order.address)+'</p><div class="order-success-actions"><a class="btn btn-primary" href="orders.html">View my orders</a><a class="btn btn-dark" href="dashboard.html">Continue shopping</a></div></section>';
}
function renderUserOrders(){
 const box=document.getElementById("ordersList");if(!box)return;const user=requireLogin("user");if(!user)return;
 const orders=getOrders().filter(o=>String(o.userId)===String(user.id));
 if(!orders.length){box.innerHTML='<div class="panel empty"><h2>No orders yet.</h2><p>Your placed orders will appear here.</p><a class="btn btn-primary" href="dashboard.html">Start shopping</a></div>';return;}
 box.innerHTML=orders.map(o=>{const names=(o.items||[]).map(i=>{const p=getProducts().find(x=>String(x.id)===String(i.productId));return escapeOrderText(i.productName||(p&&p.name)||"Product")+" × "+Number(i.quantity);}).join(", ");return '<article class="order-card"><div class="order-head"><div><h3>'+escapeOrderText(o.id)+'</h3><p class="muted">'+escapeOrderText(o.date)+'</p></div><span class="status">'+escapeOrderText(o.status)+'</span></div><p class="order-products">'+names+'</p><p class="muted">Payment: '+escapeOrderText(o.payment||"Not specified")+' · '+escapeOrderText(o.paymentStatus||"Pending")+'</p><div class="summary-line summary-total"><span>Total</span><strong>'+formatCurrency(o.total)+'</strong></div></article>';}).join("");
}
document.addEventListener("DOMContentLoaded",()=>{const form=document.getElementById("checkoutForm");if(form){requireLogin("user");renderCheckout();form.addEventListener("submit",placeOrder);}renderOrderSuccess();renderUserOrders();});