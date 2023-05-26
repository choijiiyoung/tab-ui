//1. 전역변수
const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

//2. 이벤트 바인딩
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		//이벤트 재할당 방지
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;

		active(btns, idx);
		active(boxs, idx);
	});
});

//3. 함수
function active(arrEl, index) {
	console.log('click');

	for (const el of arrEl) el.classList.remove('on');
	arrEl[index].classList.add('on');
}
