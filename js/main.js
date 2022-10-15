
//定数
let par1 = "所属：";
let par2 = "担当プロジェクト：";
let par3 = "専門領域：";
let par4 = "強み：";

window.onload = function(){
hyouzi()
}

function hyouzi(){
var token1 = localStorage.getItem("data1");
// nullか確認
if (token1 == "") {
document.getElementById("text1").innerHTML=par1;
}else{
document.getElementById("text1").innerHTML=token1;
}

var token2 = localStorage.getItem("data2");
// nullか確認
if (token2 == "") {
document.getElementById("text2").innerHTML=par2;
}else{
document.getElementById("text2").innerHTML=token2;
}

var token3 = localStorage.getItem("data3");
// nullか確認
if (token3 == "") {
document.getElementById("text3").innerHTML=par3;
}else{
document.getElementById("text3").innerHTML=token3;
}

var token4 = localStorage.getItem("data4");
// nullか確認
if (token4 == "") {
document.getElementById("text4").innerHTML=par4;
}else{
document.getElementById("text4").innerHTML=token4;
}
}
// コメント1保存
function save1() {
var mydata1 = par1+document.getElementById("mydata_in1").value;
localStorage.setItem("data1", mydata1);
hyouzi();
}
// コメント1削除
function del1() {
localStorage.setItem("data1",par1);
document.getElementById("mydata_in1").value="";
hyouzi();
}

// コメント2保存
function save2() {
var mydata2 =par2+document.getElementById("mydata_in2").value;
localStorage.setItem("data2", mydata2);
hyouzi();
}
// コメント2削除
function del2() {
localStorage.setItem("data2",par2);
document.getElementById("mydata_in2").value="";
hyouzi();
}

// コメント3保存
function save3() {
var mydata3 = par3+document.getElementById("mydata_in3").value;
localStorage.setItem("data3", mydata3);
hyouzi();
}
// コメント2削除
function del3() {
localStorage.setItem("data3",par3);
document.getElementById("mydata_in3").value="";
hyouzi();
}

// コメント4保存
function save4() {
var mydata4 = par4+document.getElementById("mydata_in4").value;
localStorage.setItem("data4", mydata4);
hyouzi();
}
// コメント4削除
function del4() {
localStorage.setItem("data4",par4);
document.getElementById("mydata_in4").value="";
hyouzi();
}
