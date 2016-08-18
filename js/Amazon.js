function getComments(){

		let comments = [];
		comments = $("#cm_cr-review_list .review .review-data .review-text").map(function() {
				return $(this).text();
		});
		alert('Click on Review Analyzer icon to get more insight about the reviews!');
		console.log(comments);

//		$('html').append("<span class='frame-wrapper'>"
//										+"<p>Hello</p>"								
//										+"</span>");
//
//		$('.frame-wrapper').draggable();

		if(comments!=[]){
			console.log('has data');
		}
		return comments;
		
}

$(document).ready(function(){
    console.log('Extracting text from comments');
    let comments = getComments();  
});
 

