document.addEventListener('DOMContentLoaded', function() {
    var dialog = document.querySelector("dialog#login");
    var menu = document.querySelector("#menu-login");
    var nuevaentrada = document.querySelector("button.nueva");

    if (localStorage.getItem("login")) {
        menu.textContent = "Logout";
        document.body.classList.add("login");
    }

    menu.addEventListener("click", function() {
        if (localStorage.getItem("login")) {
            menu.textContent = "Login";
            window.localStorage.removeItem("login");
            document.body.classList.remove("login");
        } else {
            dialog.showModal();
        }
    });

    nuevaentrada.addEventListener("click", function() {
        dialog2.showModal();
    });

    document.getElementById("acceder").addEventListener("click", function(ev) {
        window.localStorage.setItem("login", true);
        menu.textContent = "Logout";
        document.body.classList.add("login");
    });

    fetch('static/data.json')
        .then(response => response.json())
        .then(data => {
            var contenido = document.getElementById('contenido');
            data.forEach(item => {
                var entry = document.createElement('div');
                entry.className = 'entrada';
                entry.innerHTML = `
                    <img src="${item.imagen}" alt="">
                    <div>
                        <h3>${item.titulo}</h3>
                        <p>${item.descripcion}</p>
                        <a href="${item.enlace}">Leer</a>
                    </div>`;
                contenido.appendChild(entry);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
