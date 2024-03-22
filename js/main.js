window.onload = function () {
  // 모달창
  // 모달을 숨기는 함수
  function hideModal() {
    document.getElementById("popup").style.display = "none";
  }

  // // "다시 보지 않기" 버튼 이벤트 리스너
  // document.getElementById("neverShowAgain").addEventListener("click", function () {
  //   // localStorage에 사용자의 선택 저장
  //   localStorage.setItem("hideModal", "true");
  //   hideModal();
  // });

  // // 페이지 로드 시 모달 상태 확인
  // window.onload = function () {
  //   // 사용자가 "다시 보지 않기"를 선택했는지 확인
  //   if (localStorage.getItem("hideModal") === "true") {
  //     hideModal();
  //   }
  // };

  // // "닫기" 버튼 이벤트 리스너 (선택적 구현)
  // document.getElementById("close").addEventListener("click", function () {
  //   hideModal();
  // });

  //min
  //menu area
  //topmenu
  // index 페이지의 메뉴 항목을 찾아서 해당 항목에 active 클래스를 추가합니다.
  const currentPage = "index.html"; // 현재 페이지의 URL을 설정합니다.
  const topMenu = document.querySelector(".top-menu");
  const topMenuLi = document.querySelectorAll(".top-menu > li");

  topMenuLi.forEach((li) => {
    const link = li.querySelector("a"); // 각 li 요소의 하위 a 요소를 찾습니다.
    const href = link.getAttribute("href"); // a 요소의 href 속성 값을 가져옵니다.

    // 만약 현재 페이지의 URL이 해당 li 요소의 href 속성 값과 일치한다면 active 클래스를 추가합니다.
    if (href === currentPage) {
      li.classList.add("active");
    }
  });

  topMenu.addEventListener("mouseleave", () => {
    topMenuLi.forEach((item) => {
      const link = item.querySelector("a");
      const href = link.getAttribute("href");
      if (href === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  topMenuLi.forEach((li) => {
    li.addEventListener("click", () => {
      // 클릭된 li에만 active 클래스를 추가하고 다른 li에서는 제거합니다.
      topMenuLi.forEach((item) => {
        if (item === li) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });

    li.addEventListener("mouseover", () => {
      // 호버한 메뉴 항목에 .active 클래스를 추가하고 이전에 추가된 클래스를 제거합니다.
      topMenuLi.forEach((item) => {
        if (item === li) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
  //top menu scroll logo hidden
  const topLogo = document.querySelector(".logo");
  const langBox = document.querySelector(".lang");
  let scy = 0;

  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    // 2.class 적용 여부 결정
    if (scy > 0) {
      topLogo.classList.add("logoh");
      langBox.classList.add("logoh");
    } else {
      topLogo.classList.remove("logoh");
      langBox.classList.remove("logoh");
    }
  });
  //language
  const langToggle = document.querySelector(".lang-more");
  const langM = document.querySelector(".lang > li:last-of-type");
  langToggle.addEventListener("click", () => {
    langM.classList.toggle("show");
  });
  langM.addEventListener("click", () => {
    langM.classList.remove("show");
  });
  //480 point logo img chg
  const fnLogoChg = document.querySelector(".logo > a > img");
  const innerWidth = window.innerWidth;
  if (innerWidth <= 480) {
    fnLogoChg.src = "images/favicon/apple-icon-76x76.png";
  }
  //ani product link
  var fnScNavLinkElement = document.querySelector(".ani-product a");
  fnScNavLinkElement.addEventListener("click", function (e) {
    e.preventDefault();
    var targetSectionId = this.getAttribute("href");
    var targetSection = document.querySelector(targetSectionId);
    var targetPosition = targetSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
  var fnAniImgChg = document.querySelector(".ani-img");
  var fnAniArea = document.querySelector(".ani-product");

  fnAniArea.addEventListener("mouseenter", function () {
    fnAniImgChg.src = "images/ani-product-h-01.png";
  });

  fnAniArea.addEventListener("mouseleave", function () {
    fnAniImgChg.src = "images/ani-product.png";
  });
  //quiz area
  const fnAnswerBox = document.querySelectorAll(".answer-box .answer-box-li");
  const fnChoiceBox = document.querySelectorAll(".choice-box .choice-box-li");
  const fnChkAnswerSub = document.querySelector(".answer-sub");
  let currentIdx = 0;
  let animationPlayed = false;

  // Click event handler for choice boxes
  function clickHandler(box) {
    if (currentIdx < fnChoiceBox.length) {
      fnAnswerBox[currentIdx].textContent = box.textContent;
      fnAnswerBox[currentIdx].classList.add("jsAnswer");
      currentIdx++;
      // 모든 fnAnswerBox가 채워졌는지 확인하고 정답 확인 및 버튼 활성화/비활성화
      const isAllFilled = Array.from(fnAnswerBox).every((li) => li.textContent.trim().length > 0);
      if (isAllFilled) {
        fnChkAnswerSub.classList.add("active-as");
      }
    }
  }

  // Add click event listener to choice boxes
  fnChoiceBox.forEach((box) => {
    box.addEventListener("click", () => {
      clickHandler(box);
    });
  });

  fnChkAnswerSub.addEventListener("click", () => {
    const userAnswer = Array.from(fnAnswerBox)
      .map((box) => box.textContent)
      .join(""); //join() 배열의 모든 요소를 하나의 문자열로 공백없이 결합
    const collecAnswer = "파티마겔";
    if (userAnswer == collecAnswer && !animationPlayed) {
      document.querySelector(".qbg2").classList.add("qbg2V");
      animationPlayed = true;
      //party-popper
      const TWO_PI = Math.PI * 2;
      const HALF_PI = Math.PI * 0.5;

      // canvas settings
      var viewWidth = 512,
        viewHeight = 350,
        drawingCanvas = document.getElementById("drawing_canvas"),
        ctx,
        timeStep = 1 / 40;

      Point = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
      };

      Particle = function (p0, p1, p2, p3) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;

        this.time = 0;
        this.duration = 3 + Math.random() * 2;
        this.color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

        this.w = 8;
        this.h = 6;

        this.complete = false;
      };

      Particle.prototype = {
        update: function () {
          this.time = Math.min(this.duration, this.time + timeStep);

          var f = Ease.outCubic(this.time, 0, 1, this.duration);
          var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

          var dx = p.x - this.x;
          var dy = p.y - this.y;

          this.r = Math.atan2(dy, dx) + HALF_PI;
          this.sy = Math.sin(Math.PI * f * 10);
          this.x = p.x;
          this.y = p.y;

          this.complete = this.time === this.duration;
        },
        draw: function () {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.r);
          ctx.scale(1, this.sy);

          ctx.fillStyle = this.color;
          ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

          ctx.restore();
        },
      };

      Loader = function (x, y) {
        this.x = x;
        this.y = y;

        this.r = 24;
        this._progress = 0;

        this.complete = false;
      };

      Loader.prototype = {
        reset: function () {
          this._progress = 0;
          this.complete = false;
        },
        set progress(p) {
          this._progress = p < 0 ? 0 : p > 1 ? 1 : p;

          this.complete = this._progress === 1;
        },
        get progress() {
          return this._progress;
        },
        draw: function () {
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
          ctx.lineTo(this.x, this.y);
          ctx.closePath();
          ctx.fill();
        },
      };

      // pun intended
      Exploader = function (x, y) {
        this.x = x;
        this.y = y;

        this.startRadius = 24;

        this.time = 0;
        this.duration = 0.4;
        this.progress = 0;

        this.complete = false;
      };

      Exploader.prototype = {
        reset: function () {
          this.time = 0;
          this.progress = 0;
          this.complete = false;
        },
        update: function () {
          this.time = Math.min(this.duration, this.time + timeStep);
          this.progress = Ease.inBack(this.time, 0, 1, this.duration);

          this.complete = this.time === this.duration;
        },
        draw: function () {
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
          ctx.fill();
        },
      };

      var particles = [],
        loader,
        exploader,
        phase = 0;

      function initDrawingCanvas() {
        drawingCanvas.width = viewWidth;
        drawingCanvas.height = viewHeight;
        ctx = drawingCanvas.getContext("2d");

        createLoader();
        createExploader();
        createParticles();
      }

      function createLoader() {
        loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
      }

      function createExploader() {
        exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
      }

      function createParticles() {
        for (var i = 0; i < 128; i++) {
          var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
          var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
          var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
          var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

          particles.push(new Particle(p0, p1, p2, p3));
        }
      }

      function update() {
        switch (phase) {
          case 0:
            loader.progress += 1 / 45;
            break;
          case 1:
            exploader.update();
            break;
          case 2:
            particles.forEach(function (p) {
              p.update();
            });
            break;
        }
      }

      function draw() {
        ctx.clearRect(0, 0, viewWidth, viewHeight);

        switch (phase) {
          case 0:
            loader.draw();
            break;
          case 1:
            exploader.draw();
            break;
          case 2:
            particles.forEach(function (p) {
              p.draw();
            });
            break;
        }
      }

      function loop() {
        update();
        draw();

        if (phase === 0 && loader.complete) {
          phase = 1;
        } else if (phase === 1 && exploader.complete) {
          phase = 2;
        } else if (phase === 2 && checkParticlesComplete()) {
          // reset
          phase = 0;
          loader.reset();
          exploader.reset();
          particles.length = 0;
          createParticles();
        }

        requestAnimationFrame(loop);
      }

      function checkParticlesComplete() {
        for (var i = 0; i < particles.length; i++) {
          if (particles[i].complete === false) return false;
        }
        return true;
      }

      // math and stuff

      /**
       * easing equations from http://gizma.com/easing/
       * t = current time
       * b = start value
       * c = delta value
       * d = duration
       */
      var Ease = {
        inCubic: function (t, b, c, d) {
          t /= d;
          return c * t * t * t + b;
        },
        outCubic: function (t, b, c, d) {
          t /= d;
          t--;
          return c * (t * t * t + 1) + b;
        },
        inOutCubic: function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
        },
        inBack: function (t, b, c, d, s) {
          s = s || 1.70158;
          return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
      };

      function cubeBezier(p0, c0, c1, p1, t) {
        var p = new Point();
        var nt = 1 - t;

        p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
        p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

        return p;
      }
      initDrawingCanvas();
      requestAnimationFrame(loop);
    } else {
      document.querySelector(".qbg3").classList.add("show-qbg3");
      document.querySelector(".quiz-retry-btn").addEventListener("click", function () {
        document.querySelector(".qbg3").classList.remove("show-qbg3");
        // 틀렸을 경우 정답 박스 초기화
        currentIdx = 0;
        fnAnswerBox.forEach((box) => {
          box.textContent = "";
          box.classList.remove("jsAnswer");
        });
      });
    }
  });

  
  // hun
};
