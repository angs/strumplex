function filterhittar() {
  var value = $("#search").val().toLowerCase();
  $("#hittar li").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
}

$(document).ready(function(){
  for (var i of ordlist){
	  var item = $('<li/>').addClass("list-group-item").text(i);
    $("#hittar").append(item);
	}
  $("#search").on("keyup", function(){ filterhittar(); });
  for (var item of document.querySelectorAll(".list-group li")){
    item.addEventListener("click", function() {
    var value = this.innerText;
    var songs = dict[value];
    var sidebar = $("#songs");
    sidebar.empty();
    for(var x in songs){
      var id = songs[x];
      var itemi = $('<li/>').addClass("list-group-item").append($('<a/>').text(hittar[id].title).attr("href", "https://areena.yle.fi/1-"+id));
      sidebar.append(itemi);
    }
  });}
  $("#searchclear").click(function(){ $("#search").val(""); filterhittar();});
});
