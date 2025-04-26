
/*
 * Copyright (c) 2020. All rights reserved by Woliul Hasan. Fork me on https://github.com/hmwoliul
 */

function Insert(field, text) {
    if (document.selection)
    { field.focus(); sel = document.selection.createRange(); sel.text = text; sel.collapse(true); sel.select(); }
    else if (field.selectionStart || field.selectionStart == '0')
    { var startPos = field.selectionStart; var endPos = field.selectionEnd; var scrollTop = field.scrollTop; startPos = (startPos == -1 ? field.value.length : startPos); field.value = field.value.substring(0, startPos) + text + field.value.substring(endPos, field.value.length); field.focus(); field.selectionStart = startPos + text.length; field.selectionEnd = startPos + text.length; field.scrollTop = scrollTop; }
    else
    { var scrollTop = field.scrollTop; field.value += value; field.focus(); field.scrollTop = scrollTop; }
}
function RemoveNInsert(field, value, len) {
    if (document.selection) {
        field.focus(); sel = document.selection.createRange(); if (field.value.length >= len)
        { sel.moveStart('character', -1 * (len)); }
        sel.text = value; sel.collapse(true); sel.select();
    }
    else if (field.selectionStart || field.selectionStart == 0) { field.focus(); var startPos = field.selectionStart - len; var endPos = field.selectionEnd; var scrollTop = field.scrollTop; startPos = (startPos == -1 ? field.value.length : startPos); field.value = field.value.substring(0, startPos) + value + field.value.substring(endPos, field.value.length); field.focus(); field.selectionStart = startPos + value.length; field.selectionEnd = startPos + value.length; field.scrollTop = scrollTop; } else { var scrollTop = field.scrollTop; field.value += value; field.focus(); field.scrollTop = scrollTop; }
}
function capsDetect(e)
{ if (!e) e = window.event; if (!e) return false; var theKey = e.which ? e.which : (e.keyCode ? e.keyCode : (e.charCode ? e.charCode : 0)); var theShift = e.shiftKey || (e.modifiers && (e.modifiers & 4)); return ((theKey > 64 && theKey < 91 && !theShift) || (theKey > 96 && theKey < 123 && theShift)); }
function HideDIV(id) {
    if (document.getElementById) { document.getElementById(id).style.display = 'none'; }
    else {
        if (document.layers) { document.id.display = 'none'; }
        else { document.all.id.style.display = 'none'; }
    }
}
function ShowDIV(id) {
    if (document.getElementById) { document.getElementById(id).style.display = 'block'; }
    else {
        if (document.layers) { document.id.display = 'block'; }
        else { document.all.id.style.display = 'block'; }
    }
}
function IsBanglaDigit(CUni) {
    if (CUni == '০' || CUni == '১' || CUni == '২' || CUni == '৩' || CUni == '৪' || CUni == '৫' || CUni == '৬' || CUni == '৭' || CUni == '৮' || CUni == '৯')
        return true; return false;
}
function IsBanglaPreKar(CUni) {
    if (CUni == 'ি' || CUni == 'ৈ' || CUni == 'ে')
        return true; return false;
}
function IsBanglaPostKar(CUni) {
    if (CUni == 'া' || CUni == 'ো' || CUni == 'ৌ' || CUni == 'ৗ' || CUni == 'ু' || CUni == 'ূ' || CUni == 'ী' || CUni == 'ৃ')
        return true; return false;
}
function IsBanglaKar(CUni) {
    if (IsBanglaPreKar(CUni) || IsBanglaPostKar(CUni))
        return true; return false;
}
function IsBanglaBanjonborno(CUni) {
    if (CUni == 'ক' || CUni == 'খ' || CUni == 'গ' || CUni == 'ঘ' || CUni == 'ঙ' || CUni == 'চ' || CUni == 'ছ' || CUni == 'জ' || CUni == 'ঝ' || CUni == 'ঞ' || CUni == 'ট' || CUni == 'ঠ' || CUni == 'ড' || CUni == 'ঢ' || CUni == 'ণ' || CUni == 'ত' || CUni == 'থ' || CUni == 'দ' || CUni == 'ধ' || CUni == 'ন' || CUni == 'প' || CUni == 'ফ' || CUni == 'ব' || CUni == 'ভ' || CUni == 'ম' || CUni == 'শ' || CUni == 'ষ' || CUni == 'স' || CUni == 'হ' || CUni == 'য' || CUni == 'র' || CUni == 'ল' || CUni == 'য়' || CUni == 'ং' || CUni == 'ঃ' || CUni == 'ঁ' || CUni == 'ৎ')
        return true; return false;
}
function IsBanglaSoroborno(CUni) {
    if (CUni == 'অ' || CUni == 'আ' || CUni == 'ই' || CUni == 'ঈ' || CUni == 'উ' || CUni == 'ঊ' || CUni == 'ঋ' || CUni == 'ঌ' || CUni == 'এ' || CUni == 'ঐ' || CUni == 'ও' || CUni == 'ঔ')
        return true; return false;
}
function IsBanglaNukta(CUni) {
    if (CUni == 'ং' || CUni == 'ঃ' || CUni == 'ঁ')
        return true; return false;
}
function IsBanglaFola(CUni) {
    if (CUni == "্য" || CUni == "্র")
        return true; return false;
}
function IsBanglaHalant(CUni) {
    if (CUni == '্')
        return true; return false;
}
function IsSpace(C) {
    if (C == ' ' || C == '\t' || C == '\n' || C == '\r')
        return true; return false;
}
function MapKarToSorborno(CUni) {
    var CSorborno = CUni; if (CUni == 'া')
        CSorborno = 'আ'; else if (CUni == 'ি')
            CSorborno = 'ই'; else if (CUni == 'ী')
                CSorborno = 'ঈ'; else if (CUni == 'ু')
                    CSorborno = 'উ'; else if (CUni == 'ূ')
                        CSorborno = 'ঊ'; else if (CUni == 'ৃ')
                            CSorborno = 'ঋ'; else if (CUni == 'ে')
                                CSorborno = 'এ'; else if (CUni == 'ৈ')
                                    CSorborno = 'ঐ'; else if (CUni == 'ো')
                                        CSorborno = 'ও'; else if (CUni == "ো")
                                            CSorborno = 'ও'; else if (CUni == 'ৌ')
                                                CSorborno = 'ঔ'; else if (CUni == "ৌ")
                                                    CSorborno = 'ঔ'; return CSorborno;
}
function MapSorbornoToKar(CUni) {
    var CKar = CUni; if (CUni == 'আ')
        CKar = 'া'; else if (CUni == 'ই')
            CKar = 'ি'; else if (CUni == 'ঈ')
                CKar = 'ী'; else if (CUni == 'উ')
                    CKar = 'ু'; else if (CUni == 'ঊ')
                        CKar = 'ূ'; else if (CUni == 'ঋ')
                            CKar = 'ৃ'; else if (CUni == 'এ')
                                CKar = 'ে'; else if (CUni == 'ঐ')
                                    CKar = 'ৈ'; else if (CUni == 'ও')
                                        CKar = 'ো'; else if (CUni == 'ঔ')
                                            CKar = 'ৌ'; return CKar;
}