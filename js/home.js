// header typing text function
consoleText(['Halo', '안녕하세요','Kamusta', 'こんにちは' ,'你好', 'สวัสดี'], 'text',['white']);

function consoleText(words, id, colors) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  window.setInterval(function() 
  {
    if (letterCount === 0 && waiting === false) 
    {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() 
      {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } 
    
    else if (letterCount === words[0].length + 1 && waiting === false) 
    {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } 
    
    else if (waiting === false) 
    {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)

  window.setInterval(function() 
  {
    if (visible === true) 
    {
      con.className = 'console-underscore hidden'
      visible = false;
    } 
    else 
    {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}


// scrolling to top function
const scrollButton = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => 
{
  window.pageYOffset > 20
    ? scrollButton.classList.add("show-btn")
    : scrollButton.classList.remove("show-btn");
});

scrollButton.addEventListener("click", () => 
{
  window.scrollTo
  (
    {
    top: 0,
    behavior: "smooth"
    }
  );
});

