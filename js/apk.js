// Include Header By Javascript
var header = '<nav class="navbar navbar-expand-md navbar-dark bg-primary"><header class="container">'+
  '<a class="navbar-brand" href="#">TWIBBON <small>GENERATOR</small></a>'+
  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
  '<div class="collapse navbar-collapse" id="navbarNav">'+
    '<ul class="navbar-nav">'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="#">Home</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="#">About Us</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="#">Contact Us</a>'+
      '</li>'+
      '<li class="nav-item dropdown">'+
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>'+
        '<div class="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="#">Action</a>'+
          '<a class="dropdown-item" href="#">Action #2</a>'+
          '<a class="dropdown-item" href="#">Action #3</a>'+
          '<a class="dropdown-item" href="#">Action #4</a>'+
          '<div class="dropdown-divider"></div>'+
          '<a class="dropdown-item" href="#">Something else here</a>'+
        '</div>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="#">Pricing</a>'+
      '</li>'+
    '</ul>'+
  '</div>'+
'</header></nav>';

// Include Footer By Javascript
var footer = '<footer class="text-center text-white bg-primary"><p class="py-4 m-0">&copy; 2018 - Twibbon Generator</p></footer>'

$('#contentBox').before(header);
$('#contentBox').after(footer);



// Upload Image and Render Upload File Name
$(document).on('change', '[data-imageload]', function(e){
  $($(this).data('imageload')).html(e.target.files[0].name);
});

// Add More Content Functionality
function cont(id){
  $(id).after('<p class="addedcontent">'+$(id).html()+'</p>');
}

// Remove Added Content 
function removecont(){
  $('.addedcontent').remove();
}
