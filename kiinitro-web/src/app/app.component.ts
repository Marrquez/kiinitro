import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit(): any {
    jQuery(document).ready(function () {
      jQuery('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
      });

      // Page scrolling feature
      jQuery('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        jQuery('html, body').stop().animate({
          scrollTop: jQuery(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        jQuery("#navbar").collapse('hide');
      });
    });

    var cbpAnimatedHeader = (function() {
      var docElem = document.documentElement,
        header = document.querySelector( '.navbar-default' ),
        didScroll = false,
        changeHeaderOn = 200;
      function init() {
        window.addEventListener( 'scroll', function( event ) {
          if( !didScroll ) {
            didScroll = true;
            setTimeout( scrollPage, 250 );
          }
        }, false );
      }
      function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
          jQuery(header).addClass('navbar-scroll')
        }
        else {
          jQuery(header).removeClass('navbar-scroll')
        }
        didScroll = false;
      }
      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }
      init();
    })();

    // Activate WOW.js plugin for animation on scrol
    new WOW().init();
  };
}
