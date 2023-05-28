"use strict";(self.webpackChunkrs_airways=self.webpackChunkrs_airways||[]).push([[592],{2662:(h,f,n)=>{n.d(f,{C:()=>l});var i=n(3811),g=n(5230);let l=(()=>{class s{constructor(){this.CURRENCIES=new Map,this.currencyItemKey=`${i.E_}-currency`,this.CURRENCIES.set("EUR","\u20ac").set("PLN","z\u0142").set("USD","$").set("RUB","\u20bd")}getCurrencySymbol(){const o=localStorage.getItem(this.currencyItemKey)||"EUR";return this.CURRENCIES.get(o)}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8806:(h,f,n)=>{n.d(f,{J:()=>l});const i={count:0,fare:0,tax:0};var g=n(5230);let l=(()=>{class s{constructor(){this.adultAge=14,this.infantAge=2}getSummaryByAge(o){const e=[i,i,i];return o?(o.forEach(r=>{if(r.age>=this.adultAge){const t=e[0];e[0]={count:t.count+1,fare:t.fare+r.fare,tax:t.tax+r.tax}}else if(r.age<this.infantAge){const t=e[2];e[2]={count:t.count+1,fare:t.fare+r.fare,tax:t.tax+r.tax}}else{const t=e[1];e[1]={count:t.count+1,fare:t.fare+r.fare,tax:t.tax+r.tax}}}),e):[]}setSummary(o){this.summaryFlight=o}getSummary(){return this.summaryFlight}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4923:(h,f,n)=>{n.d(f,{U:()=>i});const i=["checkbox","number","flights","typeTrip","dateTime","passengers","price","control"]},3327:(h,f,n)=>{n.d(f,{L:()=>o});var l=n(5230),s=n(2810);let u=(()=>{class e{constructor(t){this.translate=t}getCaption(t,a){let c=["","",""];return this.translate.get("SUMMARY").subscribe(m=>{c=[m.ADULT,m.CHILD,m.INFANT]}),`${t} x ${c[a]}`}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(s.sK))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),o=(()=>{class e{constructor(t){this.translateService=t,this.index=0}passengerByAge(t){this.index+=1;let a=0,c=0,m=0;return t.forEach(_=>{_.age>=14?a+=1:_.age<2?m+=1:c+=1}),{adult:a,child:c,infant:m}}passengersByString(t){const a=[],c=this.passengerByAge(t);return c.adult>0&&a.push(this.translateService.getCaption(c.adult,0)),c.child>0&&a.push(this.translateService.getCaption(c.child,1)),c.infant>0&&a.push(this.translateService.getCaption(c.infant,2)),a.join(", ")}}return e.\u0275fac=function(t){return new(t||e)(l.LFG(u))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8650:(h,f,n)=>{n.d(f,{v:()=>s});var i=n(5230),g=n(2810),l=n(1695);let s=(()=>{class u{constructor(e,r){this.translate=e,this.priceService=r}getNumber(e){return null!==e.to?`${e.from.number} - ${e.to.number}`:`${e.from.number}`}getFlight(e){const r=`${e.from.from} - ${e.from.to}`;return null!=e.to?[r,null!==e.to?`${e.to.from} - ${e.to.to}`:""].join(", "):r}getFlightType(e){let t="";return this.translate.get("MAIN_FORM."+(null!==e.to?"ROUND_TRIP":"ONE_WAY")).subscribe(a=>(t=a,!0)),t}getDateTime(e){const r=`${e.from.dates}, ${e.from.times}`;return null!=e.to?[r,null!==e.to?`${e.to.dates}, ${e.to.times}`:""].join(" - "):r}getPrice(e){const{passengers:r}=e;return r.reduce((a,c)=>c.fare+c.tax+a,0)}getTripPrice(e){return this.priceService.getPrice(e.from.price)+this.priceService.getPrice(e.to?.price)}}return u.\u0275fac=function(e){return new(e||u)(i.LFG(g.sK),i.LFG(l.N))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);