/*! (C) WebReflection Mit Style License */
/*jslint plusplus: true, indent: 2 *//**
 * Whenever some "guru" tells you something is evil,
 * remember that Lucifer is a fallen angel too.
 */(function(e,t,n,r){"use strict";if(e[n][t])return;e[n][t]=function(t,n,i){var s="null",o=!i,u=[],a=(n||u).length,f=0,l=0;while(f<a)n[f]===r?u[f]=typeof r:n[f]===null?u[f]="arguments["+l++ +"]":u[f]="a["+f+"]",f++;return o&&(u[0]="["+u[0],u[a-1]+="].concat(Array.prototype.slice.call(arguments,"+l+"))"),e("f,a,c",["return function ",this.name||"","(){return f.",o?"apply":"call","(",t===r?s:t===null?"this":"c",a?",":"",a?u.join(","):",[]",")}"].join(""))(this,n,t)}})(Function,"calling","prototype");