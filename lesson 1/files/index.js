console.log("Hello from files");

const path = require('path');
const fs = require('fs/promises');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join());
// console.log(path.resolve());

const usersPath = path.join(__dirname, '..','db','users.json');

// crud
class FileOperations {
constructor(path){
    this.path = path;
}
read = async() => {
   const users = await fs.readFile(this.path);
   return JSON.parse(users);
}
display = async () => {
    const users = await this.read();
    console.table(users);
    return true;
}

create = async (data) => {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 4));
}

add = async (data) => {
 const users = await this.read();
 users.push(data);
 return await this.create(users);
}

remove = async () =>{
    return await fs.unlink(this.path);
}

updateOne = async (id, userNama) =>{
    const users = await this.read();
    const idx = users.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    } 
    users[idx] = {id, name : userNama};
    return await this.create(users);
}

removeOne = async (id) => {
    const users = await this.read();
    const idx = users.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    } 
    users.splice(idx, 1); 
    return await this.create(users);
}
}

const file = new FileOperations(usersPath);
// file.display();
// const users = [
//     { "id": "1", "name": "Dima" },
//     { "id": "2", "name": "Sergii" },
//     { "id": "3", "name": "Lena" }
//   ];
// file.create(users);
// file.add({ "id": "4", "name": "Andriy" });
// file.remove();
// file.updateOne("2", "Sergii Molchanov");
// file.removeOne("2");

async function errorHandler(clb, data) {
    try {
        if(!data){
            await clb();
        }else{
            await clb(data);
        }
        
    } catch (error) {
        console.log("custom", error.message);
    }
}

// errorHandler(file.display.bind(file));
errorHandler(file.removeOne, "1");