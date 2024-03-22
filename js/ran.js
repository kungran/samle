window.addEventListener("load", function () {
  // ran
  // Swiper 설정
//   var swiper = new Swiper(".swiper-short", {
//     loop: true,
//     autoplay: {
//       delay: 1000, //1초의 딜레이를 주고 자동 재생된다
//     },
//     // slidesPerView: 5,
//     spaceBetween: 10, //여백

//     pagination: {
//       el: ".swiper-short .short-pn .swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-short .short-pn .swiper-button-next",
//       prevEl: ".swiper-short .short-pn .swiper-button-prev",
//     },
//     breakpoints: {
//       900: {
//         //브라우저 화면너비 900이상일때
//         slidesPerView: 5.8,
//         spaceBetween: 50,
//       },
//       786: {
//         slidesPerView: 4.7,
//         spaceBetween: 30,
//       },
//       600: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//       },
//       320: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       200: {
//         slidesPerView: 2.3,
//         spaceBetween: 20,
//       },
//     },
//   });
  // 쇼츠 기능
  // 첫번째 모달 창 열기
  document.getElementById("youtube-link").addEventListener("click", function () {
    document.getElementById("youtube-modal").style.display = "block";
  });

  // 첫 번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal").style.display = "none";
    });
  });

  // 두번째 모달 창 열기
  document.getElementById("youtube-link-2").addEventListener("click", function () {
    document.getElementById("youtube-modal-2").style.display = "block";
  });

  // 두 번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-2 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-2").style.display = "none";
    });
  });

  // 세번째 모달 창 열기
  document.getElementById("youtube-link-3").addEventListener("click", function () {
    document.getElementById("youtube-modal-3").style.display = "block";
  });
  // 세번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-3 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-3").style.display = "none";
    });
  });

  // 네번째 모달 창 열기
  document.getElementById("youtube-link-4").addEventListener("click", function () {
    document.getElementById("youtube-modal-4").style.display = "block";
  });
  // 네번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-4 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-4").style.display = "none";
    });
  });

  // 다섯번째 모달 창 열기
  document.getElementById("youtube-link-5").addEventListener("click", function () {
    document.getElementById("youtube-modal-5").style.display = "block";
  });
  // 다섯번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-5 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-5").style.display = "none";
    });
  });

  // 여섯번째 모달 창 열기
  document.getElementById("youtube-link-6").addEventListener("click", function () {
    document.getElementById("youtube-modal-6").style.display = "block";
  });
  // 여섯번째 모달 창 닫기
  document.querySelectorAll("#youtube-modal-6 .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("youtube-modal-6").style.display = "none";
    });
  });

  /* 따라다니는 퀵메뉴 */
  // var currentPosition = parseInt($(".quickmenu").css("top"));
  // $(window).scroll(function () {
  //   var position = $(window).scrollTop();
  //   $(".quickmenu")
  //     .stop()
  //     .animate({ top: position + currentPosition + "px" }, 600);
  // });

  // 신청조회 모달 창 열기
  document.getElementById("search-link").addEventListener("click", function () {
    document.getElementById("search-modal").style.display = "block";
  });
  // 신청조회 모달 창 닫기
  document.querySelectorAll("#search-modal .q-m-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("search-modal").style.display = "none";
    });
  });

  // FAQ 모달 창 열기
  document.getElementById("FAQ-link").addEventListener("click", function () {
    document.getElementById("FAQ-link").style.display = "block";
  });

  // FAQ 모달 창 닫기
  document.querySelectorAll("#FAQ-link .s-close").forEach(function (element) {
    element.addEventListener("click", function () {
      document.getElementById("FAQ-link").style.display = "none";
    });
  });

  // 탑 버튼

  // ===== top으로 가는 버튼
  const topBtn = document.getElementById("quick_3");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // 조건문 수정
    if (window.scrollY === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // 수직 스크롤 값 가져오기
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 수평 스크롤 값 가져오기
  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  console.log("수직 스크롤 값: " + scrollTop);
  console.log("수평 스크롤 값: " + scrollLeft);
});
