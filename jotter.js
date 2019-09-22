        //let demoTextArea = document.getElementById("demo-text").value;
        //let noteValue = localStorage.setItem("note", demoSave);
        //demoTextArea = '';
        //document.getElementById("no-notes").value = localStorage.getItem("note");

        /*document.getElementById("no-notes").style.display = "none";

        var newNote = document.createElement('a');
        i++;
        newNote.innerHTML = `Note ${i}`;
        document.getElementById("dropdown-menu").appendChild(newNote);
        newNote.classList.add("dropdown-item");
        newNote.style.cursor = "pointer";

        //var noteArea = document.getElementsByClassName("dropdown-item")

        let demoTextArea = document.getElementById("demo-text").value;
        let demoSave = demoTextArea;
        demoTextArea.value = "";*/

        /*let saveButton = document.getElementById("save");
        let demoSave = demoTextArea.value;
        demoTextArea.value = "";

        demoTextArea.style.display = "none";
        var newText = document.createElement('textarea');
        //newText.innerHTML = "In my younger and more vulnerable years, my father gave me some advice that I've been turning over in my mind ever since.";
        document.getElementById("demo-note").appendChild(newText);
        newText.appendChild(saveButton);
        newText.innerHTML = "Saved note!";
        newText.style.display = "block";
        newText.classList.add("textarea");
        saveButton.style.display = "block";*/
            const root = document.documentElement;
            const themes = document.querySelectorAll('.theme-div > button');
            const demos = document.querySelectorAll('#demo-note > button');
            const dropdowns = document.querySelectorAll('#dropdown-menu > a');
            
            const backButton = document.getElementById("back");

            var demoNote = document.getElementById("demo-note");
            var h1 = document.getElementById("h1");
            
            var blackBg = document.getElementById("black-bg");
            var whiteBg = document.getElementById("white-bg");
            var redBg = document.getElementById("red-bg");
            var orangeBg = document.getElementById("orange-bg");
            var yellowBg = document.getElementById("yellow-bg");
            var greenBg = document.getElementById("green-bg");
            var blueBg = document.getElementById("blue-bg");
            var purpleBg = document.getElementById("purple-bg");
            var pinkBg = document.getElementById("pink-bg");
            var grayBg = document.getElementById("gray-bg");
            var bgH3 = document.getElementById("bg-color-h3");
            var txtH3 = document.getElementById("txt-color-h3");

            var blackTxt = document.getElementById("black-txt");
            var whiteTxt = document.getElementById("white-txt");
            var redTxt = document.getElementById("red-txt");
            var orangeTxt = document.getElementById("orange-txt");
            var yellowTxt = document.getElementById("yellow-txt");
            var greenTxt = document.getElementById("green-txt");
            var blueTxt = document.getElementById("blue-txt");
            var purpleTxt = document.getElementById("purple-txt");
            var pinkTxt = document.getElementById("pink-txt");
            var grayTxt = document.getElementById("gray-txt");

            function customThemeLoad() {
                document.getElementById("dark").style.display = "none";
                document.getElementById("murky").style.display = "none";
                document.getElementById("light").style.display = "none";
                document.getElementById("custom").style.display = "none";
                document.getElementById("notes").style.display = "none";
                document.getElementById("save").style.display = "none";
                backButton.style.display = "block";
                backButton.style.marginTop = "-3em";

                bgH3.style.display = "block";
                txtH3.style.display = "block";

                demoNote.style.display = "none";
                h1.style.display = "inline";

                blackBg.style.display = "inline";
                whiteBg.style.display = "inline";
                redBg.style.display = "inline";
                orangeBg.style.display = "inline";
                yellowBg.style.display = "inline";
                greenBg.style.display = "inline";
                blueBg.style.display = "inline";
                purpleBg.style.display = "inline";
                pinkBg.style.display = "inline";
                grayBg.style.display = "inline";

                blackTxt.style.display = "inline";
                whiteTxt.style.display = "inline";
                redTxt.style.display = "inline";
                orangeTxt.style.display = "inline";
                yellowTxt.style.display = "inline";
                greenTxt.style.display = "inline";
                blueTxt.style.display = "inline";
                purpleTxt.style.display = "inline";
                pinkTxt.style.display = "inline";
                grayTxt.style.display = "inline";
            }

            function goBack() {
                document.getElementById("dark").style.display = "inline";
                document.getElementById("murky").style.display = "inline";
                document.getElementById("light").style.display = "inline";
                document.getElementById("custom").style.display = "inline";
                document.getElementById("notes").style.display = "inline";
                document.getElementById("save").style.display = "Inline";
                
                backButton.style.display = "none";

                bgH3.style.display = "none";
                txtH3.style.display = "none";

                demoNote.style.display = "block";
                h1.style.display = "block";

                blackBg.style.display = "none";
                whiteBg.style.display = "none";
                redBg.style.display = "none";
                orangeBg.style.display = "none";
                yellowBg.style.display = "none";
                greenBg.style.display = "none";
                blueBg.style.display = "none";
                purpleBg.style.display = "none";
                pinkBg.style.display = "none";
                grayBg.style.display = "none";

                blackTxt.style.display = "none";
                whiteTxt.style.display = "none";
                redTxt.style.display = "none";
                orangeTxt.style.display = "none";
                yellowTxt.style.display = "none";
                greenTxt.style.display = "none";
                blueTxt.style.display = "none";
                purpleTxt.style.display = "none";
                pinkTxt.style.display = "none";
                grayTxt.style.display = "none";
            }

            themes.forEach((btn) => {
                btn.addEventListener('click', changeTheme);
            })

            demos.forEach((btn) => {
                btn.addEventListener('click', copyNote);
            })

            dropdowns.forEach((a) => {
                a.addEventListener('click', copyValues);
            })

            function changeTheme(event) {
                switch(event.target.value) {
                    case 'dark': 
                    root.style.setProperty('--bg-color', 'black');
                    root.style.setProperty('--bg-text', 'white');
                        break
                    case 'murky':
                        root.style.setProperty('--bg-color', 'rgb(60, 86, 134)');
                        root.style.setProperty('--bg-text', 'white');
                        break
                    case 'light':
                        root.style.setProperty('--bg-color', 'white');
                        root.style.setProperty('--bg-text', 'black');
                    break
                    case 'black-bg':
                        root.style.setProperty('--bg-color', 'black');
                        break
                    case 'white-bg':
                        root.style.setProperty('--bg-color', 'white');
                        break
                    case 'red-bg':
                        root.style.setProperty('--bg-color', '#e74c3c');
                        break
                    case 'orange-bg':
                        root.style.setProperty('--bg-color', '#eb984e');
                        break
                    case 'yellow-bg':
                        root.style.setProperty('--bg-color', '#f7dc6f');
                        break
                    case 'green-bg':
                        root.style.setProperty('--bg-color', '#52be80');
                        break
                    case 'blue-bg':
                        root.style.setProperty('--bg-color', '#5dade2');
                        break
                    case 'purple-bg':
                        root.style.setProperty('--bg-color', '#d7bde2');
                        break
                    case 'pink-bg':
                        root.style.setProperty('--bg-color', '#fadbd8');
                        break
                    case 'gray-bg':
                        root.style.setProperty('--bg-color', '#d5dbdb');
                        break
                    case 'black-txt':
                        root.style.setProperty('--bg-text', 'black');
                        break
                    case 'white-txt':
                        root.style.setProperty('--bg-text', 'white');
                        break
                    case 'red-txt':
                        root.style.setProperty('--bg-text', '#b03a2e');
                        break
                    case 'orange-txt':
                        root.style.setProperty('--bg-text', '#e67e22');
                        break
                    case 'yellow-txt':
                        root.style.setProperty('--bg-text', '#f1c40f');
                        break
                    case 'green-txt':
                        root.style.setProperty('--bg-text', '#196f3d');
                        break
                    case 'blue-txt':
                        root.style.setProperty('--bg-text', '#154360');
                        break
                    case 'purple-txt':
                        root.style.setProperty('--bg-text', '#4a235a');
                        break
                    case 'pink-txt':
                        root.style.setProperty('--bg-text', '#cd005d');
                        break
                    case 'gray-txt':
                        root.style.setProperty('--bg-text', '#4d4d4d');
                }
            }

            var i = 0;

    function copyNote() {
        var copiedText = document.getElementById("demo-text");

        copiedText.select();
        copiedText.setSelectionRange(0, 99999);

        document.execCommand("copy");
        /*document.getElementById("no-notes").style.display = "none";

        var newNote = document.createElement('a');
        i++;
        newNote.innerHTML = `Note ${i}`;
        document.getElementById("dropdown-menu").appendChild(newNote);
        newNote.classList.add("dropdown-item");
        newNote.style.cursor = "pointer";

        var noteArea = document.getElementsByClassName("dropdown-item")

        var demoTextArea = document.getElementById("demo-text").value;
        var demoSave = demoTextArea;
        demoTextArea.value = "";*/

    /*var demoTextArea = document.getElementById("demo-text");
    demoTextArea.value 
    demoTextArea.value = "";*/
    /*var newText = document.createElement('textarea');
    newText.innerHTML = "In my younger and more vulnerable years, my father gave me some advice that I've been turning over in my mind ever since.";
    document.getElementById("demo-note").appendChild(newText);
    newText.classList.add("textarea");
    //demoTextArea.style.display = "none";
    //newText.innerHTML = "Saved note!";*/
        alert("Copied note!");
    }

    const notes = document.querySelector('#notes');

    function saveNote() {
        let text = demoTextArea.value;
        let note = document.createElement('div');

        note.classList.add('note');
        note.innerHTML = `<div class='note-text'>${text}</div>`;

        notes.appendChild(note);

        demoTextArea.value = '';
        demoTextArea.focus();
    }

            function copyValues() {
                demoTextArea = document.getElementById("demo-text").value;
                var noteValue = localStorage.setItem("note", demoSave);
                document.getElementById("demo-text").value = localStorage.getItem("note");
                //const noteValue = document.getElementsByTagName("A").value + document.getElementById("demo-text").value;
                //var demoTextArea = document.getElementById("demo-text");
                //noteValue = document.getElementById("demo-text").value;
                //document.getElementById("demo-text").value = "";

                /*document.getElementById("dark").style.display = "inline";
                document.getElementById("murky").style.display = "inline";
                document.getElementById("light").style.display = "inline";
                document.getElementById("custom").style.display = "inline";
                document.getElementById("notes").style.display = "inline";
                document.getElementById("save").style.display = "Inline";
                
                backButton.style.display = "none";

                bgH3.style.display = "none";
                txtH3.style.display = "none";

                demoNote.style.display = "block";
                h1.style.display = "block";

                blackBg.style.display = "none";
                whiteBg.style.display = "none";
                redBg.style.display = "none";
                orangeBg.style.display = "none";
                yellowBg.style.display = "none";
                greenBg.style.display = "none";
                blueBg.style.display = "none";
                purpleBg.style.display = "none";
                pinkBg.style.display = "none";
                grayBg.style.display = "none";

                blackTxt.style.display = "none";
                whiteTxt.style.display = "none";
                redTxt.style.display = "none";
                orangeTxt.style.display = "none";
                yellowTxt.style.display = "none";
                greenTxt.style.display = "none";
                blueTxt.style.display = "none";
                purpleTxt.style.display = "none";
                pinkTxt.style.display = "none";
                grayTxt.style.display = "none";


                var noteValue = document.getElementsByTagName("A").value;
                //var noteId = document.getElementsByTagName("A")[i].setAttribute("id", `note${i}`);
                //var noteValue = document.getElementById(`note${i}`).value;
                noteValue = demoTextArea.value;*/

            }