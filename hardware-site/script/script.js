

function Escolhido()
{
    let escolhido = document.getElementById("principals").value

    if (escolhido == 'graphic-card')
    {
        window.location.replace("index.html")
    } 
    if (escolhido == 'motherboard')
    {
        window.location.replace("motherboard.html")
    } 
    if (escolhido == 'processor')
    {
        window.location.replace("processor.html")
    }
}
