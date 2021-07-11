fetch("http://localhost:3000/api/v1/artista")
  .then((response) => response.json())
  .then((data) => data.map(mostrarData));

const mostrarData = (d) => {
  document.getElementById(
    "contenedor"
  ).innerHTML += `<article class="full-box tile artista">
  <div class="full-box tile-title text-center text-titles text-uppercase">
      ${d.nombre}
  </div>
  <div class="hidden">${d.id}</div>

</div>
  <div class="full-box tile-icon text-center">
      <i class="zmdi zmdi-account"></i>
  </div>
  <div class="full-box tile-number text-titles">
      <p class="full-box">albunes</p>
      
  </div>
</article>`;
  console.log(d.id);
  let arti = document.querySelectorAll(".artista");
  arti.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      let album = elemento.firstChild.parentNode.childNodes[3].textContent;
      console.log(album);
    });
  });
};
