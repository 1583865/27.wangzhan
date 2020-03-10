// 导航单击选择
var left = document.getElementById("left").getElementsByTagName("li");
length = "";



for (var i = 0; i < left.length;i++) {
	left[i].onclick = showlist;
}

function showlist() {
	for(var i = 0; i< left.length;i++) {
		if(left[i] === this) {
			left[i].className = "active";
		}else {
			left[i].className="";
		}
	}
}

var lists = document.getElementById("lists").getElementsByTagName("ul");

function showlists() {
    //for循环遍历长度
    for(var i = 0; i < left.length; i++) {
        //this指向对象 类名为active
        if (left[i] === this){
            lists[i].className="clearfix activee";
        //    否则为空
        }else {
            lists[i].className = "clearfix";
        }
    }
}
