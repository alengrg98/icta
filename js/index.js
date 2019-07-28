var i=0;
//var snamearray=Array();
var n,s,sname1,sname2,sname3,sname4,sname5,sname6;
var smark1,smark2,smark3,smark4,smark5,smark6;
var stmark1,stmark2,stmark3,stmark4,stmark5,stmark6;
var pmark1,pmark2,pmark3,pmark4,pmark5,pmark6;
//var g1,g2,g3,g4,g5,g6;
var garray=Array();
garray[0]="NULL";
function getdetails(){
     n=document.getElementById("name").value;
    //alert(n);
     s=document.getElementById("sem").value;
    //alert(s);
     sname1=document.getElementById("sn1").value;
    /*console.log(sname1);
    alert(sname);
    snamearray[i]=sname1;
    i++;*/
    sname2=document.getElementById("sn2").value;
    /*console.log(sname2);
    snamearray[i]=sname2;
    i++;*/
     sname3=document.getElementById("sn3").value;
    /*console.log(sname3);
    snamearray[i]=sname3;
    i++;*/
     sname4=document.getElementById("sn4").value;
    /*console.log(sname4);
    snamearray[i]=sname4;
    i++;*/
    sname5=document.getElementById("sn5").value;
    /*console.log(sname5);
    snamearray[i]=sname5;
    i++;*/
    sname6=document.getElementById("sn6").value;
    /*console.log(sname6);
    snamearray[i]=sname6;
    i++;
    var res="";
    for(var j=0;j<snamearray.length;j++)
    {
        res+=snamearray[j]+"<br>";
    }
    document.getElementById("result").innerHTML=res;
    */
   smark1=parseInt(document.getElementById("sm1").value);
   //console.log(smark1);
    smark2=parseInt(document.getElementById("sm2").value);
   //console.log(smark2);
    smark3=parseInt(document.getElementById("sm3").value);
   //console.log(smark3);
   smark4=parseInt(document.getElementById("sm4").value);
   //console.log(smark4);
   smark5=parseInt(document.getElementById("sm5").value);
   //console.log(smark5);
   smark6=parseInt(document.getElementById("sm6").value);
   //console.log(smark6);
   
    stmark1=parseInt(document.getElementById("smt1").value);
   //console.log(stmark1);
    stmark2=parseInt(document.getElementById("smt2").value);
   //console.log(stmark2);
    stmark3=parseInt(document.getElementById("smt3").value);
   //console.log(stmark3);
   stmark4=parseInt(document.getElementById("smt4").value);
   //console.log(stmark4);
   stmark5=parseInt(document.getElementById("smt5").value);
   //console.log(stmark5);
   stmark6=parseInt(document.getElementById("smt6").value);
   //console.log(stmark6);
   
  

    return 0;
}

function percentage(){
    //console.log(smark1);
    pmark1=(smark1/stmark1)*100;
    pmark2=(smark2/stmark2)*100;
    pmark3=(smark3/stmark3)*100;
    pmark4=(smark4/stmark4)*100;
    pmark5=(smark5/stmark5)*100;
    pmark6=(smark6/stmark6)*100;
    //console.log(pmark1);
    //alert(pmark1);
    return 0;
}
function grade()
{
    //var p="pmark"+i;
    //var g="g"+i;
    //i++;
    //alert(p);
    for(i=1;i<=6;i++)
    {
         if(eval("pmark"+i)>=95)
            {
            //alert("S");
            garray[i]="S";
            //alert(garray[1]);

            }   
            else if (eval("pmark"+i)>=90) 
            {
                 garray[i]="A+";
            }
            else if (eval("pmark"+i)>=85)
            {
                 garray[i]="A";
        
            }
            else if (eval("pmark"+i)>=80)
            {
                garray[i]="B+";
            }
            else if (eval("pmark"+i)>=75)
            {
                garray[i]="B";
            }
            else if (eval("pmark"+i)>=70)
             {
                garray[i]="C+";
            }
            else if (eval("pmark"+i)>=65)
            {
                garray[i]="C";
            }
            else if (eval("pmark"+i)>=55)
            {
                garray[i]="D";

             }
          else if (eval("pmark"+i)>=50)
            {
                garray[i]="E";
            }
            else if (eval("pmark"+i)<50)
            {
                garray[i]="F";
          }
      console.log(garray[i]);
    }  

   
        
    return 0;
}
function generate(){
    getdetails();
    //console.log(stmark1);
    percentage();
    grade();


}