'use strict';

{

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const toRoom = document.getElementById('toRoom');
const toDish = document.getElementById('toDish');
const toSpa = document.getElementById('toSpa');

open.addEventListener('click',() => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toRoom.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toDish.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toSpa.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

const header = document.getElementById('header');

window.addEventListener('scroll', ()=> {
  header.classList.add('show');
});

AOS.init({
  offset: 200,
  delay: 50,
  duration: 500,
  easing: 'ease-in',
  once: true,
});

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  closeModal.click();
});

// flatpickr('#js-datepicker', {
//   locale : Japanese, // 日本語用モジュールを適用
//   dateFormat : 'Y.m.d（D）', // 2021.05.24（月）の形式で表示
//   defaultDate : new Date() // 入力エリアの初期値
// });

// function changeColor(hoge){
//   if( hoge.value == 0 ){
//       hoge.style.color = '';
//   }else{
//       hoge.style.color = 'black';
//   }
// }

const config = {
  minDate: "today",
  mode: "range"
}

flatpickr('.flatpickr', config);
 
  // ①タブをクリックしたら発動
  $('.tab li').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
 
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active');
 
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.area ul').removeClass('show').eq(index).addClass('show');
 
  });

}