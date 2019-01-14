var color0='red';
var color1='none';
var color2='none';
var color3='none';
var color4='none';
var color5='none';
var color6='none';
var slc = document.getElementById("funcOptions");
var op0 = document.getElementById("orig");
var op1 = document.getElementById("pol1");
var op2 = document.getElementById("pol2");
var op3 = document.getElementById("pol3");
var op4 = document.getElementById("pol4");
var op5 = document.getElementById("pol5");
var op6 = document.getElementById("pol6");
var polN= document.getElementById("polN");
polN.value=10;
op0.checked=true;
var parametersE,parametersSEN,parametersCOS,parametersLOG;

plot(1);
function plot(graf) {
  let N=polN.value;
  switch(graf){
    case 1: console.log('seno');
            let cadN=sin(N);
            parametersSEN = {
              target: '#myFunction',
              tip: {
                xLine: true,    // dashed line parallel to y = 0
                yLine: true,    // dashed line parallel to x = 0
                renderer: function (x, y, index) {
                  // the returning value will be shown in the tip
                }
              },
              data: [
              {  
                graphType: 'polyline',
                color: color0,
                fn: function (scope) {
                  var x = scope.x
                  return Math.sin(x);
                }
              },
              {
                graphType:'polyline',
                fn: 'x',
                color: color1
              },
              {
                graphType:'polyline',
                fn: 'x+(0x^2)/2!',
                color: color2
              },
              {
                graphType:'polyline',
                fn: 'x-(x*x*x)/3!',
                color: color3
              },
              {
                graphType:'polyline',
                fn: 'x-(x*x*x)/3!',
                color: color4
              },
              {
                graphType:'polyline',
                fn: 'x-(x^3)/3!+(x^5)/5!',
                color: color5
              },
              {
                graphType: 'polyline',
                color: color6,
                fn: cadN
              }
              ],
              plugins: [
                functionPlot.plugins.zoomBox()
              ],
              disableZoom:false,
              grid: true,
              yAxis: {domain: [-1.5, 1.5]},
              xAxis: {domain: [-5,10 ]}
            };
            if(polN.value%2===0){
              var aux=polN.value;
              aux++;
              polN.value=aux;
            }
            functionPlot(parametersSEN);
    break;

    case 2: console.log('coseno');
            let cadN2=fcos(N);
            parametersCOS = {
              target: '#myFunction',
              tip: {
                xLine: true,    // dashed line parallel to y = 0
                yLine: true,    // dashed line parallel to x = 0
                renderer: function (x, y, index) {
                  // the returning value will be shown in the tip
                }
              },
              data: [{  
                graphType: 'polyline',
                color: color0,
                fn: function (scope) {
                  var x = scope.x
                  return Math.cos(x);
                }
              },
              {
                graphType:'polyline',
                fn: '1',
                color: color1
              },
              {
                graphType:'polyline',
                fn: '1-(x^2)/2!',
                color: color2
              },
              {
                graphType:'polyline',
                fn: '1-(x^2)/2!+(0x^3)/3!',
                color: color3
              },
              {
                graphType:'polyline',
                fn: '1-(x^2)/2!+(x^4)/4!',
                color: color4
              },
              {
                graphType:'polyline',
                fn: '1-(x^2)/2!+(x^4)/4!',
                color: color5
                
              },
              {
                graphType: 'polyline',
                color: color6,
                fn: cadN2
              }
              ],
              plugins: [
                functionPlot.plugins.zoomBox()
              ],
              disableZoom:false,
              grid: true,
              yAxis: {domain: [-1.5, 1.5]},
              xAxis: {domain: [-5,10 ]}
            };
            if(polN.value%2!=0){
              var aux=polN.value;
              aux++;
              polN.value=aux;
            }
            functionPlot(parametersCOS);
    break;

    case 3: console.log("ln(x)");
            let cadN3=ln(N);
            parametersLOG = {
              target: '#myFunction',
              tip: {
                xLine: true,    // dashed line parallel to y = 0
                yLine: true,    // dashed line parallel to x = 0
                renderer: function (x, y, index) {
                  // the returning value will be shown in the tip
                }
              },
              data: [{  
                graphType: 'polyline',
                color: color0,
                fn: function (scope) {
                  var x = scope.x
                  return Math.log(x);
                }
              },
              {
                graphType: 'polyline',
                color: color1,
                fn: '(x-1)'
              },
              {
                graphType: 'polyline',
                color: color2,
                fn: '(x-1)-(x-1)^2/2'
              },
              {
                graphType: 'polyline',
                color: color3,
                fn: '(x-1)-(x-1)^2/2+(x-1)^3/3'                
              },
              {
                graphType: 'polyline',
                color: color4,
                fn: '(x-1)-(x-1)^2/2+(x-1)^3/3-(x-1)^4/4'                                
              },
              {
                graphType: 'polyline',
                color: color5,
                fn: '(x-1)-(x-1)^2/2+(x-1)^3/3-(x-1)^4/4+(x-1)^5/5'                                
              },
              {
                graphType: 'polyline',
                color: color6,
                fn: cadN3
              }
              ],
              plugins: [
                functionPlot.plugins.zoomBox()
              ],
              disableZoom:false,
              grid: true,
              yAxis: {domain: [-5, 5]},
              xAxis: {domain: [-0.2,3 ]}
            };
            functionPlot(parametersLOG);
    break;

    case 4: console.log('e^x');
            parametersE = {
              target: '#myFunction',
              tip: {
                xLine: true,    // dashed line parallel to y = 0
                yLine: true,    // dashed line parallel to x = 0
                renderer: function (x, y, index) {
                  // the returning value will be shown in the tip
                }
              },
              data: [
              {  
                graphType: 'polyline',
                color: color0,
                fn: function (scope) {
                  // scope.x = Number
                  var x = scope.x
                  return Math.pow(Math.E,x);
                }
              },
              { 
                graphType:'polyline',
                fn: '1+x',
                color: color1
              },
              {
                graphType:'polyline',
                fn: '1+x+.5*x*x',
                color: color2,
              },
              {
                graphType:'polyline',
                fn: '1+x+.5*x*x+(1/6)*x*x*x',
                color: color3
              },
              {
                graphType:'polyline',
                fn: '1+x+.5*x*x+(1/6)*x*x*x+(1/24)*x*x*x*x',
                color: color4
              },
              {
                graphType:'polyline',
                fn: '1+x+.5*x*x+(1/6)*x*x*x+(1/24)*x*x*x*x+(1/120)*x*x*x*x*x',
                color: color5
              },
              {
              // force the use of builtIn math
                graphType: 'polyline',
                color: color6,
                fn: function (scope) {
                  var sum=0;
                  var n=N;
                  var x = scope.x
                  for(var i=0;i<n;i++)
                    sum+=Math.pow(x,i)/factorial(i);
                  return sum
                }
              }
              ],
              plugins: [
                functionPlot.plugins.zoomBox()
              ],
              disableZoom:false,
              grid: true,
              yAxis: {domain: [-0, 10]},
              xAxis: {domain: [-10,10 ]}
            };
            functionPlot(parametersE);
    break;
  }
  
}

function color(){
  
  if(op0.checked===false){
    console.log("cambio1");
    color0='none';
  }
  else {color0='red';}

  if(op1.checked===false)
    color1='none';
  else
    color1='chartreuse';
  if(op2.checked===false)
    color2='none';
  else
    color2='darkorange';
  if(op3.checked===false)
    color3='none';
  else
    color3='green';
  if(op4.checked===false)
    color4='none';
  else
    color4='lightseagreen';
  if(op5.checked===false)
    color5='none';
  else
    color5='fuchsia';
  if(op6.checked===false)
    color6='none';
  else
    color6='black';
  switch(slc.value){
    case 'sen': plot(1);
    break;
    case 'cos': plot(2);
    break;
    case 'ln': plot(3);
    break;
    case 'e': plot(4);
    break;
  }
}
/********  FUNCIONES DE APOYO  *************/
function factorial(num){
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}

function sin(grade){
  if(grade%2===0)
    grade++;
  console.log("grade: "+grade);
  const seg1="-(x^",seg2="+(x^",seg3=")/",seg4="!";
  var cadena="x";
  var signo=-1;
  for(var i=3; i<=grade; i+=2){
    if(signo===-1)
      res=cadena.concat(seg1);
    else
      res=cadena.concat(seg2);

    var na=i.toString();
    cadena=res.concat(na,seg3,na,seg4);
    signo= -signo;
  }
  res= cadena;
  return res;
}
function fcos(grade){
  if(grade%2!=0)
    grade++;
  console.log("grade: "+grade);
  const seg1="-(x^",seg2="+(x^",seg3=")/",seg4="!";
  var cadena="1";
  var signo=-1;
  for(var i=2; i<=grade; i+=2){
    if(signo===-1)
      res=cadena.concat(seg1);
    else
      res=cadena.concat(seg2);

    var na=i.toString();
    cadena=res.concat(na,seg3,na,seg4);
    signo= -signo;
  }
  res= cadena;
  return res;
}
function ln(grade){

  console.log("grade: "+grade);
  const seg1="-(x-1)^",seg2="+(x-1)^",seg3="/";
  var cadena="(x-1)";
  var signo=-1;
  for(var i=2; i<=grade; i++){
    if(signo===-1)
      res=cadena.concat(seg1);
    else
      res=cadena.concat(seg2);

    var na=i.toString();
    cadena=res.concat(na,seg3,na);
    signo= -signo;
  }
  res= cadena;
  return res;
}