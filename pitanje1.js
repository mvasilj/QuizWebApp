const krajIgre = rezultat=>
`<div class="cijeliEkran">
	<p> Vaše opće znanje je...</p>
	<span> ${rezultat}<span>
	<form action="QuizStart.html">
    <input type="submit" value="Pokušajte ponovno" id="restart"/>
</form>
</div>`;
function loadEnd(string){
	let body = document.querySelector("body");
	body.innerHTML=krajIgre(string);
}
function loadpitanje(brojPitanja){
	let body=document.querySelector("body");
	body.innerHTML=`<div id="quizContainer" class="container">
			<div class="title">Pitanje ${brojPitanja===2 ? "Drugo" : brojPitanja===3 ? "Treće" : brojPitanja ===4 ? "Četvrto" : "Za (k)raj"}!</div>
			<div id="question" class="question" ></div>
			<span class="option" id="opt1" onclick="url${brojPitanja}(opt1)"></span>
			<span class="option" id="opt2" onclick="url${brojPitanja}(opt2)"></span>
			<span class="option" id="opt3" onclick="url${brojPitanja}(opt3)"></span>
			<span class="option" id="opt4" onclick="url${brojPitanja}(opt4)"></span>
			
		</div>`;
		
}
var pitanja1 = [{"question":"Glavni grad Australije je?",
				"a": "Perth", 
				"b": "Sydney" , 
				"c": "Canberra",
				"d": "Melbourne" , 
				"answer" : "Canberra"},
				{"question":"Drugi hrvatski predsjednik je?",
				"a":"Ivo Josipović",
				"b":"Stjepan Mesić",
				"c":"Ivica Račan",
				"d":"Dražen Budiša",
				"answer":"Stjepan Mesić"},
				{"question":"Savezničko iskrcavanje u Normandiji tkz. Dan D zbio se?",
				"a":"1942",
				"b":"1943",
				"c":"1944",
				"d":"1945",
				"answer":"1944"},
				{"question":"Od čega se radi guacamole umak?",
				"a":"Avokada",
				"b":"Chillija",
				"c":"Kukuruza",
				"d":"Manga",
				"answer":"Avokada"},
				{"question":"Tko je sastavio tablicu periodnog sustava elemenata?",
				"a":"Mendel",
				"b":"Lavoisier",
				"c":"Mendeljejev",
				"d":"Pasteur",
				"answer":"Mendeljejev"}];
				
var pitanja2 = [{"question":"Svjetski rekord u atletici na 100m iznosi?",
				"a": "9.98s", 
				"b": "9.79s" , 
				"c": "9.69s",
				"d": "9.58s" , 
				"answer" : "9.58s"},
				{"question":"Autor djela Grga Čvarak je?",
				"a":"Ivana Brlić Mažuranić",
				"b":"Ratko Zvrko",
				"c":"Grigor Vitez",
				"d":"August Šenoa",
				"answer":"Ratko Zvrko"},
				{"question":"Koja od navedenih osoba NIJE ujedno i trajekt Jadrolinije?",
				"a":"Ivan Gundulić",
				"b":"Mate Balota",
				"c":"Bartol Kašić",
				"d":"Petar Hektorović",
				"answer":"Ivan Gundulić"},
				{"question":"Što sačinjava 3/4 čistog zraka?",
				"a":"Kisik",
				"b":"Vodik",
				"c":"Ugljik",
				"d":"Dušik",
				"answer":"Dušik"},
				{"question":"Koji od ova četiri sveučilišta ne spada u skupinu naziva „liga bršljana”?",
				"a":"Dartmouth College",
				"b":"Stanford University",
				"c":"Princeton University",
				"d":"Columbia University",
				"answer":"Stanford University"}
				];
var pitanja3 = [{"question":"Koja od sljedećih žitarica ne sadrži gluten?",
				"a": "Pir", 
				"b": "Ječam" , 
				"c": "Kukuruz",
				"d": "Pšenica" , 
				"answer" : "Kukuruz"},
				{"question":"Koji je glavni grad Kalifornije?",
				"a":"Los Angeles",
				"b":"Sacramento",
				"c":"San Diego",
				"d":"San Francisco",
				"answer":"Sacramento"},
				{"question":"Koji se kukac latinskog naziva Drosophila Melanogaster često upotrebljava u genetičkim pokusima?",
				"a":"Bogomoljka",
				"b":"Vinska mušica",
				"c":"Krumpirova zlatica",
				"d":"Pčela",
				"answer":"Vinska mušica"},
				{"question":"Koji znanstvenik je otkrio bakteriju tuberkuloze?",
				"a":"Wilhelm Roentgen",
				"b":"Cesare Lombroso",
				"c":"Louis Pasteur",
				"d":"Robert Koch",
				"answer":"Robert Koch"},
				{"question":"Koja je najveća žlijezda u ljudskom tijelu?",
				"a":"Jetra",
				"b":"Štitnjača",
				"c":"Gušterača",
				"d":"Hipofiza",
				"answer":"Jetra"}
				];
var pitanja4 = [{"question":"..djedi vaši rodiše se tudijer, oci vaši rodiše se tudijer, i vi isti rodiste se tudijer.. Koju stilsku figuru uočavamo u ovim stihovima?",
				"a": "Polisindeton", 
				"b": "Aliteraciju" , 
				"c": "Asonancu",
				"d": "Epiforu" , 
				"answer" : "Epiforu"},
				{"question":"Michael Phelps je osvojio nestvarno velikih 28 olimpijskih odličja, međutim koliko od njih je zlatnoga sjaja?",
				"a":"19",
				"b":"21",
				"c":"23",
				"d":"25",
				"answer":"23"},
				{"question":"Koje je ime Apolonovoj svećenici iz Delfa?",
				"a":"Pitija",
				"b":"Kirka",
				"c":"Ifigenija",
				"d":"Kasandra",
				"answer":"Pitija"},
				{"question":"Tko/što je najstarije?",
				"a":"Kraljica Elizabeta II.",
				"b":"Hladnjak",
				"c":"Samostalni let preko Atlantika",
				"d":"Holokaust",
				"answer":"Kraljica Elizabeta II."},
				{"question":"Naseobinu Epidaurus stari Grci osnovali su na području današnjeg?",
				"a":"Zadra",
				"b":"Vrsara",
				"c":"Trogira",
				"d":"Cavtata",
				"answer":"Cavtata"}];
var pitanja5 = [{"question":"Koji nogometaš ima najviše odigranih utakmica na Svjetskim prvenstvima?",
				"a": "Miroslav Klose", 
				"b": "Paolo Maldini" , 
				"c": "Lothar Matthaus",
				"d": "Cafu" , 
				"answer" : "Lothar Matthaus"},
				{"question":"Tko je autor Jeđupke, poznate hrvatske zbirke pokladnih pjesama ?",
				"a":"Mavro Vetranović",
				"b":"Mikša Pelegrinović",
				"c":"Marin Držić",
				"d":"Ignjat Đurđević",
				"answer":"Mikša Pelegrinović"},
				{"question":"Osmi kranijalni živac je?",
				"a": "Vestibulokohlearni živac", 
				"b": "Jezičnoždrijelni živac" , 
				"c": "Lutajući živac",
				"d": "Lični živac" , 
				"answer" : "Vestibulokohlearni živac"},
				{"question":"Glavni grad Čada je?",
				"a": "Niamey", 
				"b": "N'Djamena" , 
				"c": "Accra",
				"d": "Kinshasa" , 
				"answer" : "N'Djamena"},
				{"question":"Koje godine je palo Zapadno Rimsko carstvo?",
				"a": "476.", 
				"b": "468." , 
				"c": "454.",
				"d": "442." , 
				"answer" : "476."}];



function pitanje1(){
	var index = Math.round(Math.random() * (4 - 0)) + 0;
	var pit=pitanja1[index];
	document.getElementById("question").innerHTML=pit.question;
	document.getElementById("opt1").innerHTML=pit.a;
	document.getElementById("opt2").innerHTML=pit.b;
	document.getElementById("opt3").innerHTML=pit.c;
	document.getElementById("opt4").innerHTML=pit.d;
	
}
function url1(parametar){
	var pitanje=document.getElementById("question").innerHTML;
	for (i=0; i<pitanja1.length; i++){
		if (pitanja1[i].question===pitanje)
		{ 
		  
		  if (parametar.innerHTML===pitanja1[i].answer)
			{
				
				loadpitanje(2);
				pitanje2();
				
			
			}
		  else{loadEnd("ŽIVI UŽAS! =(");}
		}	
	}
}


function pitanje2(){
	var index = Math.round(Math.random() * (4 - 0)) + 0;
	var pit=pitanja2[index];
	document.getElementById("question").innerHTML=pit.question;
	document.getElementById("opt1").innerHTML=pit.a;
	document.getElementById("opt2").innerHTML=pit.b;
	document.getElementById("opt3").innerHTML=pit.c;
	document.getElementById("opt4").innerHTML=pit.d;
	
}
function url2(parametar){
	var pitanje=document.getElementById("question").innerHTML;
	for (i=0; i<pitanja2.length; i++){
		if (pitanja2[i].question===pitanje)
		{ 
		  
		  if (parametar.innerHTML===pitanja2[i].answer)
			{
				loadpitanje(3);
				pitanje3();
			}
		  else{loadEnd("NEDOVOLJNO! :( PORADITE NA SEBI!");}
		}	
	}
}
function pitanje3(){
	var index = Math.round(Math.random() * (4 - 0)) + 0;
	var pit=pitanja3[index];
	document.getElementById("question").innerHTML=pit.question;
	document.getElementById("opt1").innerHTML=pit.a;
	document.getElementById("opt2").innerHTML=pit.b;
	document.getElementById("opt3").innerHTML=pit.c;
	document.getElementById("opt4").innerHTML=pit.d;
}
function url3(parametar){
	var pitanje=document.getElementById("question").innerHTML;
	for (i=0; i<pitanja3.length; i++){
		if (pitanja3[i].question===pitanje)
		{ 
		  
		  if (parametar.innerHTML===pitanja3[i].answer)
			{
				loadpitanje(4);
				pitanje4();
			}
		  else{loadEnd("DOVOLJNO! NEMOJTE SE ZADOVOLJITI TIME.");}
		}	
	}
}
function pitanje4(){
	var index = Math.round(Math.random() * (4 - 0)) + 0;
	var pit=pitanja4[index];
	document.getElementById("question").innerHTML=pit.question;
	document.getElementById("opt1").innerHTML=pit.a;
	document.getElementById("opt2").innerHTML=pit.b;
	document.getElementById("opt3").innerHTML=pit.c;
	document.getElementById("opt4").innerHTML=pit.d;
}
function url4(parametar){
	var pitanje=document.getElementById("question").innerHTML;
	for (i=0; i<pitanja4.length; i++){
		if (pitanja4[i].question===pitanje)
		{ 
		  
		  if (parametar.innerHTML===pitanja4[i].answer)
			{
				loadpitanje(5);
				pitanje5();
			}
		  else{loadEnd("DOBRO! WOOW ZNATE NEKE OSNOVNE STVARI!");}
		}	
	}
}
function pitanje5(){
	var index = Math.round(Math.random() * (4 - 0)) + 0;
	var pit=pitanja5[index];
	document.getElementById("question").innerHTML=pit.question;
	document.getElementById("opt1").innerHTML=pit.a;
	document.getElementById("opt2").innerHTML=pit.b;
	document.getElementById("opt3").innerHTML=pit.c;
	document.getElementById("opt4").innerHTML=pit.d;
}
function url5(parametar){
	var pitanje=document.getElementById("question").innerHTML;
	for (i=0; i<pitanja5.length; i++){
		if (pitanja5[i].question===pitanje)
		{ 
		  
		  if (parametar.innerHTML===pitanja5[i].answer)
			{
				loadEnd("IZVRSNO! NEMOJMO SE ZAVARAVATI KVIZ JE STVARNO LAGAN =)");
			}
		  else{loadEnd("VRLO DOBRO! SKORO PA BI MOGLI NA NEKI PUB KVIZ :P");}
		}	
	}
}