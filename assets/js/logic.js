document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode-main');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log("I'm here")
            handleToggle()

        });
    }
    function handleToggle() {
        const mode = readMode()
        let nextMode;
        if (mode === 'light') {
            nextMode = 'dark'
        }
        else {
            nextMode = 'light'
        }
        applyMode(nextMode)
        console.log(nextMode)
        localStorage.setItem('mode', nextMode)
    }
    function applyMode(mode) {
        document.body.classList = mode
    }
    function readMode() {
        const mode = localStorage.getItem('mode') || 'dark'
        return mode
    }
    applyMode(readMode());
});