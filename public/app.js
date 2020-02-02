const element = React.createElement("div", null, React.createElement("h1", null, "sani"), React.createElement("img", {
  src: "images/sani.jpg",
  alt: "mypicture"
}), React.createElement("p", null, "I am Sani Mishra.I am currently pursuing master's from San diego State University in Computer Science.I enjoy cooking.I am also very passionate about music.So I love to sing using various karaoke app."), React.createElement("a", {
  href: "https://github.com/sanimishra/assignment1.git"
}, "View my Github repo"));
ReactDOM.render(element, document.getElementById('contents'));