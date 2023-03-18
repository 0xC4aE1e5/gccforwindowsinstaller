(async () => {
  var $ = (...args) => document.querySelectorAll(...args);
  let downloadbtn = $("#downloadbtn")[0];
  let scoopResponse = await fetch(
    "https://raw.githubusercontent.com/ScoopInstaller/Main/master/bucket/gcc.json"
  );
  let scoop = await scoopResponse.json();
  let url = scoop.architecture["64bit"].url;
  downloadbtn.href = "javascript:void(0)";
  downloadbtn.textContent = "Download";
  downloadbtn.onclick = () => {
    let a = document.createElement("a");
    a.href = url;
    a.download = url;
    a.click();
    setInterval(() => (location = "nextstep.html"), 1000);
  };
})();
