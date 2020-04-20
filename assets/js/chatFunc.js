// テキストエリア読み込み
var el = document.querySelector("#ta");
// テキストエリアからフォーカスが離れたらテキストエリアの大きさを初期値に戻す
el.onblur = function(){
    el.style.height = 36 + "px";
};

// 改行数により高さを調節
function fitToContent(el, maxHeight) {
    let adjustedHeight = el.clientHeight;
    if ( !maxHeight || maxHeight > adjustedHeight ) {
        adjustedHeight = Math.max(el.scrollHeight, adjustedHeight);
        if ( maxHeight ) {
            adjustedHeight = Math.min(maxHeight, adjustedHeight);
        }
        if ( adjustedHeight > el.clientHeight ) {
            el.style.height = adjustedHeight + "px";
        }
    }
};

el.addEventListener("input", _ev => {
    fitToContent(el, 92); // テキストエリアの最大の高さ92px
});
// 1行３２ｐｘ
// 2行６２ｐｘ
// 3行９２ｐｘ

// 再フォーカス時、高さを自動調整
el.onfocus = function(){
    el.style.height = fitToContent(el, 92);
};

// ----------------------------------モーダル↓----------------------------------
$(function(){
    $('.select-stamp').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
// 画像配列
var imgsList = new Vue({
    el: '#imgsList',
    data: {
      items: [
        "assets/images/stamp/1.png",
        "assets/images/stamp/2.png",
        "assets/images/stamp/3.png",
        "assets/images/stamp/4.png",
        "assets/images/stamp/5.png",
        "assets/images/stamp/6.png",
        "assets/images/stamp/7.png",
        "assets/images/stamp/8.png",
        "assets/images/stamp/9.png",
        "assets/images/stamp/10.png",
        "assets/images/stamp/11.png",
        "assets/images/stamp/12.png",
        "assets/images/stamp/13.png",
        "assets/images/stamp/14.png",
        "assets/images/stamp/15.png",
        "assets/images/stamp/16.png",
        "assets/images/stamp/17.png",
        "assets/images/stamp/18.png",
        "assets/images/stamp/19.png",
        "assets/images/stamp/20.png",
        "assets/images/stamp/21.png",
        "assets/images/stamp/22.png",
        "assets/images/stamp/23.png",
        "assets/images/stamp/24.png",
        "assets/images/stamp/25.png",
        "assets/images/stamp/26.png",
        "assets/images/stamp/27.png",
        "assets/images/stamp/28.png",
        "assets/images/stamp/29.png",
        "assets/images/stamp/30.png"
      ]
    }
  });