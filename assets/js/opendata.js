 $(document).ready(function() {
   var submitIcon = $('li.search a');
   var inputBox = $('li.search input');
   var searchBox = $('li.search form');
   var isOpen = false;
   submitIcon.click(function() {
     if (isOpen == false) {
       searchBox.addClass('searchbox-open');
       inputBox.focus();
       isOpen = true;
     }
     else {
       searchBox.removeClass('searchbox-open');
       inputBox.focusout();
       isOpen = false;
     }
   });
   submitIcon.mouseup(function() {
     return false;
   });
   searchBox.mouseup(function() {
     return false;
   });
   $(document).mouseup(function() {
     if (isOpen == true) {
       $('.searchbox-icon').css('display', 'block');
       submitIcon.click();
     }
   });
 });
 