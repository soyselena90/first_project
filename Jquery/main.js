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
            finish : '<i id="checkicon" class="fas fa-check"></i>',
            current : ''
        },
    })

 $("#checkicon").click(function(){
   alert("회원가입을 축하합니다. 로그인페이지로 이동합니다.");
       location.href="/login/login.html";
 });

});
