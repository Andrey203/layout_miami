'use strict';

const $ = window.$;

$(document).ready(() => {
  // ----- header scripts--------
  $('.menu-icon').click(() => {
    if ($('.menu-icon').hasClass('close-icon')) {
      $('.menu-icon').removeClass('close-icon');
    } else {
      $('.menu-icon').addClass('close-icon');
    }

    $('.nav').toggle(() => {
      $('.header__title-container').toggle(() => {
        if ($('.nav').css('display') === 'block') {
          $('.header').css('justify-content', 'start');
          $('.header__title-container').css('left', '-100%');
          $('.nav__menu').css('top', '0');
        } else {
          $('.header').css('justify-content', 'space-between');
          $('.header__title-container').css('left', '0');
          $('.nav__menu').css('top', '100%');
        }
      });
    });
  });
});
