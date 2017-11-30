(function () {
    var editor = document.getElementById('editor'),
        buttons = document.querySelectorAll('.btn'),
        saveButton = document.getElementById('save'),
        colorButton = document.getElementById('color'),
        focus = null;
    
    editor.addEventListener('focus', function() {
        focus = 'editor';
    });
    
    saveButton.addEventListener('click', function() {
        if (localStorage) {
            let editorText = editor.innerHTML;
            localStorage.setItem('editorText', editorText);
        }
    });
    
    colorButton.addEventListener('input', function() {
        let colorValue = colorButton.value;
        if (focus == 'editor') {
            document.execCommand('foreColor', false, colorValue);
        }
    });
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let buttonValue = this.value;
            if (focus == 'editor') {
                document.execCommand(buttonValue, false);
                if (buttonValue == 'createLink') {
                    let link = prompt('URL:', 'https://github.com/elosiktv');
                    if (link != null) {
                        document.execCommand('createLink', false, link);
                    }
                } else if (buttonValue == 'insertImage') {
                    let image = prompt('Image URL:', 'http://www.paradise4pawsdenver.com/wp-content/uploads/2014/12/catboardingcircle-200x200.jpg');
                    if (image != null) {
                        document.execCommand('insertImage', false, image);
                    }
                }
            }
        });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        editor.innerHTML = localStorage.getItem('editorText');
    });
})();