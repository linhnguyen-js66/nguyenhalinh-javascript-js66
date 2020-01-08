console.log("Hi there, this is your learning tasks to front-end developer career:")
let Process = [
    Pr1 = {
        'HTML':'',
        'Complete':'false'
    },
    Pr2 = {
        'CSS':'',
        'Complete':'false'
    },
    Pr3 ={
        'Basics of Javascript':'',
        'Complete':'false'
    },
    Pr4 ={
        'Node Package Manager (npm)':'',
        'Complete':'fasle'
        },
    Pr5 = {
        'Git':'',
        'Complete':'false'
    },
]
    for(let i=0;i<Process.length;i++){
        let a0=Object.keys(Process[i])
        let a1=Object.values(Process[i]);
        for(var l=0;l<a1.length;l++)
        {
                  if(a1[l]===null)
                  console.log((i+1) + '.' + ' ' + a0[l])
              if(a1[l]!==null)
                 {
                         console.log(a0[l]+ ':' +' ' +a1[l])	    
                 }
        }
    }