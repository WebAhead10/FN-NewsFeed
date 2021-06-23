let guardianDiv = document.getElementById("guardianDiv");


let data = fetch('https://content.guardianapis.com/search?api-key=3f951de6-51a6-4506-b7df-0b8d48dde5ff')
            .then(res => res.json())
            .then(data => {
            const results = data.response.results;

            for (let i = 0; i < results.length; i++) {
                var newDiv = document.createElement('div');
                newDiv.classList = 'templateDiv';
                var newDivTitle = document.createElement('div');
                newDivTitle.classList = 'title'
                newDivTitle.textContent = results[i].webTitle;
                newDiv.appendChild(newDivTitle);
                var newDivSName = document.createElement('div');
                newDivSName.classList = 'sName'
                newDivSName.textContent = "Section: ".concat(results[i].sectionName);
                newDiv.appendChild(newDivSName);
                var newDivContent = document.createElement('div');
                newDivContent.classList = 'content'
                newDivSName.textContent = results[i].sectionName;
                var button = document.createElement('button');
                button.classList = 'button';
                button.textContent = "Source";
                button.addEventListener("click" , () => { 
                window.open(`${results[i].webUrl}`, '_blank');
                })
                var buttonDiv = document.createElement('div');
                buttonDiv.classList = 'buttonDiv';
                buttonDiv.appendChild(button);
                newDiv.appendChild(buttonDiv);
                newDiv.appendChild(newDivContent);
                guardianDiv.appendChild(newDiv);
                }



            });

let mainDiv = document.getElementById("mainDiv");


    let data2 = fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-06-23&sortBy=popularity&apiKey=6338b6388d2c42d28cb7237fe3e52c50')
                .then(res => res.json())
                .then(data => {
                const results = data.articles
                console.log(results);
    
                for (let i = 0; i < results.length; i++) {
                    var newDiv = document.createElement('div');
                    newDiv.classList = 'templateDiv';
                    var newDivTitle = document.createElement('div');
                    newDivTitle.classList = 'title'
                    newDivTitle.textContent = results[i].title;
                    newDiv.appendChild(newDivTitle);
                    var newAuthor = document.createElement('div');
                    newAuthor.classList = 'author'
                    newAuthor.textContent = results[i].author;
                    newDiv.appendChild(newAuthor);
                    var newDivContent = document.createElement('div');
                    newDivContent.classList = 'content'
                    newDivContent.textContent = results[i].description;
                    newDiv.appendChild(newDivContent);
                    var button = document.createElement('button');
                    button.classList = 'button';
                    button.textContent = "Source";
                    button.addEventListener("click" , () => { 
                    window.open(`${results[i].url}`, '_blank');
                    })
                    var buttonDiv = document.createElement('div');
                    buttonDiv.classList = 'buttonDiv';
                    buttonDiv.appendChild(button);
                    newDiv.appendChild(buttonDiv);
                    mainDiv.appendChild(newDiv);
                    }
    
    
    
                });
            


