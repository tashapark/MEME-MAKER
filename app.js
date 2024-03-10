const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); //context는 brush 같은 것
canvas.width = 800;
canvas.height = 800;
//이미지 퀄리티를 높이려고, js에서 조절

//ctx.fillRect(50, 50, 100, 200); //fillRect(x, y, width, height) 사각형그리기
// 좌표는 캔버스 맨 왼쪽 끝이 (0, 0)임 그리고 가로가 x, 세로가 y임. 그걸 기준으로 안에서 움직임.
//ctx.rect(50, 50, 100, 100); //사각형 선만 만들고 색 적용 x
//ctx.stroke()은 선만, ctx.fill()은 색 넣기

ctx.rect(50, 50, 100, 100); //사각형 선만 만들고 색 적용 x
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); //경로를 새로 만들어 주는 것. 아니면 다 같은 경로로 적용 됨.
// 그니깐,, 그림의 경로를 모두 생각하고 있어야 함.
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
