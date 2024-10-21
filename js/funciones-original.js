count=0;
        
        function cellclic(cell){
        if(window.getComputedStyle(cell).backgroundImage=="none"){
            if(count<8){
                //se usa`` para meter texto con salto de linea y permite codigo
            cell.style=`
            background-image: url(./img/queen.png); 
            background-size: contain; 
            background-repeat: no-repeat; 
            background-position: center;`;
            document.getElementById("count").innerHTML=`<p>Contador: ${++count}</p>`;
            
        
            }
            }else{
            cell.style=`
            background-image: none;`
            document.getElementById("count").innerHTML=`<p>Contador: ${--count}</p>`;
        }
            
        }

        function cambiar(r,c){
            var celda = document.getElementById("tablero");
            var r1=r,c1=c,r2=r,c2=c, c3=c, r3=r, c4=c, r4=r ;
            if(count<8){
                for (let i = 0; i < 8; i++) {
                    celda.rows[r].cells[i].style.backgroundColor="#ff0000";
                    celda.rows[i].cells[c].style.backgroundColor="#ff0000";
    
                    if (r1<8 && c1<8) {
                        celda.rows[r1++].cells[c1++].style.backgroundColor="#ff0000";
                    }
    
                    if (r3>-1 && c3<8) {
                        celda.rows[r3--].cells[c3++].style.backgroundColor="#ff0000";
                    }
                    if (r2>-1 && c2>-1) {
                        celda.rows[r2--].cells[c2--].style.backgroundColor="#ff0000";
                    }
                    if (r4<8 && c4>-1) {
                        celda.rows[r4++].cells[c4--].style.backgroundColor="#ff0000";
                    }
    
                    
                }
            }
            
        }

        function limpiar(){
            var celdas = document.getElementsByTagName("td");
            for (let i = 0; i < celdas.length; i++) {
                celdas[i].style.backgroundColor="";
                
            }
            
        }
        
        function solucion1(){
            limpiarimg();
            var celda=document.getElementById("tablero");
            var estilo=`
            background-image:url(./img/queen.png);
            background-size:cover; 
            background-size: contain; 
            background-repeat: no-repeat; 
            background-position: center;`;
            celda.rows[6].cells[0].style=estilo;
            celda.rows[4].cells[1].style=estilo;
            celda.rows[2].cells[2].style=estilo;
            celda.rows[0].cells[3].style=estilo;
            celda.rows[5].cells[4].style=estilo;
            celda.rows[7].cells[5].style=estilo;
            celda.rows[1].cells[6].style=estilo;
            celda.rows[3].cells[7].style=estilo;
            document.getElementById("count").innerHTML=`<p>Contador: ${8}</p>`;
            count=8;
        }
        function solucion2(){
            limpiarimg();
            var celda=document.getElementById("tablero");
            var estilo=`
            background-image:url(./img/queen.png);
            background-size:cover; 
            background-size: contain; 
            background-repeat: no-repeat; 
            background-position: center;`;
            celda.rows[7].cells[0].style=estilo;
            celda.rows[1].cells[1].style=estilo;
            celda.rows[3].cells[2].style=estilo;
            celda.rows[0].cells[3].style=estilo;
            celda.rows[6].cells[4].style=estilo;
            celda.rows[4].cells[5].style=estilo;
            celda.rows[2].cells[6].style=estilo;
            celda.rows[5].cells[7].style=estilo;
            document.getElementById("count").innerHTML=`<p>Contador: ${8}</p>`;
            count=8;
        }
        function solucion3(){
            limpiarimg();
            var celda=document.getElementById("tablero");
            var estilo=`
            background-image:url(./img/queen.png);
            background-size:cover; 
            background-size: contain; 
            background-repeat: no-repeat; 
            background-position: center;`;
            celda.rows[7].cells[0].style=estilo;
            celda.rows[1].cells[1].style=estilo;
            celda.rows[4].cells[2].style=estilo;
            celda.rows[2].cells[3].style=estilo;
            celda.rows[0].cells[4].style=estilo;
            celda.rows[6].cells[5].style=estilo;
            celda.rows[3].cells[6].style=estilo;
            celda.rows[5].cells[7].style=estilo;
            count=8;
        }

        function soluciones() {
            var solucion=document.getElementById("opciones").value;
            
            switch (solucion) {
                case "1":
                    solucion1();
                    break;
                case "2":
                    solucion2();
                    break;
                case "3":
                    solucion3();
                    break;
                        
                default:
                    limpiarimg()
                    break;
            }
        }
        function limpiarimg(){
            var celdas = document.getElementById("tablero").getElementsByTagName("td");
            for (let i = 0; i < celdas.length; i++) {
                celdas[i].style="background-image:none;";
                
            }
            count=0;
            document.getElementById("count").innerHTML=`<p>Contador: ${0}</p>`;
        }

       
        function reiniciar(){
            var cells = document.getElementById("tablero").getElementsByTagName("td");//optiene todos los elementos td del objeto cuyo id sea tablero
            for (let i = 0; i < cells.length; i++) {
                cells[i].style = "background-image:none;";
                
            }
            count=0;
            document.getElementById("count").innerHTML=`<p>Contador: ${0}</p>`;
        }