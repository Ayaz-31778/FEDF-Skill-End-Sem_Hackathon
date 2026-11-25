import React, { useState } from "react";
import { signIn, signUp, setCurrentUser } from "../data/store.js";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const user = signIn(email, password);
    if (!user) return setMessage("Email or password is incorrect. Please try again.");
    setCurrentUser(user);
    window.location.href = user.role === "admin" ? "/admin/dashboard.html" : "/user/dashboard.html";
  }
  return <main className="auth-layout"><aside className="auth-story"><a className="site-logo" href="/">atelier<span>.</span></a><div><p className="eyebrow">GOOD TO HAVE YOU BACK</p><h1>Your good<br/><em>finds</em> are waiting.</h1><p>Pick up where you left off. Your next favourite is just around the corner.</p></div><small>THOUGHTFULLY PICKED, NEVER ORDINARY.</small></aside><section className="auth-form-wrap"><form className="auth-form panel" onSubmit={submit}><a className="site-logo" href="/">atelier<span>.</span></a><p className="eyebrow">YOUR GOOD-FINDS ERA CONTINUES</p><h2>Welcome back.</h2><label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/></label>{message && <p className="form-alert">{message}</p>}<button className="primary-button" type="submit">Log in</button><p className="auth-switch">New to Atelier? <a href="/signup.html">Create an account</a></p><p className="demo-note">Demo admin: admin@eshop.com / admin123</p></form></section></main>;
}

export function SignupPage() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [confirm,setConfirm]=useState(""); const [message,setMessage]=useState("");
  function submit(event) {
    event.preventDefault();
    if(password.length < 6) return setMessage("Use a password with at least 6 characters.");
    if(password !== confirm) return setMessage("Passwords do not match.");
    const result = signUp(name,email,password);
    if(!result.ok) return setMessage(result.message);
    setMessage("Account created. Taking you to login…");
    setTimeout(()=>window.location.href="/login.html",700);
  }
  return <main className="auth-layout"><aside className="auth-story"><a className="site-logo" href="/">atelier<span>.</span></a><div><p className="eyebrow">A GOOD FIND IS A GOOD FEELING</p><h1>Your next<br/><em>favourite</em> thing awaits.</h1><p>Make an account. Find your thing. Let the good stuff begin.</p></div><small>THOUGHTFULLY PICKED, NEVER ORDINARY.</small></aside><section className="auth-form-wrap"><form className="auth-form panel" onSubmit={submit}><a className="site-logo" href="/">atelier<span>.</span></a><p className="eyebrow">YOUR GOOD-FINDS ERA STARTS HERE</p><h2>Create your account.</h2><label>Full name<input value={name} onChange={e=>setName(e.target.value)} required autoComplete="name"/></label><label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="new-password"/></label><label>Confirm password<input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required autoComplete="new-password"/></label>{message && <p className="form-alert">{message}</p>}<button className="primary-button" type="submit">Create account</button><p className="auth-switch">Already part of the club? <a href="/login.html">Log in</a></p></form></section></main>;
}
