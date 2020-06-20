/*
 * Copyright (c) 2020. All rights reserved by Woliul Hasan. Fork me on https://github.com/hmwoliul
 */

var ID="EDT";var ConvertFrom="bijoy"
function ChangeKeyboarLayoutStatus()
{var field=document.getElementsByName('KeyboardLayoutOption');if(KeyBoardLayout==1||EnglishKeyboard==true)
{field[0].checked=true;}
else if(KeyBoardLayout==2)
{field[KeyBoardLayout-1].checked=true;}
else if(KeyBoardLayout==3)
{field[KeyBoardLayout-1].checked=true;}
else if(KeyBoardLayout==4)
{field[KeyBoardLayout-1].checked=true;}
else if(KeyBoardLayout==5)
{field[KeyBoardLayout-1].checked=true;}}
function ChangeConverterStatus()
{var field=document.getElementsByName('ConversionOption');if(ConvertFrom=="bijoy")
{field[0].checked=true;}
else if(ConvertFrom=="somewherein")
{field[1].checked=true;}
else if(ConvertFrom=="boisakhi")
{field[2].checked=true;}}
function KeyboardLayoutOptionClick(event)
{var field=document.getElementsByName('KeyboardLayoutOption');for(var counter=0;counter<field.length;counter++)
{if(field[counter].checked)
{KeyBoardLayout=counter+1;ChangeKeyboarLayoutStatus();var myFld=document.getElementById(ID);myFld.focus();break;}}}
function ConvertFromTextArea(idcvt)
{var str=document.getElementById(idcvt).value;str=ConvertToUnicode(ConvertFrom,str);Insert(document.getElementById(ID),str);}
function ConvertToTextArea(idcvt)
{var str=document.getElementById(ID).value;str=ConvertToASCII(ConvertFrom,str);Insert(document.getElementById(idcvt),str);}
function ClearTextArea(idtxt)
{var elem=document.getElementById(idtxt);elem.value="";elem.focus();}
function ChangeConvertOptionStatus()
{var field=document.getElementsByName('ConversionOption');var convertarea=document.getElementById('CONVERTEDT');if(ConvertFrom=="bijoy")
{convertarea.style.fontFamily="SutonnyMJ";convertarea.style.fontSize="14pt";convertarea.style.width=400;field[0].checked=true;}
else if(ConvertFrom=="somewherein")
{convertarea.style.fontFamily="SushreeMJ";convertarea.style.fontSize="14pt";convertarea.style.width=300;field[1].checked=true;}
else if(ConvertFrom=="boisakhi")
{convertarea.style.fontFamily="Boishakhi";convertarea.style.fontSize="12pt";convertarea.style.width=300;field[2].checked=true;}}
function ConvertOptionChange(event)
{var field=document.getElementsByName('ConversionOption');for(var counter=0;counter<field.length;counter++)
{if(field[counter].checked)
{if(counter==0)
ConvertFrom="bijoy";else if(counter==1)
ConvertFrom="somewherein";else if(counter==2)
ConvertFrom="boisakhi";break;}}
ChangeConvertOptionStatus();}
function OnPageLoad()
{ChangeKeyboarLayoutStatus();ChangeConverterStatus();var myFld=document.getElementById(ID);var unicodefontLabel=document.getElementById("unicodefont");if(IE)
{unicodefontLabel.innerHTML="Download the unicode font from <a href=SutonnyBanglaOMJ.ttf>here</a>."
myFld.style.fontFamily="SutonnyBanglaOMJ";}
else
{unicodefontLabel.innerHTML="Download the unicode font from <a href=SolaimanLipi_29-05-06.ttf>here</a>."
myFld.style.fontFamily="SolaimanLipi";}
myFld.style.width=400;var convertarea=document.getElementById('CONVERTEDT');convertarea.style.width=400;}