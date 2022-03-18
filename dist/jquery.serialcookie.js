
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){const n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function t(e){return o(r.json?JSON.stringify(e):String(e))}function i(o,t){const i=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(t)?t(i):i}const r=e.cookie=function(n,c,u){if(arguments.length>1&&!e.isFunction(c)){if("number"==typeof(u=e.extend({},r.defaults,u)).expires){const e=u.expires,n=u.expires=new Date;n.setTime(+n+864e5*e)}return document.cookie=[o(n),"=",t(c),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}let s=n?void 0:{};const f=document.cookie?document.cookie.split("; "):[];for(let e=0,o=f.length;e<o;e++){const o=f[e].split("="),t=(d=o.shift(),r.raw?d:decodeURIComponent(d)),u=o.join("=");if(n&&n===t){s=i(u,c);break}n||void 0===i(u)||(s[t]=i(u))}var d;return s};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});


/*!
 * jQuery serialcookie
 * https://github.com/kevinmeunier/jquery-serialcookie
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
(function($){
  'use strict';

  $.serialcookie = function(options){
    const settings = $.extend({}, $.serialcookie.defaults, options);
    let lang;

    // Trigger the callback
    if( $.cookie('serialcookie-status') ){
      if( settings.callback && typeof settings.callback === 'function' )
        settings.callback($.cookie('serialcookie-status') === 'true');

      // No banner required if cookies are already accepted
      return;
    }

    // Auto-detecttion of the language based on <html lang="">
    if( settings.lang == 'auto' ){
      lang = $('html').attr('lang') || 'en';
      lang.replace('fr-FR', 'fr');
    }

    // Preparation of the template
    let html = settings.template;
    for( const index in settings.translations[lang] ){
      const translation = settings.translations[lang][index];
      html = html.replace('{'+ index +'}', translation);
    }

    // Creation of the banner
    const $banner = $(html).prependTo('body');

    // Closing the banner
    $banner.find('[data-serialcookie]').on('click', function(){
      const isAccepted = $(this).attr('data-serialcookie') == 'accept' ? true : false;

      // Creation of a cookie
      $.cookie('serialcookie-status', isAccepted, { expires: 365, path: '/' });

      // Hiding the banner
      $banner.fadeOut(function(){
        $banner.remove();
      });

      if( settings.callback && typeof settings.callback === 'function' )
        settings.callback(isAccepted);
    });
  };

  $.serialcookie.status = $.cookie('serialcookie-status');

  $.serialcookie.defaults = {
    lang: 'auto',
    callback: function(isAccepted){},
    template:
      '<div id="serialcookie">'+
        '<div id="serialcookie-col-1">{description}</div>'+
        '<div id="serialcookie-col-2">'+
          '<span id="serialcookie-reject" data-serialcookie="reject">{reject}</span>'+
          '<span id="serialcookie-accept" data-serialcookie="accept">{accept}</span>'+
        '</div>'+
      '</div>',
    translations: {
      en: {
        description: 'This website makes use of cookies to enhance browsing experience and provide additional functionality',
        reject: 'Reject',
        accept: 'Accept'
      },
      fr: {
        description: 'Ce site utilise des cookies pour améliorer l\'expérience de navigation et fournir des fonctionnalités supplémentaires.',
        reject: 'Refuser',
        accept: 'Accepter'
      },
      de: {
        description: 'Diese Internetseite verwendet Cookies, um die Nutzererfahrung zu verbessern und den Benutzern bestimmte Dienste und Funktionen bereitzustellen.',
        reject: 'Ablehnen',
        accept: 'Annehmen'
      },
      it: {
        description: 'I cookie ci aiutano a fornire i nostri servizi. Utilizzando tali servizi, accetti l\'utilizzo dei cookie da parte nostra.',
        reject: 'Rifiutare',
        accept: 'Accettare'
      },
      pt: {
        description: 'Este site utiliza cookies para melhorar a experiência de navegação e disponibilizar funcionalidades adicionais.',
        reject: 'Rejeitar',
        accept: 'Aceitar'
      },
      es: {
        description: 'Esta web utiliza cookies para mejorar la experiencia y proporcionar funcionalidades adicionales.',
        reject: 'Rechazar',
        accept: 'Aceptar'
      },
      ru: {
        description: 'На этом веб-сайте используются файлы cookie для улучшения пользовательского опыта и обеспечения дополнительной функциональности.',
        reject: 'Отклонять',
        accept: 'Принимать'
      }
    }
  };
})(jQuery);
