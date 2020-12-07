window.onload = function(){
                document.getElementById("check-results").addEventListener("click", check);
            };
            
            function check(){
                var x = document.getElementsByTagName("input");
                var correctAnswer = ["summer", "more lovely", "winds", "darling buds", "lease"];
                var count = 0;
                for(var i = 0; i<x.length; i++)
                    {
                        if(x[i].value === correctAnswer[i])
                            {
                                count += 1;
                            }
                    }
                if(count === correctAnswer.length)
                    {
                        window.alert("You got all the inputs correct, congratulations");
                        var mywindow = window.open("profile.html", "_self");
                    }
                
                else if(count>=2 && count <5)
                    {
                        window.alert("You are almost there, try again");
                        var mywindow = window.open("test.html", "_self");
                    }
                
                else{
                    window.alert("You are not even close");
                    var mywindow = window.open("test.html", "_self");
                }
            }