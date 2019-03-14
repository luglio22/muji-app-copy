$(document).on("turbolinks:load",function(){
  //新規登録バリデーション
  $(".new-user-content--main--bottom--list--btm--link").click(function(e){
    var judge = 0;
    // 名前(姓)
    var family = $(".new-user-content--main--personal--body--name--right--family--form").val()
    if(family.length == 0) {
      $("li.new-user-content--main--error--message--family").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--family").css("display","none");
    }
    // 名前(名)
    var last = $(".new-user-content--main--personal--body--name--right--last--form").val()
    if(last.length == 0) {
      $("li.new-user-content--main--error--message--last").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--last").css("display","none");
    }
    // フリガナ(姓)
    var jp_fa = $(".new-user-content--main--personal--body--kana--right--family--form").val()
    if(jp_fa.length == 0) {
      $("li.new-user-content--main--error--message--jp_fa").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--jp_fa").css("display","none");
    }
    // フリガナ(名)
    var jp_la = $(".new-user-content--main--personal--body--kana--right--last--form").val()
    if(jp_la.length == 0) {
      $("li.new-user-content--main--error--message--jp_la").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--jp_la").css("display","none");
    }
    // 郵便番号
    var postal_code = $(".new-user-content--main--personal--body--postal-code--right--form").val()
    if(postal_code.length == 0) {
      $("li.new-user-content--main--error--message--postal-code").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--postal-code").css("display","none");
    }
    // 都道府県
    var prefecture = $(".new-user-content--main--personal--body--prefecture--right--form").val()
    if(prefecture.length == 0) {
      $("li.new-user-content--main--error--message--prefecture").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--prefecture").css("display","none");
    }
    // 市町村
    var city = $(".new-user-content--main--personal--body--city--right--form").val()
    if(city.length == 0) {
      $("li.new-user-content--main--error--message--city").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--city").css("display","none");
    }
    // 番地
    var address = $(".new-user-content--main--personal--body--address--right--form").val()
    if(address.length == 0) {
      $("li.new-user-content--main--error--message--address").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--address").css("display","none");
    }
    // 電話番号
    var phone = $(".new-user-content--main--personal--body--phone--right--form").val()
    if(phone.length == 0) {
      $("li.new-user-content--main--error--message--phone").css("display","block");
      judge += 1;
    } else {
      $("li.new-user-content--main--error--message--phone").css("display","none");
    }
    if(judge != 0) {
      e.preventDefault();
      $("ul.new-user-content--main--error--message").css("display","block");
      $('body, html').animate({ scrollTop: 0 }, 1);
      return false;
    }
  })
})
