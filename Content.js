var url = window.location.href;
if (url.includes("http://172.16.222.1:1000/keepalive?")) {
  var countDownTime = Number.MAX_SAFE_INTEGER;
  function countDown() {
    countDownTime--;
    if (countDownTime <= Number.MIN_SAFE_INTEGER) {
      location.href = "http://172.16.222.1:1000/keepalive?0307060b0e000104";
      return;
    }
    document.getElementById("countdown").innerHTML = countDownTime;
    counter = setTimeout("countDown()", 1000);
  }
  function startit() {
    countDown();
  }
  window.onload = startit;
}
