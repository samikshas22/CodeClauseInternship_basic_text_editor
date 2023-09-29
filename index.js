
const input = document.getElementById('text');
const boldb = document.getElementById('bold');
const italicb = document.getElementById('italic');
const lab = document.getElementById('la');
const rab = document.getElementById('ra');
const cab = document.getElementById('ca');
const ucb = document.getElementById('uc');
const lcb = document.getElementById('lc');
const ccb = document.getElementById('cc');
const ptb = document.getElementById('pt');
const icb = document.getElementById('ic');
const cfb = document.getElementById('cf');
const select = document.getElementById('select');

function bold()
{
    input.classList.toggle('bold');
    boldb.classList.toggle('background');
}
function italic()
{
    input.classList.toggle('italic');
    italicb.classList.toggle('background');
}
function la()
{
    input.style.textAlign='left';
    lab.classList.toggle('background');
    rab.classList.remove('background');
    cab.classList.remove('background');  
}
function ra()
{
    rab.classList.toggle('background');
    lab.classList.remove('background');
    cab.classList.remove('background'); 
    input.style.textAlign='right';
}
function ca()
{
    cab.classList.toggle('background');
    rab.classList.remove('background');
    lab.classList.remove('background'); 
    input.style.textAlign='center';
}
function lc(){
    input.style.textTransform='lowercase';
    lcb.classList.toggle('background');
    ucb.classList.remove('background');
    ccb.classList.remove('background');
}
function uc(){
    input.style.textTransform='uppercase';
    ucb.classList.toggle('background');
    lcb.classList.remove('background');
    ccb.classList.remove('background');
}
function cap()
{
    ccb.classList.toggle('background');
    lcb.classList.remove('background');
    ucb.classList.remove('background');
    input.style.textTransform='capitalize';
}

const font = (e)=>{
    input.style.fontSize = e +"px" ; 
}

const color = ( e ) => {
    input.style.backgroundColor = e ; 
}

function pt()
{
    window.print();
}
