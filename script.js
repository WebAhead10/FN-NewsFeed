let mainDiv = document.getElementById("mainDiv");
let objArr ={};
let artNum = 3;
let data = fetch('https://content.guardianapis.com/search?api-key=3f951de6-51a6-4506-b7df-0b8d48dde5ff')
            .then(res => res.json())
            .then(res => {
                objArr = (res.response.results)
            })

console.log(objArr);
for (let i = 0; i < artNum; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList = 'templateDiv';
    var newDivTitle = document.createElement('div');
    newDivTitle.classList = 'title'
    // newDivTitle.textContent = _____
    newDiv.appendChild(newDivTitle);
    var newDivSName = document.createElement('div');
    newDivSName.classList = 'sName'
    newDiv.appendChild(newDivSName);
    var newDivContent = document.createElement('div');
    newDivContent.classList = 'content'
    var button = document.createElement('button');
    button.classList = 'button';
    button.textContent = "Source"
    var buttonDiv = document.createElement('div');
    buttonDiv.appendChild(button);
    newDiv.appendChild(buttonDiv);
    newDiv.appendChild(newDivContent);
    mainDiv.appendChild(newDiv);
    }



