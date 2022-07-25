var P = [
        {
            username: "olaniyiisrael",
            passward: "how are you?"
        },
        {
            username: "olaniyi",
            passward: "meeting"
        },
        {
            username: "Israel",
            passward: "123people"
        },
        {
            username: "israel",
            passward: "camapeople"
        },
        {
            username: "bosede",
            passward: "alleluya"
        },
        {
            username: "tamara",
            passward: "pleasing"
        }
        ]

        var N=[
            {
                username: "olaniyiisrael",
                timeline: "Hello Bimbola. Welcome to your timeline!"
            },
            {
                username: "olaniyi",
                timeline: "Hello Israelite. Welcome to your timeline"
            },
            {
                username: "Israel",
                timeline: "Hello Olufunmi. Welcome to your timeline"
            },
            {
                username: "israel",
                timeline: "Hello Israel. Welcome to your timeline"
            },
            {
                username: "bosede",
                timeline: "Hello Bosede. Welcome to your timeline"
            },
            {
                username: "tamara",
                timeline: "Hello Tamara. Welcome to your timeline"
            }
        ];

        var UsernamePrompt = document.getElementById("input1")
        UsernamePrompt.addEventListener("keypress",function(event){
        if (event.key==="Enter"){  
        if(UsernamePrompt.value !==""){
            alert("Your Email or Phone Number may be harked!")
        }
        }
        });


        var PasswardPrompt = document.getElementById("input2")
        PasswardPrompt.addEventListener("keypress",function(event){
        if (event.key==="Enter"){  
        if(UsernamePrompt.value !==""){
            alert("Your Password may be harked! Use mixed characters")
        }
        }
        });
        

        var button=document.getElementById("log")
        button.addEventListener(click, signIn)
             
        
        function isUsernameValid(username, passward){
        for (var i=0; i<P.length; i++){
        if ( P[i].username === UsernamePrompt .value && P[i].passward === PasswardPrompt.value){
                return true;
            }
        }
            return false;
        };
      
   
   

         function signIn(username, passward){
        if (isUsernameValid(username, passward)=== true){
            
            for(var i=0; i<N.length; i++){
        if(username.value===N[i].username)
        {alert(N[i].timeline)
        break;}
    }
    alert("welcome")

        }
        else{
            alert("Sorry, wrong username and passward!");
        }
    };



  
    
    