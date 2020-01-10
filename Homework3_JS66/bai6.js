console.log("Hi there, this is your learning tasks to front-end developer career:")
let complete = ['false','true']
let Process = [
    Pr1 = {
        'Task':'HTML',
        'Complete':complete[0]
    },
    Pr2 = {
        'Task':'CSS',
        'Complete':complete[0]
    },
    Pr3 ={
        'Task':'Basics of Javascript',
        'Complete':complete[0]
    },
    Pr4 ={
        'Task':'Node Package Manager (npm)',
        'Complete':complete[0]
        },
    Pr5 = {
        'Task':'Git',
        'Complete':complete[0]
    },
]


let newPrompt = prompt('Enter your command(new,delete,update,complete)')
switch(newPrompt)
{
	case "new":
	          let newTask =
          	{
	                	'Task':prompt('Enter a new task '),
		               'Complete':complete[0]
           	}
	         Process.push(newTask)
         	break;
  case 'update':
           Process[prompt("Nhập vị trí muốn update")-1].Task=prompt("Nhập giá trị update")
            break;
   case 'delete':
            Process.splice(prompt("Nhập vị trí muốn xoá")-1,1)
            break;
    case 'complete':
            Process[prompt("Nhập vị trí muốn complete")-1].Complete=complete[1]
            break;
}
for(let i=0; i<Process.length; i++)
{
	    console.log((i+1)+'.'+' '+Process[i].Task)
	    console.log('Complete'+':'+' '+Process[i].Complete)
}
