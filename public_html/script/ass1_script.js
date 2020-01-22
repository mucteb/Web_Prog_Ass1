var item1count=0;
var item2count=0;
var item3count=0;
var item4count=0;

var olditem1HTML;
var olditem2HTML;
var olditem3HTML;
var olditem4HTML;

var newitem1HTML="<p id='item1Text' ondblclick='resetText(this.id)'>More Info</p>";
var newitem2HTML="<p id='item2Text' ondblclick='resetText(this.id)'>More Info</p>";
var newitem3HTML="<p id='item3Text' ondblclick='resetText(this.id)'>More Info</p>";
var newitem4HTML="<p id='item4Text' ondblclick='resetText(this.id)'>More Info</p>";

function load()
{
   //var oldHTML = document.getElementById("mainHTML").innerHTML;
   //alert(oldHTML);
olditem1HTML=document.getElementById("item1Text").innerHTML;
olditem2HTML=document.getElementById("item2Text").innerHTML;
olditem3HTML=document.getElementById("item3Text").innerHTML;
olditem4HTML=document.getElementById("item4Text").innerHTML;
   
   
   
}

function purchaseBox(imgId)
{
    

    if (confirm("Do you wish to buy this product?"))
    {
        var itemCount=prompt("Enter the number of "+imgId+" items: ","");
        switch (imgId)
        {
            case "watch1":
            {
               item1count = itemCount;
               break;
            }
            
            case "watch2":
            {
               item2count = itemCount;
               break;
            }
            case "watch3":
            {
               item3count = itemCount;
               break;
            }
            case "watch4":
            {
               item4count = itemCount;
               break;
            }

        
        }
            setSection();

    } else {
        alert("You pressed Cancel!");
    }
}

function setSection()
{
    var itemCount = parseInt(item1count)+parseInt(item2count)+parseInt(item3count)+parseInt(item4count);
    document.getElementById("totalOrders").innerHTML="<p id='totalOrders'>Your total orders count is: "+itemCount+"</p>";
}

function moreInfo(pId)
{
 switch (pId)
     {
            case "item1Text":
            {
               document.getElementById(pId).innerHTML=newitem1HTML;
               break;
            }
            
            case "item2Text":
            {
               document.getElementById(pId).innerHTML=newitem2HTML;
               break;
            }
            case "item3Text":
            {
               document.getElementById(pId).innerHTML=newitem3HTML;
               break;
            }
            case "item4Text":
            {
               document.getElementById(pId).innerHTML=newitem4HTML;
               break;
            }

        
        }

}

function resetText(pId)
{

 switch (pId)
     {
            case "item1Text":
            {
               document.getElementById(pId).innerHTML=olditem1HTML;
               break;
            }
            
            case "item2Text":
            {
               document.getElementById(pId).innerHTML=olditem2HTML;
               break;
            }
            case "item3Text":
            {
               document.getElementById(pId).innerHTML=olditem3HTML;
               break;
            }
            case "item4Text":
            {
               document.getElementById(pId).innerHTML=olditem4HTML;
               break;
            }

        
        }

}

