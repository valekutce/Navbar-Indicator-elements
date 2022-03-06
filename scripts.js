var list_items = document.querySelectorAll(".wrapper ul li");
list_items.forEach(function(item){
  item.addEventListener("click", function(){
    list_items.forEach(function(item){
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
})