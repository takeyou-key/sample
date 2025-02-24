'use strict';
document.addEventListener("DOMContentLoaded", function () {
    var fb = document.getElementById("facebook");
    if (fb) {
      fb.remove(); // 要素を完全に削除
    }
  });

$('.main-visual-slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.main-visual-slider, sub-slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.main-visual-slider, sub-slider').slick('slickPlay');
});

$('.sub-slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 960,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 428,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
    }
]
});

$('.case-slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: true,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 3,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 960,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1.5,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 428,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1.5枚見せる
        }
    }
]
});

// -------------------------------------------
// ハンバーガー
// -------------------------------------------
$(function () {
    $('.toggle-btn').click(function () {
        $('#header').toggleClass('open')
    });
    $('#nav').click(function () {
        $('#header').removeClass('open')
    });
    $('#nav a').click(function () {
        $('#header').removeClass('open')
    });
});

// -------------------------------------------
// スムーススクロール
// -------------------------------------------
$(function () {
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "index.html" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 700, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });
});

// -------------------------------------------
// to-top
// -------------------------------------------
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) { // 1000pxスクロールしていたら上に戻るボタンを表示
        $(".to-top, .side-btn-container").fadeIn();
    } else {
        $(".to-top, .side-btn-container").fadeOut();
    }
});
$(".to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800); // 800msかけて上に戻る
});

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});


document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector("header").offsetHeight; // ヘッダーの高さを取得
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // デフォルトの動作を無効化
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - headerHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth" // スムーズスクロール
          });
        }
      });
    });
  });
  


// -------------------------------------------
// アコーディオン
// -------------------------------------------
//アコーディオンをクリックした時の動作
$('.accordion-area-title').on('click', function() {//タイトル要素をクリックしたら
	$('.accordion-area-box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".accordion-area-box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('off')){//タイトル要素にクラス名offがあれば
		$(this).removeClass('off');//クラス名を除去    
	}else{//それ以外は
		$('.off').removeClass('off'); //クラス名offを全て除去した後
		$(this).addClass('off');//クリックしたタイトルにクラス名offを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('off');				///タイトルにクラス名offを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});

// -------------------------------------------
// fade
// -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // 要素ごとの設定を定義
    const animations = [
        { selector: ".fadeIn", animationClass: "fadeIn" },
        { selector: ".fadeLeft", animationClass: "fadeLeft" },
        { selector: ".fadeRight", animationClass: "fadeRight" },
        { selector: ".fadeUp", animationClass: "fadeUp" },
        { selector: ".fadeBottom", animationClass: "fadeBottom" }
    ];

    // 共通のIntersectionObserverを定義
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute("data-animation-class");
                let delay = entry.target.getAttribute("data-delay") || "0"; // `data-delay` を取得
                delay = parseFloat(delay) * 1000; // 秒 → ミリ秒に変換

                console.log("Delay:", delay); // 🔍 デバッグ用

                setTimeout(() => {
                    entry.target.classList.add("visible", animationClass);
                    observer.unobserve(entry.target); // 一度だけ適用
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    // 各設定に基づいて監視を開始
    animations.forEach(({ selector, animationClass }) => {
        document.querySelectorAll(selector).forEach(element => {
            element.setAttribute("data-animation-class", animationClass);
            observer.observe(element);
        });
    });
});


