var persons=[{
	image:"CR5/boy.jpg",
	name:"Jack",
	Surname:"bauer",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:6,
	Age: 21,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/girl1.jpg",
	name:"Sara",
	Surname:"siol",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:5,
	Age: 28,
	addlike: function(){
		return  this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/boy2.jpg",
	name:"sam",
	Surname:"smith",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:2,
	Age: 23,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/girl2.jpg",
	name:"nancy",
	Surname:"lorinc",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:7,
	Age: 25,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/boy3.jpg",
	name:"Michael",
	Surname:"Smith",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:6,
	Age: 26,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/girl3.jpg",
	name:"Emma ",
	Surname:"Stone",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:12,
	Age: 22,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/girl4.jpg",
	name:"Cameron",
	Surname:"Diaz",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:3,
	Age: 24,
	addlike: function(){
		return this.likes ++;console.log(this.likes);
	}
},{
	image:"CR5/boy4.jpg",
	name:"Dani",
	Surname:"hisny",
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	heart:"CR5/like.png",
	likes:9,
	Age: 29,
	addlike: function(){
		return this.likes ++; console.log(this.likes);
	}
}];


for(var i=0; i<persons.length;i++){
	document.getElementById('target').innerHTML+="<div id='persons'><img id='imgs' src='"+persons[i].image+"'>"+"<div id='about'><p>Name : "+persons[i].name+"</p><p>Surname : "+persons[i].Surname+"</p><p>Age : "+persons[i].Age+"</p></div><input type='submit' value='like' id='like' onclick='"+persons[i].addlike()+"'><img id='heart' src='"+persons[i].heart+"'><p id='likes'>"+persons[i].likes+"</p></div>";
/*$('"#like'+i+'"').on("click",function(){
		persons[i].likes ++;
		document.getElementById('"likes'+i+'"').innerHTML=persons[i].likes;
	});*/
	/*$("#like").on("click",function(){
		$(this).attr("onClick=",persons[i].addlike());
	})*/
};


function sortbylikes(){
 	persons.sort(function(a, b) {
  var likeA = a.likes;
  var likeB = b.likes;
  if (likeA > likeB) {
    return -1;
  }
  if (likeA < likeB) {
    return 1;
  }
  return 0;
});
 	document.getElementById("target").innerHTML=" ";
 	for(var i=0; i<persons.length;i++){
	document.getElementById('target').innerHTML+="<div id='persons'><img id='imgs' src='"+persons[i].image+"'>"+"<div id='about'><p>Name : "+persons[i].name+"</p><p>Surname : "+persons[i].Surname+"</p><p>Age : "+persons[i].Age+"</p></div><input type='submit' value='like' id='like' onclick='"+persons[i].addlike()+"'><img id='heart' src='"+persons[i].heart+"'><p id='likes'>"+persons[i].likes+"</p></div>";
};
}
	