let h3 = document.getElementById("colors");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let cssBackground = window.getComputedStyle(body, null).getPropertyValue("background");
let randomValues = document.getElementById("randomValues");

const takeBackground = (element, x, y) => element.slice(x, y);

const changeBackground = () => {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    h3.textContent = body.style.background + ';';
};

const getColor1 = () => {
    changeBackground();
};

const getColor2 = () => {
    changeBackground();
};

const RGBToHex = (r,g,b) => {r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    
          if(r.length == 1) {
            r = "0" + r;
        }
        if (g.length == g) {
            g = "0" + g;
        }
        if(b.length == 1) {
            b = "0" + b;
        }

    return "#" + r + g + b;};

  const randomRGBNumber = () => Math.floor(Math.random()*256);

  const generateBackground = () => {
      console.log(RGBToHex(randomRGBNumber(), randomRGBNumber(), randomRGBNumber()));
      color1.value = RGBToHex(randomRGBNumber(), randomRGBNumber(), randomRGBNumber());
      color2.value = RGBToHex(randomRGBNumber(), randomRGBNumber(), randomRGBNumber());
      changeBackground();
  };

randomValues.addEventListener("click", generateBackground)
color1.addEventListener("input", getColor1);
color2.addEventListener("input", getColor2); 
h3.textContent = takeBackground(cssBackground, 17, 76);