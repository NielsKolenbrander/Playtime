
r(function(){
	switchPoints();
	sortTable();
});

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

function calculatePoints(){
		
}

function switchPoints(){
	
	// switch between points table
	var pointOptions = document.getElementsByClassName("pointsOption");

	for(i = 0; i < pointOptions.length; i++){
		
		
		// markup for active points
		var allPoints = pointOptions[i].getElementsByTagName("ol")[0].children;
		for (c = 0; c < allPoints.length; c++){
			if(isNumeric(allPoints[c].innerHTML) && allPoints[c].innerHTML != 0){
				allPoints[c].classList.add("puntah");
			}
		}
		
		// define point selections
		if(pointOptions[i].classList.contains("two")){
			var pointsTwo = pointOptions[i].getElementsByTagName("ol")[0].children;
		} else if(pointOptions[i].classList.contains("three")){
				var pointsThree = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("four")){
				var pointsFour = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("five")){
				var pointsFive = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("six")){
				var pointsSix = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("seven")){
				var pointsSeven = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("eight")){
				var pointsEight = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("nine")){
				var pointsNine = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("ten")){
				var pointsTen = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		} else if(pointOptions[i].classList.contains("eleven")){
				var pointsEleven = pointOptions[i].getElementsByTagName("ol")[0].children; 	
		}
	}
	
	// set the results table per contender
	var driverlistCollection = document.getElementsByClassName("driverList");
	var driverList = [].slice.call(driverlistCollection);
	for(j = 0; j < driverList.length; j++){
		var tdCollection = driverList[j].getElementsByTagName("td");
		var td = [].slice.call(tdCollection);
		var nameField = td[1].innerHTML;
		var Points = 0;
		var driverPointsTotal = td[td.length-1];
		
		// style the table and calculate
		for(i = 0; i < td.length; i++){
			var element = td[i].innerHTML;
			if(element == "1"){
				td[i].classList.add("first");
				
				if(td[i].classList.contains("two")){
					Points = Points + parseFloat(pointsTwo[element].innerHTML);
				} else if(td[i].classList.contains("three")) {
					Points = Points + parseFloat(pointsThree[element].innerHTML);
				}  else if(td[i].classList.contains("four")) {
					Points = Points + parseFloat(pointsFour[element].innerHTML);
				}  else if(td[i].classList.contains("five")) {
					Points = Points + parseFloat(pointsFive[element].innerHTML);
				}  else if(td[i].classList.contains("six")) {
					Points = Points + parseFloat(pointsSix[element].innerHTML);
				}  else if(td[i].classList.contains("seven")) {
					Points = Points + parseFloat(pointsSeven[element].innerHTML);
				}  else if(td[i].classList.contains("eight")) {
					Points = Points + parseFloat(pointsEight[element].innerHTML);
				}  else if(td[i].classList.contains("nine")) {
					Points = Points + parseFloat(pointsNine[element].innerHTML);
				}  else if(td[i].classList.contains("ten")) {
					Points = Points + parseFloat(pointsTen[element].innerHTML);
				}  else if(td[i].classList.contains("eleven")) {
					Points = Points + parseFloat(pointsEleven[element].innerHTML);
				}
				
			} else if(element == "2"){
				td[i].classList.add("second");
				if(td[i].classList.contains("two")){
					Points = Points + parseFloat(pointsTwo[element].innerHTML);
				} else if(td[i].classList.contains("three")) {
					Points = Points + parseFloat(pointsThree[element].innerHTML);
				}  else if(td[i].classList.contains("four")) {
					Points = Points + parseFloat(pointsFour[element].innerHTML);
				}  else if(td[i].classList.contains("five")) {
					Points = Points + parseFloat(pointsFive[element].innerHTML);
				}  else if(td[i].classList.contains("six")) {
					Points = Points + parseFloat(pointsSix[element].innerHTML);
				}  else if(td[i].classList.contains("seven")) {
					Points = Points + parseFloat(pointsSeven[element].innerHTML);
				}  else if(td[i].classList.contains("eight")) {
					Points = Points + parseFloat(pointsEight[element].innerHTML);
				}  else if(td[i].classList.contains("nine")) {
					Points = Points + parseFloat(pointsNine[element].innerHTML);
				}  else if(td[i].classList.contains("ten")) {
					Points = Points + parseFloat(pointsTen[element].innerHTML);
				}  else if(td[i].classList.contains("eleven")) {
					Points = Points + parseFloat(pointsEleven[element].innerHTML);
				}
			} else if(element == "3"){
				td[i].classList.add("third");
				if(td[i].classList.contains("two")){
					Points = Points + parseFloat(pointsTwo[element].innerHTML);
				} else if(td[i].classList.contains("three")) {
					Points = Points + parseFloat(pointsThree[element].innerHTML);
				}  else if(td[i].classList.contains("four")) {
					Points = Points + parseFloat(pointsFour[element].innerHTML);
				}  else if(td[i].classList.contains("five")) {
					Points = Points + parseFloat(pointsFive[element].innerHTML);
				}  else if(td[i].classList.contains("six")) {
					Points = Points + parseFloat(pointsSix[element].innerHTML);
				}  else if(td[i].classList.contains("seven")) {
					Points = Points + parseFloat(pointsSeven[element].innerHTML);
				}  else if(td[i].classList.contains("eight")) {
					Points = Points + parseFloat(pointsEight[element].innerHTML);
				}  else if(td[i].classList.contains("nine")) {
					Points = Points + parseFloat(pointsNine[element].innerHTML);
				}  else if(td[i].classList.contains("ten")) {
					Points = Points + parseFloat(pointsTen[element].innerHTML);
				}  else if(td[i].classList.contains("eleven")) {
					Points = Points + parseFloat(pointsEleven[element].innerHTML);
				}
			} else if(element > 3){
				if(td[i].classList.contains("two")){
					Points = Points + parseFloat(pointsTwo[element].innerHTML);
				} else if(td[i].classList.contains("three")) {
					Points = Points + parseFloat(pointsThree[element].innerHTML);
				}  else if(td[i].classList.contains("four")) {
					if(element == 4){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsFour[element].innerHTML);
				}  else if(td[i].classList.contains("five")) {
					if(element == 5){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsFive[element].innerHTML);
				}  else if(td[i].classList.contains("six")) {
					if(element == 6){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsSix[element].innerHTML);
				}  else if(td[i].classList.contains("seven")) {
					if(element == 7){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsSeven[element].innerHTML);
				}  else if(td[i].classList.contains("eight")) {
					if(element == 8){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsEight[element].innerHTML);
				}  else if(td[i].classList.contains("nine")) {
					if(element == 9){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsNine[element].innerHTML);
				}  else if(td[i].classList.contains("ten")) {
					if(element == 10){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsTen[element].innerHTML);
				}  else if(td[i].classList.contains("eleven")) {
					if(element == 11){
						td[i].classList.add("nonpoints");
					} else {
						td[i].classList.add("points");
					}
					Points = Points + parseFloat(pointsEleven[element].innerHTML);
				}
			} else if(element == "dsq") {
				td[i].classList.add("dsq");
			} else if(element == "dnq") {
				td[i].classList.add("dnq");
			} else if(element == "nc"){
				td[i].classList.add("nonpoints");	
			}
		}

		driverPointsTotal.innerHTML = Points;
		//rankingPosition.innerHTML = ranking;
	}
};
// make array function
function makeArray(){
	return Array.from(arguments)
}

// isNumeric Method
function isNumeric(number){
	return !isNaN(parseFloat(number)) && isFinite(number);
}

function descending(a,b) {
  if (a.Points < b.Points)
    return 1;
  if (a.Points > b.Points)
    return -1;
  return 0;
}

function ascending(a,b){
	if(a.Points < b.Points)
		return -1;
	if(a.Points > b.Points)
		return 1;
	return 0;
}
	
function sortTable(){
	var tbl = document.getElementById("pointsTable").tBodies[0];
  var store = [];
   
  for(var i=0, len=tbl.rows.length; i<len; i++){
      var row = tbl.rows[i];
      var sortnr = parseFloat(row.cells[row.cells.length-1].textContent || row.cells[row.cells.length-1].innerText);
      if(!isNaN(sortnr)) store.push([sortnr, row]);
  }
  
  store.sort(function(x,y){
      return y[0] - x[0];
  });
  for(var i=0, len=store.length; i<len; i++){
      tbl.appendChild(store[i][1]);
      // create new index
      var rankingPosition = i+1;
      store[i][1].children[0].innerHTML = rankingPosition;
  }
  store = null;
}

function findChildByClassName(element, className) {
    var foundElement = null, found;
    function recurse(element, className, found) {
        for (var i = 0; i < element.childNodes.length && !found; i++) {
            var el = element.childNodes[i];
            var classes = el.className != undefined? el.className.split(" ") : [];
            for (var j = 0, jl = classes.length; j < jl; j++) {
                if (classes[j] == className) {
                    found = true;
                    foundElement = element.childNodes[i];
                    break;
                }
            }
            if(found)
                break;
            recurse(element.childNodes[i], className, found);
        }
    }
    recurse(element, className, false);
    return foundElement;
}
	



