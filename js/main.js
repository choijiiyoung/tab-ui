//1. 전역변수
const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

//2. 이벤트 바인딩
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		//버튼 on 클래스 초기화
		for (const el of btns) el.classList.remove('on');

		//클릭한 버튼에만 on 클래스 추가
		btns[idx].classList.add('on');

		//panel on 클래스 초기화
		for (const el of boxs) el.classList.remove('on');

		//클릭한 버튼과 같은 인덱스의 panel에 on 클래스 추가
		boxs[idx].classList.add('on');
	});
});

//3. 함수
