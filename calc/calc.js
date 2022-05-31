function butclick(val)
{
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function ClearDisplay()
{
    document.getElementById("screen").value=" "
}

function EqualtoClick()
{
  var text=document.getElementById("screen").value
  var res = eval(text)
  document.getElementById("screen").value=res

}