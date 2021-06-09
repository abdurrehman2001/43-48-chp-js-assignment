function showAlert() 
{
    alert("You clicked Me!");
}

function deleteRow(id)
{
    document.getElementById(id).remove();
}

function changeImage()
{
    document.getElementById("myImage").src = 'imgs/note 7.jpg';
}

function restoreImage() {
    document.getElementById("myImage").src = 'imgs/samsung.jpg';
}


var count = parseInt(document.getElementById('counter').innerHTML);

function increaseCount() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decreaseCount() {
    count--;
    document.getElementById("counter").innerHTML = count;
}