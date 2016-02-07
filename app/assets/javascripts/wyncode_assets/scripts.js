var wyncode_scripts_ready = function() {
  // Toggle Dropdowns
  $(document).click(function(){
    $(".dropdown-items").hide();
  });

  $('.dropdown').on('click', function( e ) {
    e.stopPropagation();
    var thisMenu = $(this).find('.dropdown-items');
    thisMenu.fadeToggle("fast");
    $('.dropdown-items').not(thisMenu).hide();
  });


  // Toggle menu
  $('.toggle-menu').on('click', '.toggle-header', function() {
    var $toggleMenu = $(this).closest('.toggle-menu'),
      $toggleArrow = $toggleMenu.find('.toggle-arrow i');
    if ($toggleMenu.hasClass('closed')) {
      $toggleMenu.find('.toggle-body').slideDown("fast", "linear");
      $toggleMenu.removeClass('closed').addClass('open');
      $toggleArrow.removeClass('fa-caret-left').addClass('fa-caret-down');
    } else {
      $toggleMenu.find('.toggle-body').slideUp("fast", "linear");
      $toggleMenu.removeClass('open').addClass('closed');
      $toggleArrow.removeClass('fa-caret-down').addClass('fa-caret-left');
    }
  });

  // Tooltips
  $('body').on('mouseenter', '.tooltip', function() {
    $(this).find('.tooltip-content').fadeIn("fast");
  }).on('mouseleave', '.tooltip', function() {
    $(this).find('.tooltip-content').hide();
  });

  // Syntax Highlighting
  var highlightAll = function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    };

  // Markdown Rendering
  $(".marked-render").each(function(i) {
    $( this ).html(marked($( this ).data("raw")));
    highlightAll();
  });


};

$(document).ready(wyncode_scripts_ready);
$(document).on('page:load', wyncode_scripts_ready);
