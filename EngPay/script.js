
     console.log("rehan");
     
     let a = 0;
     
     function myfunction ()  {


      if(a==0) {

          document.getElementById("content").style.backgroundColor = "black";
          document.getElementById("headTitle").style.color = "white";
          document.getElementById("headPara").style.color = "white";
          document.getElementById("mainbtn1").style.color = "white";
          document.getElementById("mainbtn2").style.color = "white";
          
          a++;
      }

      else{
          document.getElementById("content").style.backgroundColor = "rgba(182, 255, 231, 0.753)";
          document.getElementById("headTitle").style.color = "black";
          document.getElementById("headPara").style.color = "black";
          document.getElementById("mainbtn1").style.color = "black";
          document.getElementById("mainbtn2").style.color = "black";
          a = 0;
      }   
   }
     
     
