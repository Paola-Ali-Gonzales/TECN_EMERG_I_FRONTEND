var btn_done = document.querySelector(".btn_done");
var btn_close = document.querySelector(".btn_cancel");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");
var span = document.getElementsByClassName("close")[0];

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

span.onclick = function() {
	modal_wrapper.classList.remove("active");
}

btn_close.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})