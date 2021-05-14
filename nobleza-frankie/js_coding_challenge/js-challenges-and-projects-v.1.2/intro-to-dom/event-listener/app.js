document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
      alert ("key 'a' has been pressed!");
    }
    if (event.key === 'b') {
        alert ("key 'b' has been pressed!");
    }
    if (event.key === 'c') {
        alert ("key 'c' has been pressed!");
      }
    if (event.key === 'd') {
      alert ("key 'd' has been pressed!");
    }
    if (event.key === 'e') {
        alert ("key 'e' has been pressed!");
      }
    if (event.key === 'f') {
        alert ("key 'f' has been pressed!");
    }
    if (event.key === 'g') {
        alert ("key 'g' has been pressed!");
    }
    if (event.key === 'h') {
        alert ("key 'h' has been pressed!");
    }
    if (event.key === 'i') {
        alert ("key 'i' has been pressed!");
    }
    if (event.key === 'j') {
        alert ("key 'j' has been pressed!");
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'f') {
        //ctrl+f
      document.body.style = "color: white; background-color: blue";
    }
    if (event.ctrlKey && event.key === 'p') {
        //ctrl+p
      document.body.style = "background-color: black";
    }

    if (event.ctrlKey && event.key === 'x') {
        //ctrl+x
        document.body.style = "background-color: white";
      }
  });