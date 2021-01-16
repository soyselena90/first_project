$(document).ready(function(){
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
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-check"></i>',
            current : ''
        },
    })


    $("#form-total-p-2 .final_btn").click(function(){
      alert("회원가입을 축하합니다. 로그인페이지로 이동합니다.");
          location.href="/login/login.html";

    });
});
