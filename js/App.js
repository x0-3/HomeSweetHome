// close and open navbar mobile version

function mobileNav() { 

  var x = document.getElementById("myLinks");

  if (x.style.display === "block") { //if display block = true 
    x.style.display = "none"; //show nothing

  } else {
    x.style.display = "block";// show navbar in a block format
  }

} 

$(".dropdown dt a").on('click', function() {
    $(".dropdown dd ul").slideToggle('fast');
  });
  
  $(".dropdown dd ul li a").on('click', function() {
    $(".dropdown dd ul").hide();
  });
  
  function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
  }
  
  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
  });
  
  $('.mutliSelect input[type="checkbox"]').on('click', function() {
  
    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
      title = $(this).val() + ",";
  
    if ($(this).is(':checked')) {
      var html = '<span title="' + title + '">' + title + '</span>';
      $('.multiSel').append(html);
      $(".hida").hide();
    } else {
      $('span[title="' + title + '"]').remove();
      var ret = $(".hida");
      $('.dropdown dt a').append(ret);
  
    }
  });