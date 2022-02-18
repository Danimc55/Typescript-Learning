//Type testing
function add(n1: number, n2: number){
    return(n1 + n2);
}

//enum
enum role {admin, worker, test};

const person: {name: string, age: number, hobbies: string[], role: [number, string], test: role} = {
    'name': 'danijel',
    'age': 30,
    'hobbies': ['playing guitar', 'driving fast cars'],
    'role': [123124,'string'],
    'test': role.worker
}   

//Fooling around with some classes and types
class worker{
    name: string;
    workerNumber: number;
    isOnShift: boolean;

    constructor(name: string, workerNumber: number, isOnShift: boolean){
        this.name = name;
        this.workerNumber = workerNumber;
        this.isOnShift = isOnShift;
    }
}

let workers = [new worker('Danijel', 0, false), new worker('Goran', 2, true)];
workers.forEach(worker => {
    console.log(worker.name);
}); 


