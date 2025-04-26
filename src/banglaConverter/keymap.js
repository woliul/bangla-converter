/*
 * Copyright (c) 2020. All rights reserved by Woliul Hasan. Fork me on https://github.com/hmwoliul
 */

var IE=document.all?1:0;var LCUNI=0;var LC=0;var LC_KAR=0;var LC_STRING="";var EnglishKeyboard=false;var KeyBoardLayout=2;var ctl_v_conversion=false;var Avro_Cha_Flag=false;var Avro_A_Press_Flag=false;var bijoy_keyboard_map={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"ৃ","A":"র্","d":"ি","D":"ী","s":"ু","S":"ূ","f":"া","F":"অ","g":"্","G":"।","h":"ব","H":"ভ","j":"ক","J":"খ","k":"ত","K":"থ","l":"দ","L":"ধ","z":"্র","Z":"্য","x":"ও","X":"ৗ","c":"ে","C":"ৈ","v":"র","V":"ল","b":"ন","B":"ণ","n":"স","N":"ষ","m":"ম","M":"শ","q":"ঙ","Q":"ং","w":"য","W":"য়","e":"ড","E":"ঢ","r":"প","R":"ফ","t":"ট","T":"ঠ","y":"চ","Y":"ছ","u":"জ","U":"ঝ","i":"হ","I":"ঞ","o":"গ","O":"ঘ","p":"ড়","P":"ঢ়","&":"ঁ","$":"৳","`":"\u200C","~":"\u200D","\\":"ৎ","|":"ঃ"};var somewherein_phonetic_keyboard_map={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"া","A":"আ","d":"ড","D":"দ","s":"স","S":"ষ","f":"ফ","F":"ঋ","g":"গ","G":"ঘ","h":"হ","H":"ঃ","j":"জ","J":"ঝ","k":"ক","K":"খ","l":"ল","L":"খ","z":"য","Z":"ত","x":"ক্স","X":"ঢ","c":"চ","C":"ছ","v":"ভ","V":"ঠ","b":"ব","B":"ই","n":"ন","N":"ণ","m":"ম","M":"গ","q":"য়","Q":"ছ","w":"ৃ","W":"ঋ","e":"ে","E":"এ","r":"র","R":"ড়","t":"ট","T":"ত","y":"য়","Y":"্য","u":"ু","U":"উ","i":"ি","I":"ই","o":"ো","O":"ও","p":"প","P":"চ","&":"্","$":"৳","+":"্",".":"।","`":"\u200C","~":"\u200D","\\":"॥","|":"।"};var avro_phonetic_keyboard_map={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","o":"অ","a":"আ","A":"আ","i":"ই","I":"ঈ","u":"উ","U":"ঊ","e":"এ","E":"এ","O":"ও","d":"দ","D":"ড","s":"স","S":"শ","f":"ফ","g":"গ","h":"হ","H":"হ","j":"জ","J":"য","k":"ক","K":"ক","l":"ল","L":"ল","z":"য","Z":"্য","c":"চ","v":"ভ","V":"ভ","b":"ব","n":"ন","N":"ণ","m":"ম","y":"য়","w":"্ব","r":"র","R":"ড়","t":"ত","T":"ট","y":"য়","p":"প","$":"৳","+":"্",".":"।",":":"ঃ","^":"ঁ","`":"্"};var unijoy_keyboard_map={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"ৃ","A":"র্","d":"ি","D":"ী","s":"ু","S":"ূ","f":"া","F":"অ","g":"্","G":"।","h":"ব","H":"ভ","j":"ক","J":"খ","k":"ত","K":"থ","l":"দ","L":"ধ","z":"্র","Z":"্য","x":"ো","X":"ৌ","c":"ে","C":"ৈ","v":"র","V":"ল","b":"ন","B":"ণ","n":"স","N":"ষ","m":"ম","M":"শ","q":"ঙ","Q":"ং","w":"য","W":"য়","e":"ড","E":"ঢ","r":"প","R":"ফ","t":"ট","T":"ঠ","y":"চ","Y":"ছ","u":"জ","U":"ঝ","i":"হ","I":"ঞ","o":"গ","O":"ঘ","p":"ড়","P":"ঢ়","&":"ঁ","$":"৳","`":"\u200C","~":"\u200D","^":"÷","*":"×","\\":"ৎ","|":"ঃ"};function MapUnicodeCharacter(C)
{if(KeyBoardLayout==2)
return bijoy_keyboard_map[C];else if(KeyBoardLayout==3)
return somewherein_phonetic_keyboard_map[C];else if(KeyBoardLayout==4)
return avro_phonetic_keyboard_map[C];else if(KeyBoardLayout==5)
return unijoy_keyboard_map[C];return C;}
function ResetKarModifier()
{LC_KAR=0;LC_STRING="";}
function KarModification(field,CUni)
{if(LC_KAR==LCUNI||IsBanglaHalant(LCUNI)||CUni=="্র"||CUni=="্য")
{var len=LC_STRING.length;LC_STRING=LC_STRING+CUni;RemoveNInsert(field,LC_STRING+LC_KAR,len+LC_KAR.length);}
else if(CUni=="র্")
{var len=LC_STRING.length;LC_STRING=CUni+LC_STRING;RemoveNInsert(field,LC_STRING+LC_KAR,len+LC_KAR.length);}
else if(IsBanglaHalant(CUni))
{LC_STRING=LC_STRING+CUni;Insert(field,CUni);}
else
{Insert(field,CUni);ResetKarModifier();}}
function RefModification(field)
{var len=1;var kar="";var str="";var halant_found=true;var CH="";field.focus();while(true)
{if(document.selection)
{sel=document.selection.createRange();if(field.value.length>=len)
{sel.moveStart('character',-1*len);}
else
{CH="",len--;sel.moveStart('character',-1*len);break;}
CH=sel.text.charAt(0);}
else if(field.selectionStart||field.selectionStart==0)
{var startPos=field.selectionStart-len;var endPos=field.selectionEnd;var scrollTop=field.scrollTop;if(startPos<0)
{CH="",len--;startPos=field.selectionStart-len;break;}
CH=field.value.substring(startPos,startPos+1)}
if(len!=1&&IsBanglaKar(CH))
break;if(len==1&&IsBanglaKar(CH))
kar=CH;else if(IsBanglaSoroborno(CH)||IsBanglaDigit(CH)||IsSpace(CH))
break;else if(IsBanglaBanjonborno(CH))
{if(halant_found==true)
{str=CH+str;halant_found=false;}
else
break;}
else if(IsBanglaHalant(CH))
{str=CH+str;halant_found=true;}
len++;}
var line=CH+"র্"+str+kar;if(document.selection)
{sel.text=line;sel.collapse(true);sel.select();}
else if(field.selectionStart||field.selectionStart==0)
{field.value=field.value.substring(0,startPos)+line+field.value.substring(endPos,field.value.length);field.focus();field.selectionStart=startPos+line.length;field.selectionEnd=startPos+line.length;field.scrollTop=scrollTop;}}
function OAndOuKarModification(field,CH1,CH2)
{if(document.selection)
{field.focus();sel=document.selection.createRange();if(field.value.length>=1)
sel.moveStart('character',-1);if(sel.text.charAt(0)=='ে')
sel.text=CH1;else
sel.text=sel.text.charAt(0)+CH2;sel.collapse(true);sel.select();}
else if(field.selectionStart||field.selectionStart==0)
{var startPos=field.selectionStart-1;var endPos=field.selectionEnd;var scrollTop=field.scrollTop;var CH;startPos=(startPos==-1?field.value.length:startPos);if(field.value.substring(startPos,startPos+1)=="ে")
CH=CH1;else
{startPos=startPos+1;CH=CH2;}
field.value=field.value.substring(0,startPos)+CH+field.value.substring(endPos,field.value.length);field.focus();field.selectionStart=startPos+CH.length;field.selectionEnd=startPos+CH.length;field.scrollTop=scrollTop;}}
function IsSomewhereinPhoneticModifierCharaceter(CUni)
{if(CUni=='হ'||CUni=='গ'||CUni=='ঘ'||CUni=='ণ'||CUni=='ঃ'||CUni=='ট'||CUni=='ো'||CUni=='ই'||CUni=='ি'||CUni=='উ'||CUni=='ু'||CUni=='র'||CUni=='ড়')
return true;return false;}
function GetSomewhereinPhoneticModifiedCharaceter(CUni)
{var CMod=CUni;if(LCUNI=='ক'&&CUni=='হ')CMod='খ';else if(LCUNI=='গ'&&CUni=='হ')CMod='ঘ';else if(LCUNI=='চ'&&CUni=='হ')CMod='চ';else if(LCUNI=='জ'&&CUni=='হ')CMod='ঝ';else if(LCUNI=='ট'&&CUni=='হ')CMod='ঠ';else if(LCUNI=='ড'&&CUni=='হ')CMod='ঢ';else if(LCUNI=='ত'&&CUni=='হ')CMod='থ';else if(LCUNI=='দ'&&CUni=='হ')CMod='ধ';else if(LCUNI=='প'&&CUni=='হ')CMod='ফ';else if(LCUNI=='ব'&&CUni=='হ')CMod='ভ';else if(LCUNI=='স'&&CUni=='হ')CMod='শ';else if(LCUNI=='ড়'&&CUni=='হ')CMod='ঢ়';else if(LCUNI=='ণ'&&CUni=='গ')CMod='ঙ';else if(LCUNI=='ন'&&CUni=='গ')CMod='ং';else if(LCUNI=='ণ'&&CUni=='ঘ')CMod='ঞ';else if(LCUNI=='ণ'&&CUni=='ণ')CMod='ঁ';else if(LCUNI=='ঃ'&&CUni=='ঃ')CMod='ঃ';else if(LCUNI=='ট'&&CUni=='ট')CMod='ৎ';else if(LCUNI=='া'&&CUni=='ো')CMod='অ';else if(LCUNI=='ি'&&CUni=='ি')CMod='ী';else if(LCUNI=='ই'&&CUni=='ই')CMod='ঈ';else if(LCUNI=='ু'&&CUni=='ু')CMod='ূ';else if(LCUNI=='উ'&&CUni=='উ')CMod='ঊ';else if(LCUNI=='ও'&&CUni=='ই')CMod='ঐ';else if(LCUNI=='ো'&&CUni=='ি')CMod='ৈ';else if(LCUNI=='ও'&&CUni=='উ')CMod='ঔ';else if(LCUNI=='ো'&&CUni=='ু')CMod='ৌ';else if(LCUNI=='ৃ'&&CUni=='র')CMod='ৃ';else if(LCUNI=='ঋ'&&CUni=='ড়')CMod='ঋ';return CMod;}
function IsAvroPhoneticModifierCharaceter(CUni)
{if(CUni=='ঃ'||CUni=='ো'||CUni=='ি'||CUni=='ু'||IsBanglaSoroborno(CUni)||IsBanglaBanjonborno(CUni))
return true;return false;}
function GetAvroPhoneticBanjonBanjonEquivalent(CUni1,CUni2)
{var CMod=CUni2;if((CUni1=='ক'&&CUni2=='ক')||(CUni1=='ক'&&CUni2=='খ'))
CMod='\u09CD'+CUni2;return CMod;}
function GetAvroPhoneticModifiedCharaceter(CUni)
{var CMod=CUni;if(CUni!='হ'&&Avro_Cha_Flag==true)
Avro_Cha_Flag=false;if(LCUNI=='ক'&&CUni=='হ')CMod='খ';else if(LCUNI=='গ'&&CUni=='হ')CMod='ঘ';else if(LCUNI=='চ'&&CUni=='হ'&&Avro_Cha_Flag==false){CMod='চ';Avro_Cha_Flag=true;}
else if(LCUNI=='চ'&&CUni=='হ'&&Avro_Cha_Flag==true){CMod='ছ';Avro_Cha_Flag=false;}
else if(LCUNI=='জ'&&CUni=='হ')CMod='ঝ';else if(LCUNI=='ট'&&CUni=='হ')CMod='ঠ';else if(LCUNI=='ড'&&CUni=='হ')CMod='ঢ';else if(LCUNI=='ত'&&CUni=='হ')CMod='থ';else if(LCUNI=='দ'&&CUni=='হ')CMod='ধ';else if(LCUNI=='প'&&CUni=='হ')CMod='ফ';else if(LCUNI=='ব'&&CUni=='হ')CMod='ভ';else if(LCUNI=='স'&&CUni=='হ')CMod='শ';else if(LCUNI=='শ'&&CUni=='হ')CMod='ষ';else if(LCUNI=='ড়'&&CUni=='হ')CMod='ঢ়';else if(LCUNI=='ণ'&&CUni=='গ')CMod='ঙ';else if(LCUNI=='ন'&&CUni=='গ')CMod='ং';else if(LCUNI=='ণ'&&CUni=='ঘ')CMod='ঞ';else if(LCUNI=='ঃ'&&CUni=='ঃ')CMod='ঃ';else if(LCUNI=='ট'&&CUni=='ট')CMod='ৎ';else if(LCUNI=='া'&&CUni=='ো')CMod='অ';else if(LCUNI=='ি'&&CUni=='ি')CMod='ী';else if(LCUNI=='ু'&&CUni=='ু')CMod='ূ';else if(LCUNI=='উ'&&CUni=='উ')CMod='ঊ';else if(LCUNI=='ও'&&CUni=='ই')CMod='ঐ';else if(LCUNI=='ো'&&CUni=='ি')CMod='ৈ';else if(LCUNI=='ও'&&CUni=='উ')CMod='ঔ';else if(LCUNI=='ো'&&CUni=='ু')CMod='ৌ';else if(LCUNI=='ৃ'&&CUni=='র')CMod='ৃ';else if(LCUNI=='ঋ'&&CUni=='ড়')CMod='ঋ';else if((LCUNI=='র'||LCUNI=='ড়')&&IsBanglaBanjonborno(CUni))CMod=CUni;else if(CUni=='ঁ')
CMod=CUni;else if(IsBanglaBanjonborno(LCUNI)&&CUni=='অ'&&Avro_A_Press_Flag==false){Avro_A_Press_Flag=true;CMod=LCUNI;}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaSoroborno(CUni)&&Avro_A_Press_Flag==true){CMod=CUni;}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaSoroborno(CUni))
CMod=MapSorbornoToKar(CUni);else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaBanjonborno(CUni)&&Avro_A_Press_Flag==false)
CMod='\u09CD'+CUni;else if(LCUNI=='অ'&&CUni=='অ')CMod='উ';else if(LCUNI=='অ'&&CUni=='ই')CMod='ঐ';else if(LCUNI=='অ'&&CUni=='ই')CMod='ঐ';else if(LCUNI=='া'&&CUni=='অ')CMod='ও';else if(LCUNI=='এ'&&CUni=='এ')CMod='ঈ';else if(LCUNI=='ে'&&CUni=='অ')CMod='ও';else if(LCUNI=='ও'&&CUni=='ঈ')CMod='ঔ';if(CUni!='অ'&&CUni!='\u09CD'&&Avro_A_Press_Flag==true)
Avro_A_Press_Flag=false;return CMod;}
function ProcessCharacter(field,C,K,CUni)
{if(LCUNI=='‌'&&CUni=="্য")
{RemoveNInsert(field,field.value.charAt(field.value.length-1)+"‌্য",1);ResetKarModifier();return;}
if(IsBanglaPostKar(CUni))
ResetKarModifier();if(IsBanglaDigit(CUni))
ResetKarModifier();if(LCUNI=='অ'&&CUni=='া'){RemoveNInsert(field,"আ",1);ResetKarModifier();}
else if(IsBanglaHalant(LCUNI)&&IsBanglaKar(CUni)){RemoveNInsert(field,MapKarToSorborno(CUni),1);ResetKarModifier();}
else if(KeyBoardLayout!=5&&IsBanglaNukta(LCUNI)&&IsBanglaPostKar(CUni)==true){RemoveNInsert(field,CUni+LCUNI,1);ResetKarModifier();}
else if(KeyBoardLayout!=5&&IsBanglaNukta(LCUNI)&&IsBanglaFola(CUni)){RemoveNInsert(field,CUni+LCUNI,1);ResetKarModifier();}
else if(KeyBoardLayout==2&&IsBanglaPreKar(LC_KAR))
KarModification(field,CUni);else if(KeyBoardLayout==3&&IsSomewhereinPhoneticModifierCharaceter(CUni)&&IsSpace(LCUNI)==false)
{var CUni2=GetSomewhereinPhoneticModifiedCharaceter(CUni);if(CUni2!=CUni){CUni=CUni2;RemoveNInsert(field,CUni,1);ResetKarModifier();}
else Insert(field,CUni);}
else if(KeyBoardLayout==4&&IsAvroPhoneticModifierCharaceter(CUni)&&IsSpace(LCUNI)==false)
{var CUni2=GetAvroPhoneticModifiedCharaceter(CUni);if(CUni2!=CUni){if(IsBanglaBanjonborno(LCUNI)&&CUni=='হ')
{RemoveNInsert(field,CUni2,1);}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaBanjonborno(CUni))
{Insert(field,CUni2);}
else if(IsBanglaKar(LCUNI)&&IsBanglaSoroborno(CUni))
{Insert(field,CUni2);}
else if(CUni2==MapSorbornoToKar(CUni))
{Insert(field,CUni2);}
else
{RemoveNInsert(field,CUni2,1);}
CUni=CUni2;ResetKarModifier();}
else Insert(field,CUni);}
else if(KeyBoardLayout!=5&&CUni=="র্")
RefModification(field);else if(KeyBoardLayout!=5&&CUni=='া')
OAndOuKarModification(field,'ো','া');else if(KeyBoardLayout!=5&&CUni=='ৗ')
OAndOuKarModification(field,'ৌ','ৗ');else if(K>29){Insert(field,CUni);}
else if(K==13&&IE){Insert(field,CUni);}
if((IsBanglaHalant(LCUNI)==false&&IsBanglaPreKar(CUni)))
LC_KAR=CUni;if(!(IsBanglaNukta(LCUNI)&&IsBanglaFola(CUni)))
{LCUNI=CUni;}}
function KeyBoardDown(ev)
{var field;if(IE)
field=ev.srcElement;else
field=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(K==27)
EnglishKeyboard=!EnglishKeyboard;if((K>=8&&K<=13)||K==27||K==32||K==46)
{LCUNI=0;ResetKarModifier();Avro_Cha_Flag=false;Avro_A_Press_Flag=false;}
if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e'))
KeyBoardLayout=1;else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b'))
KeyBoardLayout=(KeyBoardLayout==2?1:2);else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p'))
KeyBoardLayout=(KeyBoardLayout==3?1:3);else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a'))
KeyBoardLayout=(KeyBoardLayout==4?1:4);else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u'))
KeyBoardLayout=(KeyBoardLayout==5?1:5);ChangeKeyboarLayoutStatus();if(K==27)
return false;return true;}
function KeyBoardPress(ev)
{var field;if(IE)
field=ev.srcElement;else
field=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u'))
return false;else if(ev.ctrlKey||ev.altKey)
return true;if(KeyBoardLayout==1||EnglishKeyboard==true)
{return true;}
var CUni="";CUni=MapUnicodeCharacter(C);if(CUni==null)
return true;ProcessCharacter(field,C,K,CUni);if(IE)
event.keyCode=0;LC=C;if(K>29)return false;return true;}