// $('.btn span').click(function () {
//   // 클릭한 자기자신 span버튼은 active클래스 넣기
//   $(this).addClass('active');
//   // 클릭한 자기자신의 형제 span버튼은 active클래스 빼기
//   $(this).siblings().removeClass('active');
// });

$('.menu li').mouseenter(function () {
  // .sub-menu를 선택요소로 입력하면 menu-1,nenu-2 둘다 slideDown 된다.
  // $('.sub-menu').slideDown();
  // 내가 선택한 메뉴하나만 slideDown되게 하려면 this 명령어를 입력한다.
  // 마우스가 올라가면 slideDown될 메뉴는 menu li가 아니라 그 자식 요소인 sub-menu이다.
  // 그러므로 자식요소 탐색인 children()메서드 지정한다.
  // 단, li 밑에 자식요소가 2개이기때문에 반드시 정확하게 선택할 자식요소 클래스명을 입력한다.
  $(this).children('.sub-menu').stop().slideDown();
});
$('.menu li').mouseleave(function () {
  // stop()메서드는 이전 애니메이션을 삭제해준다.
  $(this).children('.sub-menu').stop().slideUp();
});
