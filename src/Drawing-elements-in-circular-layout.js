//Fazendo o layout em função de x. Fica cirular, mas com distribuição errada.
var elements = [];
var containerWidth = 400;//px
for(let i=1; i>0; i -= .1){
    var x = i;
    var y = Math.sqrt(1 - (x * x));
    var hip = Math.sqrt(y + (x * x));
	y
	var padding = containerWidth/2;//px
	var el = `
	<div class="item" style="top:${y*150+padding}px; left:${x*150+padding}px">
		<span>x:${parseInt(x*150)+padding}, y:${parseInt(y*150)+padding} </span>
	</div>
	`;
	elements.push(el);
	//console.log('x:' + x + ' - y:' + y + ' hip:' + hip);
}
for(let i=1; i>0; i -= .1){
    var x = -i;
    var y = Math.sqrt(1 - (x * x));
    var hip = Math.sqrt(y + (x * x));
	var padding = containerWidth/2;//px
	var el = `
	<div class="item" style="top:${y*150+padding}px; left:${x*150+padding}px">
		<span>x:${parseInt(x*150)+padding}, y:${parseInt(y*150)+padding} </span>
	</div>
	`;
	elements.push(el);
	//console.log('x:' + x + ' - y:' + y + ' hip:' + hip);
}
var htmlStr = `
<style>
	.items-container{
        position: relative;
        height: ${containerWidth}px;
        background-color: #fff;
        border: dashed green 1px;
	}
    .item {
        position: absolute;
        width: 5px;
        background-color: red;
        border: dashed red 2px;
        height: 5px;
        border-radius: 100%;
    }
</style>
<div class="items-container">
	${elements.join('')}
</div>
`
;
