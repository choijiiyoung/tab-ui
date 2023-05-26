//1. 전역변수
const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

//2. 이벤트 바인딩
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		active(btns, idx);
		active(boxs, idx);
	});
});

//3. 함수
function active(arrEl, index) {
	console.log('click');
	//panel on 클래스 초기화
	for (const el of arrEl) el.classList.remove('on');

	//클릭한 버튼과 같은 인덱스의 panel에 on 클래스 추가
	arrEl[index].classList.add('on');
}
