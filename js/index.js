var i=0;
//var snamearray=Array();
var n,s,examcode,sname1,sname2,sname3,sname4,sname5,sname6;
var smark1,smark2,smark3,smark4,smark5,smark6;
var tmark1,tmark2,tmark3,tmark4,tmark5,tmark6;
var pmark1,pmark2,pmark3,pmark4,pmark5,pmark6,status1;
//var g1,g2,g3,g4,g5,g6;
var garray=Array();
garray[0]="";
function getdetails(){
     n=document.getElementById("name").value;
    //alert(n);
     s=document.getElementById("sem").value;
    //alert(s);
    examcode=document.getElementById("ecode").value;
    //alert(examcode);
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
   
    tmark1=parseInt(document.getElementById("smt1").value);
   //console.log(tmark1);
   //alert(tmark1);
    tmark2=parseInt(document.getElementById("smt2").value);
   //console.log(tmark2);
    tmark3=parseInt(document.getElementById("smt3").value);
   //console.log(tmark3);
   tmark4=parseInt(document.getElementById("smt4").value);
   //console.log(tmark4);
   tmark5=parseInt(document.getElementById("smt5").value);
   //console.log(tmark5);
   tmark6=parseInt(document.getElementById("smt6").value);
   //console.log(tmark6);
   
  

}

function percentage(){
    //console.log(smark1);
    pmark1=(smark1/tmark1)*100;
    pmark2=(smark2/tmark2)*100;
    pmark3=(smark3/tmark3)*100;
    pmark4=(smark4/tmark4)*100;
    pmark5=(smark5/tmark5)*100;
    pmark6=(smark6/tmark6)*100;
    //console.log(pmark1);
    //alert(pmark1);
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
      //console.log(garray[i]);
    }  

   
        
}
function getstatus()
{
    status1="PASSED";
    for (i=1;i<=6;i++)
    {
        if(garray[i]=='F')
                status1='FAIL';
    }
}
function printtable()
{
    //alert(tmark1);
    var code;
    code='<div class="card"><div class="card-body"><table class="table table-borderless">';
    code+='<tr> <td> <label ><h5>Name:</h5></label> '+' '+n+'</td> <td> <label> <h5> Sem:'+' '+s+' </h5></label>';
    code+='</td> <td> <label> <h5> Exam Code: </h5> </label> '+'  '+examcode+'</td></tr></table>';
    code+='<table class="table table-bordered"> <thead class="thead-light"> <tr> <th> Subject </th> <th>Mark Obtained</th><th>Total Mark</th><th>Grade</th> </tr> </thead> <tbody>';
    for(i=1;i<=6;i++){
    code+='<tr>';
    code+='<td>'+eval("sname"+i)+'</td> <td>'+eval("smark"+i)+'</td> '+' <td>'+eval("tmark"+i)+'</td>'+'<td>'+garray[i]+'</td> ';
    }
    code+='</tbody></table><label class="float-right"><h5> Status: '+status1;
    
    code+=' </h5> </label> </div> </div>';
    document.getElementById("results").innerHTML=code;
}
function generate(){
    getdetails();
    //console.log(tmark1);
    percentage();
    grade();
    getstatus();
    printtable();
    //alert(status1);


}