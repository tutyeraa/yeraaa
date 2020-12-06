			var q=0;
			var arr = new Array();
			var pass=new Array();
			pass[0]="Bugatti Divo";
			pass[1]="Ford Mustang";
			pass[2]="Lexus-570";
			pass[3]="Pagani Zonda F"
			pass[4]="Lamborghini"
			var caas=0;
			var xx = new Image();
			xx.src="https://3.bp.blogspot.com/-hT27KyPbhsA/XH237isndYI/AAAAAAAAAFA/Q5W7VfAuGt4FcT-o-jY8GmBAGrod_PlDACPcBGAYYCw/s1600/gfdgfgjhklk%253B.jpgs";



			arr[0]=new Image();
			arr[0].src="images/back.jpg";

			arr[1]=new Image();
			arr[1].src="images/guira.jfif";

			arr[2]=new Image();
			arr[2].src="images/guitarcollection.jfif";

			arr[3]=new Image();
			arr[3].src="images/e.jpg";

			// arr[4]=new Image();
			// arr[4].src='https://cdn.hiconsumption.com/wp-content/uploads/2019/01/Lamborghini-Urus-By-Manhart-Performance-0-Hero-1087x725.jpg';



		setInterval(f,4000);
		setInterval(t,9000);
		setInterval(x,11000);
		setInterval(s,13000);


			function s(){
			document.getElementById("resim").src=document.getElementById("second").src;
			// document.getElementById("P").style.color = "yellow"

					}

			function f(){
						document.getElementById("resim").src=document.getElementById("first").src;
						// document.getElementById("P").style.color = "black"
					}

			function t(){
						document.getElementById("resim").src=document.getElementById("three").src;
						// document.getElementById("P").style.color = "blue"
					}


			function x(){
						document.getElementById("resim").src=document.getElementById("four").src;
						// document.getElementById("P").style.color = "red"
					}
					
