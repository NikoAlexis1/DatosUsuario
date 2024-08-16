//1) Traer datos de API y mostrarlos por consola
// https://randomuser.me/api/?results=10
//2)recorrer data.results y mostrarlos en el HTML

const getUsers = (() => {
    const contenedor = document.querySelector("#user-data");
    return{
        show: async () => {
            let respuesta = await fetch("https://randomuser.me/api/?results=10");
            let data = await respuesta.json();
            // console.log(data.results);
            const userInfo = data.results.map((perfil) =>
                `<img src="${perfil.picture.large}" /><br>
                <span>${perfil.name.first} ${perfil.name.last}</span><br>
                <span>${perfil.email}</span><br>
                <span>${perfil.phone}</span><br>`
            )
            contenedor.innerHTML = userInfo.join("");
        }
    }
})();

getUsers.show();