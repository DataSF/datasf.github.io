$(function() {
  $.getJSON('https://www.googleapis.com/calendar/v3/calendars/6o082o4eh3hvfvn2sdgp9h8ebk@group.calendar.google.com/events?key=AIzaSyBlqUEZTgDb5TNNj2rNq4q0u9ZF1hFkkiY', function(data) {
    console.log(data);
  });
});
