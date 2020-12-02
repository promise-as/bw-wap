charset = 'UTF-8';
$(function () {
  theaMsForm($('.sign-in'));

  // 单选
  function radio(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radio('.test .r-row span', 'on');
  // 提升的原因
  $('.test .btn').click(function () {
    $('#reason').val($('.test .r-row .on').text());
  });

  // 关闭侧边导航
  $('.close').click(function () {
    $('.side-nav').hide();
  });

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

  if ($(document).width() <= 750) {
    // 折叠导航
    function foldNav(btn, nav, classname) {
      $(btn).click(function () {
        $(nav).toggleClass(classname);
      });
    }
    foldNav('.dropdown', '.nav', 'on');
  } else {
    // 等待图片加载完成
    $(document).ready(function () {
      // 右侧表单置顶固定悬浮
      var rApply = $('.r-apply');
      var applySize = $('.apply-size');
      if (rApply.size() > 0) { // 有表单的页面才执行里面代码
        var formTop = rApply.offset().top;
        $(window).scroll(function () {
          var winTop = $(window).scrollTop();
          if (winTop >= formTop) {
            applySize.show();
            rApply.css('position', 'fixed');
          } else {
            applySize.hide();
            rApply.css('position', 'initial');
          }
        })
      }
    });
  }
});

