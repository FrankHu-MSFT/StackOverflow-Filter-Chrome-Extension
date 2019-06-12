// this is the code which will be injected into a given page...

(function() {

	var relativetimes = document.getElementsByClassName("relativetime"); 
	var questionAnchors = document.getElementsByClassName("question-hyperlink");
	var questionRows = document.getElementsByClassName("question-summary");
	var doc = document.getElementById("content");
	var header = document.getElementsByClassName("count");
	while(document.getElementsByTagName('html')[0].innerHTML.includes("one of the answers was accepted as the correct answer")){
	var count = 0;
		for (var i=0, max=questionRows.length; i < max; i++) {
			var answers = questionRows[i];
			if(answers != undefined){	
				var accepted = answers.getElementsByClassName("status");
				if(accepted[0] != undefined){
					if(!(accepted[0].title == "one of the answers was accepted as the correct answer")){
						console.log("Question : " + questionAnchors[i].innerText  + " HyperLink: " + questionAnchors[i].href);
						var date1 = new Date(relativetimes[i].title);
						var date2 = new Date();
						var diffTime = Math.abs(date2.getTime() - date1.getTime());
						var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
						console.log("Age " + diffDays);
						console.log("Date posted : " + date1);
						console.log("relative times : " + relativetimes[i].innerText);
						count++;
						
					}else{
						questionRows[i].parentNode.removeChild(questionRows[i]);
					}
				}
			}
			header[0].innerHTML = count;
		}
	}
})();