const colors = [ 
  {property: "--red",       lightMode: "#A8000F", darkMode: "#A8000F"},
  {property: "--lightgray", lightMode: "#E5E5E5", darkMode: "#E5E5E5"},
  {property: "--darkgray",  lightMode: "#828387", darkMode: "#828387"},
  {property: "--white",     lightMode: "#FEFEFE", darkMode: "#010101"},
  {property: "--black",     lightMode: "#010101", darkMode: "#FEFEFE"}
];

const root = document.querySelector(":root");

const setColor = (color, mode) => root
  .style
  .setProperty(color.property, color[mode]);

const setColors = mode => colors
  .map(color => setColor(color, mode));

let isDarkMode = false;

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  isDarkMode ? setColors("darkMode") : setColors("lightMode");
}
