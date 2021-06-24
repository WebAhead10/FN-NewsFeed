let guardianDiv = document.getElementById("guardianDiv");
// fetch api data for the guardian news feed 
let data = fetch('https://content.guardianapis.com/search?api-key=3f951de6-51a6-4506-b7df-0b8d48dde5ff')
            .then(res => res.json())
            .then(data => {
            
            const results = data.response.results;
            // managing the side news api using for loop for each news object from json file  
            for (let i = 0; i < results.length; i++) {
                addToSideNews(results[i].webTitle, results[i].sectionName,results[i].webUrl)
               }
            })  
            .catch(error => {
                console.log(error);
                if (error.message === "404") {
                    alert("⚠️ the side News page was not found");
                  } else {
                   alert("⚠️ Something went wrong");
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
             addToMainNews(results[i].title,results[i].author,results[i].description,results[i].url);
             }
        })
        .catch(error => {
            console.log(error);
            if (error.message === "404") {
                alert("⚠️ the main page was not found");
              } else {
               alert("⚠️ Something went wrong");
            }
        });
 
function addToMainNews(title, auther,description,sourceLink)
{
    //creating a new div template for each article + added class name from css 
    var newArticle = document.createElement('div');
    newArticle.classList = 'templateDiv';
    // creating a new title div 
    var newArticleTitle = document.createElement('div');
    newArticleTitle.classList = 'title'
    newArticleTitle.textContent = title;// gave the title div the proper title from the json file we fetched
    newArticle.appendChild(newArticleTitle);// append the title to the template div***
    // creating a new auther div +added class name for css
    var newAuthor = document.createElement('div');
    newAuthor.classList = 'author'
    newAuthor.textContent = auther;// gave the auther div the proper auther from the json file we fetched
    newArticle.appendChild(newAuthor);// append autherDiv to the template div 
    // create a new content div 
    var newArticleContent = document.createElement('div');
    newArticleContent.classList = 'content'
    newArticleContent.textContent = description;// gave the content name the proper text from json file
    newArticle.appendChild(newArticleContent);// append content div to the template div****
    // create a new button for the source of the article + added class name from css 
    var button = document.createElement('button');
    button.classList = 'button';
    button.textContent = "Source";
    //add ecent listener to the button
    button.addEventListener("click" , () => { 
    window.open(sourceLink, '_blank');// when button clicked the site takes us to the source of the article
    })
    // creating a new div to hold the button properly +added class name from css
    var buttonDiv = document.createElement('div');
    buttonDiv.classList = 'buttonDiv';
    buttonDiv.appendChild(button);
    newArticle.appendChild(buttonDiv);// append the buttonDiv to the template div****
    mainDiv.appendChild(newArticle);// finished with the template div and appendd it to the mainDiv***********
    
}


function addToSideNews(title, sectionName,sourceLink)
{
     //creating a new div template for each article + added class name from css 
     var newArticle = document.createElement('div');
     newArticle.classList = 'templateDiv';
     // creating a new title div 
     var newArticleTitle = document.createElement('div');
     newArticleTitle.classList = 'title'
     newArticleTitle.textContent = title;// gave the title div the proper title from the json file we fetched
     newArticle.appendChild(newArticleTitle);// append the title to the template div***
     // creating a new section div +added class name for css
     var newArticleSName = document.createElement('div');
     newArticleSName.classList = 'sName'
     newArticleSName.textContent = "Section: ".concat(sectionName);// gave the section name the proper text from json file
     newArticle.appendChild(newArticleSName);// append section div to the template div****
     // create a new button for the source of the article + added class name from css 
     var button = document.createElement('button');
     button.classList = 'button';
     button.textContent = "Source";
     //add ecent listener to the button
     button.addEventListener("click" , () => { 
     window.open(sourceLink, '_blank'); // when button clicked the site takes us to the source of the article
     })
     // creating a new div to hold the button properly +added class name from css
     var buttonDiv = document.createElement('div');
     buttonDiv.classList = 'buttonDiv';
     buttonDiv.appendChild(button);
     newArticle.appendChild(buttonDiv);// append the buttonDiv to the template div****
     guardianDiv.appendChild(newArticle); // finished with the template div and appendd it to the guardianDiv***********  
}
