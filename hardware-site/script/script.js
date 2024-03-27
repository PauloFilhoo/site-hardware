let search_result = document.getElementById('search-result-label')

function Choosed()
{
    let search = document.getElementById("principals").value
    search_result.innerHTML = `Resultados por: ${search}`
}
