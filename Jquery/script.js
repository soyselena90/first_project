$(document).ready(function(){

// index_page main banner

 $("#slider_banner").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   dots: true,
   arrows: false,
   swipe: true,
 });

// sub slide
$('.show_live_part').slick({
  slide: 'div',
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: true,
  swipe: true,
  autoplaySpeed: 3000,
});

//index-grid

 $('.tab-item').on('click', function(){

   $(".tab-item").removeClass("tab-border");

   $(this).addClass("tab-border");

 });



  // poster button

    $(".slide_imgbox img").click(function(){
      $(".popup_for_upcoming").show();
    });

    $("#poster_detalis_info span i").click(function(){
      $(".popup_for_upcoming").hide();
    });

    // recommend

    $(".click_box img").click(function(){
      $(".popup_for_recom").show();
    });

    $("#poster_detalis_info span i").click(function(){
      $(".popup_for_recom").hide();
    });

   // replay

    $(".click_box02 img").click(function(){
      $(".popup_for_replay").show();
    });

    $("#poster_detalis_info span i").click(function(){
      $(".popup_for_replay").hide();
    });

    //email_contact

    $(".submitforemail").click(function(){
      alert("전송되었습니다.");
    });

//log-in page

    $(".login-btn").click(function(){
    if($(".form-control_id").val() != "" && $(".form-control_pw").val() != ""){
          location.href='/sub/main_play.html';
    }else{
        alert("ID와 비밀번호를 확인해주세요.");
      };
    });

//register_page

    $(function(){
        $("#form-total").steps({
            headerTag: "h2",
            bodyTag: "section",
            transitionEffect: "fade",
            enableAllSteps: true,
            stepsOrientation: "vertical",
            autoFocus: true,
            transitionEffectSpeed: 500,
            titleTemplate : '<div class="title">#title#</div>',
            labels: {
                previous : 'Back Step',
                next : '<i class="fas fa-arrow-right"></i>',
                finish : '<i class="fas fa-check"></i>',
                current : ''
            },
        });
    });


    $(".final_btn").click(function(){
      alert("회원가입을 축하합니다. 로그인페이지로 이동합니다.");
          location.href='/login/login.html';

    });


    // faq

    $(".container_faq dt").click(function(){

      $(this).next().slideToggle(500).siblings("dd").slideUp();

    });

    //Reservation btn click

    $('.makereserve').click(function(){

      var result = confirm('예약하시겠습니까?');

       if(result){ //yes

         alert("예약완료되었습니다.");

       }

       });

//add my list

       $('.makelist').click(function(){

         alert("나의 공연에 추가되었습니다.");

      });

//All checked watchlist

    $("#checkall").click(function(){
        if($("#checkall").prop("checked")){
          $(".box_name").prop("checked",true);
           }else{
          $(".box_name").prop("checked",false);
        }
      });

 //checked delete item

  $(".watch_delete_btn").click(function() {
    if ($(".box_name:checked").length == 0){
      alert("삭제할 리스트를 선택해주세요.");
      return false;
    }
    if(confirm("삭제하시겠습니까?")){
      alert("삭제되었습니다.");
      var deleteItem = [];
      $("input:checkbox").each(function() {
        var $this = $(this);
        if ($this.is(":checked")) {
          $(this).parent("li").remove();
        }
      });
     }else{
       return false;
     }
   });

  $(".delete_btn").click(function(){
    if(confirm("삭제하시겠습니까?")){
      alert("삭제되었습니다.");
      $(this).parents("li").remove();
    }
  });

//edit btn my page
$(".click_plan").click(function(){
  alert("수정되었습니다.")
});

$(".no_change").click(function(){
  alert("수정이 불가합니다.")
});

//mypage replay btn

$('.watch_replay_btn').click(function(){

  alert("다시볼 수 없는 공연입니다.");

});

//event li fade


   var count = 0;

  $('#fadebox_event .img_ul_fade li').eq(count).fadeIn(700);

  setInterval(function(){

  count++;
  count = count%5;

  $('#fadebox_event .img_ul_fade li').eq(count).fadeIn(700).siblings().fadeOut(700);

},2000);

//event _ sendbtn

$('.event_apply_btn').click(function(){

  alert("이벤트 참여가 완료되었습니다.");
    location.href='/event/event.html';

});







});
