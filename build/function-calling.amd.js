/*! (C) WebReflection Mit Style License */
/*jslint plusplus: true, indent: 2 *//**
 * Whenever some "guru" tells you something is evil,
 * remember that Lucifer is a fallen angel too.
 * Learn what to trust and stop listening to dogmas!
 */(function(e,t,n,r){"use strict";if(e[n][t])return;e[n][t]=function(t,n,i){var s="null",o=[],u=(n||o).length,a=0,f=0;while(a<u)n[a]===r?o[a]=typeof r:n[a]===null?o[a]="arguments["+f++ +"]":o[a]="a["+a+"]",a++;return i&&(o[0]="["+o[0],o[u-1]+="].concat(Array.prototype.slice.call(arguments,"+u+"))"),e("f,a,c",["return function ",this.name||"","(){return f.",i?"apply":"call","(",t===r?s:t===null?"this":"c",u?",":"",u?o.join(","):",[]",")}"].join(""))(this,n,t)}})(Function,"calling","prototype");