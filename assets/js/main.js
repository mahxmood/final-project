// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

function darkOrLight() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function changeFont() {
  let newFont;
  const body = document.body;

  if (body.style.fontFamily === '"Comic Sans MS", sans-serif') {
      newFont = '"Times New Roman", sans-serif';
  } else {
      newFont = '"Comic Sans MS", sans-serif';
  }

  body.style.fontFamily = newFont;
  localStorage.setItem('chosenFont', newFont);
}


// saving prefs
document.addEventListener('DOMContentLoaded', function () {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const savedFont = localStorage.getItem('chosenFont');
  if (savedFont) {
      document.body.style.fontFamily = savedFont;
  }
});