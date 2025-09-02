   function darkmode() {
            document.documentElement.style.setProperty('--primary', "black");
            document.documentElement.style.setProperty('--secondary', "white");
        }
        function normalmode() {
            document.documentElement.style.setProperty('--primary', "white");
            document.documentElement.style.setProperty('--secondary', "black");

        }
        let area = document.getElementById("textarea");
        function changeBgImg(path) {
            // let img=path.files[0];

            area.style.backgroundImage = `url(${path})`;
            area.style.backgroundSize = "cover";
            area.style.backgroundSize = "cover";
        }

        function changeColor(color) {
            area.style.backgroundColor = color;
            area.style.backgroundImage = "none";

        }
        function changeTextColor(color) {
            area.style.color = color;
        }
        function changeTextfont(font) {
            area.style.fontFamily = font;
        }
