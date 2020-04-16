var el = document.querySelector("#ta"); // テキストエリア読み込み
// 行を増加
el.addEventListener("input", function(ev) {
    if (parseInt(el.rows, 10) > 1 && parseInt(el.rows, 10) < 2) {
    const currentRow = el.value.split("\n").length;
    el.rows = currentRow + 1;
    }
});
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
    fitToContent(el, 105); // テキストエリアの最大の高さ
}); 

// 再度フォーカスをあてたとき、３行以上であればエリアの高さ拡張
el.onfocus = function(){
    const currentRow = el.value.split("\n").length;
    if(currentRow > 3){
        el.style.height = 105 + "px";
    }
};