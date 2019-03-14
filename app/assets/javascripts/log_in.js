//トップページ　hover ログイン/新規登録
$(document).on("turbolinks:load",function(){
  $(".header_top--right--account").mouseover(function(){
    $("ul.header_top--right--account--table").css("display","block")
  })
  $(".header_top--right--account").mouseout(function(){
    $("ul.header_top--right--account--table").css("display","none")
  })
})
