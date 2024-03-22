//min

// ran

// hun

$(document).ready(function () {
  //min
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // 월이나 일이 한 자릿수인 경우 앞에 0을 붙임
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  }

  // 페이지 로드 시 현재 날짜를 input에 설정
  $("#date").val(getCurrentDate());
  // 현재 날짜 이전의 날짜 선택 불가능하도록 설정
  $("#date").attr("min", getCurrentDate());
  //hun
  var area0 = ["서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
  var areas = [
    [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
    ["대덕구", "동구", "서구", "유성구", "중구"],
    ["광산구", "남구", "동구", "북구", "서구"],
    ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
    ["남구", "동구", "북구", "중구", "울주군"],
    ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"],
    [
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
      "가평군",
      "양평군",
      "여주군",
      "연천군",
    ],
    ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"],
    ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"],
    ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"],
    ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
    ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
    ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"],
    ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
    ["서귀포시", "제주시", "남제주군", "북제주군"],
  ];

 // Populate the 시/도 dropdown
 $("#sido").append(area0.map(function(area) {
  return $("<option>").val(area).text(area);
}));

// 시/도 선택 change event
$("#sido").change(function() {
  var index = $("#sido option").index($("#sido option:selected")) - 1; // Adjusted for zero-indexing and the placeholder option
  var selectedArea = areas[index] || [];
  var $gugun = $("#gugun").empty().append("<option value=''>구/군 선택</option>");

  $.each(selectedArea, function() {
    $gugun.append($("<option>").val(this).text(this));
  });
});
$('.js-click-modal').click(function(){
  $('.container').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.container').removeClass('modal-open');
});
function openModal() {
  document.querySelector(".app-modal_wrap").style.display = "block";
}

// 모달 닫기 함수
function closeModal() {
  document.querySelector(".app-modal_wrap").style.display = "none";
}
$('#app-bt').prop('disabled', true);
// 신청하기 버튼 클릭 시 모달 열기
document.getElementById("app-bt").addEventListener("click", function (event) {
  event.preventDefault(); // 폼 제출 이벤트 방지
  openModal();
});

// // 모달 외부 클릭 시 모달 닫기 이벤트 추가
// document.querySelector(".app-modal_wrap").addEventListener("click", function (event) {
//   if (event.target.classList.contains(".app-modal_wrap")) {
//     closeModal();
//   }
// });

let seconds; // 남은 시간 변수
let countdown; // 카운트다운을 관리하는 변수
const $timeSpan = $('.time'); // 시간을 표시할 요소
const $btnSend = $('.code-bt'); // "인증번호 받기" 버튼 요소
const $btnAuth = $('.btn_auth') // "인증 하기" 버튼 요소

$('#btn_auth').prop('disabled', true);

// 시간을 업데이트하고 화면에 표시하는 함수
const updateCountdown = function() {
    if (seconds >= 0) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        $timeSpan.text(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
        seconds--;
    } else {
        clearInterval(countdown);
        alert('인증번호 유효시간이 만료되었습니다.');
    }
};

// "인증번호 받기" 버튼 클릭 이벤트 핸들러
$btnSend.on('click', function(e) {
    e.preventDefault();
    $btnSend.text('재전송');
    alert('인증번호가 발송되었습니다.');

    $('#btn_auth').prop('disabled', false);

    clearInterval(countdown);
    seconds = 180; // 3분(180초)

    updateCountdown();
    // 1초마다 카운트다운 업데이트
    countdown = setInterval(updateCountdown, 1000); 
});
$btnAuth.on('click', function(e) {
  e.preventDefault();
  $btnSend.text('인증 요청');
  alert('인증이 완료되었습니다.');

  $timeSpan.hide();
  // 신청 하기 버튼 활성화
  $('#app-bt').prop('disabled', false);
});
});

