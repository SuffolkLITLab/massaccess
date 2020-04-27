function test_test(text) {
  if (window.location.href.indexOf("/massaccess/html_output/") > -1) {
    $('#alert_test').html(text);
    $('#alert_test').show();
    return true;
  } else {
    return false;
  }
}
