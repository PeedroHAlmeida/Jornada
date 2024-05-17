document.addEventListener('DOMContentLoaded', function () {
    var nicknameInput = document.querySelector('input[name="nickname"]');
    var form = document.querySelector('form');

    nicknameInput.addEventListener('input', function () {
        var nickname = nicknameInput.value.trim();
        var nicknamePattern = /^[a-zA-Z0-9]+$/;
        var errorContainer = document.querySelector('.error-message');

        if (!nicknamePattern.test(nickname)) {
            if (!errorContainer) {
                errorContainer = document.createElement('div');
                errorContainer.classList.add('error-message');
                nicknameInput.parentNode.appendChild(errorContainer);
            }
            errorContainer.textContent = "O nickname não pode conter espaços ou caracteres especiais (apenas letras e números)";
            form.querySelector('input[type="submit"]').disabled = true;
        } else {
            if (errorContainer) {
                errorContainer.remove();
            }
            form.querySelector('input[type="submit"]').disabled = false;
        }
    });
});
