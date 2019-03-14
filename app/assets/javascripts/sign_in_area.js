$(document).on("turbolinks:load",function(){
  //新規登録　
  //PCメールアドレス
  $(".new-user-content--main--login--info--pc-mail--right--email").keyup(function(){
    var email_form = $(".new-user-content--main--login--info--pc-mail--right--email").val()
    if(email_form.length != 0) {
      $(".new-user-content--main--login--info--pc-mail--right--email").css("background","#fff ");
    } else {
      $(".new-user-content--main--login--info--pc-mail--right--email").css("background","rgb(255, 153, 153) ");
    }
  })
  //携帯アドレス
  $("input.new-user-content--main--login--info--phone-mail--right--main").keyup(function(){
    var phone_mail_form = $("input.new-user-content--main--login--info--phone-mail--right--main").val()
    if(phone_mail_form != 0) {
      $("input.new-user-content--main--login--info--phone-mail--right--main").css("background","#fff ");
    } else {
      $("input.new-user-content--main--login--info--phone-mail--right--main").css("background","rgb(255, 153, 153) ");
    }
  })
  //苗字
  $(".new-user-content--main--personal--body--name--right--family--form").keyup(function(){
    var family_name_form = $(".new-user-content--main--personal--body--name--right--family--form").val()
    if(family_name_form != 0) {
      $(".new-user-content--main--personal--body--name--right--family--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--name--right--family--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //名前
  $(".new-user-content--main--personal--body--name--right--last--form").keyup(function(){
    var last_name_form = $(".new-user-content--main--personal--body--name--right--last--form").val()
    if(last_name_form != 0) {
      $(".new-user-content--main--personal--body--name--right--last--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--name--right--last--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //苗字　カタカナ
  $(".new-user-content--main--personal--body--kana--right--family--form").keyup(function(){
    var family_name_jp_form = $(".new-user-content--main--personal--body--kana--right--family--form").val()
    if(family_name_jp_form != 0) {
      $(".new-user-content--main--personal--body--kana--right--family--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--kana--right--family--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //名前　カタカナ
  $(".new-user-content--main--personal--body--kana--right--last--form").keyup(function(){
    var last_name_jp_form = $(".new-user-content--main--personal--body--kana--right--last--form").val()
    if(last_name_jp_form != 0) {
      $(".new-user-content--main--personal--body--kana--right--last--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--kana--right--last--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //郵便番号
  $(".new-user-content--main--personal--body--postal-code--right--form").keyup(function(){
    var postal_code_form = $(".new-user-content--main--personal--body--postal-code--right--form").val()
    if(postal_code_form != 0) {
      $(".new-user-content--main--personal--body--postal-code--right--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--postal-code--right--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //都道府県
  $(".new-user-content--main--personal--body--prefecture--right--form").keyup(function(){
    var prefecture_form = $(".new-user-content--main--personal--body--prefecture--right--form").val()
    if(prefecture_form != 0) {
      $(".new-user-content--main--personal--body--prefecture--right--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--prefecture--right--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //町域
  $(".new-user-content--main--personal--body--city--right--form").keyup(function(){
    var city_form = $(".new-user-content--main--personal--body--city--right--form").val()
    if(city_form != 0) {
      $(".new-user-content--main--personal--body--city--right--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--city--right--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //丁目・番地
  $(".new-user-content--main--personal--body--address--right--form").keyup(function(){
    var address_form = $(".new-user-content--main--personal--body--address--right--form").val()
    if(address_form != 0) {
      $(".new-user-content--main--personal--body--address--right--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--address--right--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //電話番号
  $(".new-user-content--main--personal--body--phone--right--form").keyup(function(){
    var phonenumber_form = $(".new-user-content--main--personal--body--phone--right--form").val()
    if(phonenumber_form != 0) {
      $(".new-user-content--main--personal--body--phone--right--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--phone--right--form").css("background","rgb(255, 153, 153) ");
    }
  })
  //西暦
  $(".new-user-content--main--personal--body--birth--right--year--form").keyup(function(){
    var year_form = $(".new-user-content--main--personal--body--birth--right--year--form").val()
    if(year_form != 0) {
      $(".new-user-content--main--personal--body--birth--right--year--form").css("background","#fff ");
    } else {
      $(".new-user-content--main--personal--body--birth--right--year--form").css("background","rgb(255, 153, 153) ");
    }
  })

})
