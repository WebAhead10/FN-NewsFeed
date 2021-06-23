let guardianDiv = document.getElementById("guardianDiv");
//fetch api data for the guardian news feed 
let data = fetch('https://content.guardianapis.com/search?api-key=3f951de6-51a6-4506-b7df-0b8d48dde5ff')
            .then(res => res.json())
            .then(data => {
            
            const results = data.response.results;
            // managing the side news api using for loop for each news object from json file  
            for (let i = 0; i < results.length; i++) {
                //creating a new div template for each article + added class name from css 
                var newDiv = document.createElement('div');
                newDiv.classList = 'templateDiv';
                // creating a new title div 
                var newDivTitle = document.createElement('div');
                newDivTitle.classList = 'title'
                newDivTitle.textContent = results[i].webTitle;// gave the title div the proper title from the json file we fetched
                newDiv.appendChild(newDivTitle);// append the title to the template div***
                // creating a new section div +added class name for css
                var newDivSName = document.createElement('div');
                newDivSName.classList = 'sName'
                newDivSName.textContent = "Section: ".concat(results[i].sectionName);// gave the section name the proper text from json file
                newDiv.appendChild(newDivSName);// append section div to the template div****
                // create a new button for the source of the article + added class name from css 
                var button = document.createElement('button');
                button.classList = 'button';
                button.textContent = "Source";
                //add ecent listener to the button
                button.addEventListener("click" , () => { 
                window.open(`${results[i].webUrl}`, '_blank'); // when button clicked the site takes us to the source of the article
                })
                // creating a new div to hold the button properly +added class name from css
                var buttonDiv = document.createElement('div');
                buttonDiv.classList = 'buttonDiv';
                buttonDiv.appendChild(button);
                newDiv.appendChild(buttonDiv);// append the buttonDiv to the template div****
                guardianDiv.appendChild(newDiv); // finished with the template div and appendd it to the guardianDiv***********
                }
            });


// fetching main news section from the second api 
let mainDiv = document.getElementById("mainDiv");
let data2 = fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-06-23&sortBy=popularity&apiKey=6338b6388d2c42d28cb7237fe3e52c50')
        .then(res => res.json())
        .then(data => {
        const results = data.articles
        // managing the side news api using for loop for each news object from json file
        for (let i = 0; i < results.length; i++) {
            //creating a new div template for each article + added class name from css 
            var newDiv = document.createElement('div');
            newDiv.classList = 'templateDiv';
            // creating a new title div 
            var newDivTitle = document.createElement('div');
            newDivTitle.classList = 'title'
            newDivTitle.textContent = results[i].title;// gave the title div the proper title from the json file we fetched
            newDiv.appendChild(newDivTitle);// append the title to the template div***
            // creating a new auther div +added class name for css
            var newAuthor = document.createElement('div');
            newAuthor.classList = 'author'
            newAuthor.textContent = results[i].author;// gave the auther div the proper auther from the json file we fetched
            newDiv.appendChild(newAuthor);// append autherDiv to the template div 
            // create a new content div 
            var newDivContent = document.createElement('div');
            newDivContent.classList = 'content'
            newDivContent.textContent = results[i].description;// gave the content name the proper text from json file
            newDiv.appendChild(newDivContent);// append content div to the template div****
            // create a new button for the source of the article + added class name from css 
            var button = document.createElement('button');
            button.classList = 'button';
            button.textContent = "Source";
            //add ecent listener to the button
            button.addEventListener("click" , () => { 
            window.open(`${results[i].url}`, '_blank');// when button clicked the site takes us to the source of the article
            })
            // creating a new div to hold the button properly +added class name from css
            var buttonDiv = document.createElement('div');
            buttonDiv.classList = 'buttonDiv';
            buttonDiv.appendChild(button);
            newDiv.appendChild(buttonDiv);// append the buttonDiv to the template div****
            mainDiv.appendChild(newDiv);// finished with the template div and appendd it to the mainDiv***********
            }
        });
    


