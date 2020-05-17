var n11 = ["HTML", "1", "들어가기"]
var n12 = ["HTML", "2", "태그"]
var n13 = ["HTML", "3", "속성"]
var n14 = ["HTML", "4", "웹페이지 만들기"]

var n21 = ["CSS", "1", "속성과 선택자"]
var n22 = ["CSS", "2", "박스모델"]
var n23 = ["CSS", "3", "그리드"]
var n24 = ["CSS", "4", "반응형 디자인"]
var n25 = ["CSS", "5", "CSS 코드의 재사용"]

const home = `
<h1><a href="index.html">생활코딩 첫 페이지로</a></h1>`;

const menu = `
<h2>HTML</h2>
<ol>
  <li><a href="11.html">${n11[2]}</a></li>
  <li><a href="12.html">${n12[2]}</a></li>
  <li><a href="13.html">${n13[2]}</a></li>
  <li><a href="14.html">${n14[2]}</a></li>
</ol>
<h2>CSS</h2>
<ol>
  <li><a href="21.html">${n21[2]}</a></li>
  <li><a href="22.html">${n22[2]}</a></li>
  <li><a href="23.html">${n23[2]}</a></li>
  <li><a href="24.html">${n24[2]}</a></li>
  <li><a href="25.html">${n25[2]}</a></li>
</ol>
<h2>JavaScript</h2>
<ol>
  <li><a href="31.html">JavaScript에 대하여</a></li>
  <li><a href="32.html">콘솔</a></li>
  <li><a href="33.html">이벤트</a></li>
  <li><a href="34.html">데이터 타입</a></li>
  <li><a href="35.html">변수와 대입 연산자</a></li>
  <li><a href="36.html">웹브라우저 제어</a></li>
  <li><a href="37.html">조건문</a></li>
<ol>
`;

document.getElementById('menu').innerHTML = menu;
document.getElementById('home').innerHTML = home;


