let cellArray = document.getElementsByTagName("td");
        let num = 1;
        for(let el of cellArray)
        {
            el.addEventListener('click',clickHandler);
        }

        function clickHandler() {
            inputIcon(this);
            check(this);
        }
        function inputIcon(element)
        {
            let icon;
            if(element.classList.length==0)
            {
                icon = document.createElement("img");
                num++;
                if(num%2==0)
                {
                    element.classList.add("x");  
                    icon.setAttribute('src','x.png');   
                }
                else{
                    element.classList.add("o");  
                    icon.setAttribute('src','o.png');   
                }

                
                element.appendChild(icon);
            }        
        }

        function check(element)
        {
            let coordinate = element.id;
            let x = parseInt(coordinate[0]);
            let y = parseInt(coordinate[1]);
            let initx = x * (-1);
            let inity = y * (-1);
            let flag = true; 
            for(let i=0;i<3;i++)
                {
                    if(cellArray[3*x+y+inity].classList.length!=0)
                        {
                            if(cellArray[3*x+y+inity].classList[0]!=element.classList[0])
                                {
                                    flag = false;
                                    break;
                                }
                                inity++;
                        }
                        else{
                            flag = false;
                            break;
                            }

                            }
                        if(flag == true)
                        {
                            win();
                            return; 
                        }
                    
                    flag = true;
                    for(let i=0;i<3;i++)
                    {
                        if(cellArray[3*(x+initx)+y].classList.length!=0)
                        {
                            if(cellArray[3*(x+initx)+y].classList[0]!=element.classList[0])
                            {
                                flag = false;
                                break;
                            }
                            initx++;
                        }
                        else{
                            flag = false;
                            break;
                            }
                    }
                    if(flag == true)
                            {
                               
                                win();
                                return; 
                            }   
                    if((cellArray[0].classList.length!=0 && cellArray[4].classList.length!=0 && cellArray[8].classList.length!=0) ||
                    (cellArray[2].classList.length!=0 && cellArray[6].classList.length!=0 && cellArray[4].classList.length!=0))
                    {
                    if(((cellArray[0].classList[0]==cellArray[4].classList[0]) && (cellArray[4].classList[0]==cellArray[8].classList[0]))||
                    ((cellArray[2].classList[0]==cellArray[4].classList[0]) && (cellArray[4].classList[0]==cellArray[6].classList[0])))
                        {
                               win();
                                return; 
                        }
                    }
        
                    
        }

        function win()
        {
            for(let el of cellArray)
            {
                el.removeEventListener('click',clickHandler);
            }  
        }