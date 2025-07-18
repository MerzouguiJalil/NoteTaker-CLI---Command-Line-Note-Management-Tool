const fs = require('fs')
const chalk = require('chalk')


const  loadData = function() {
    try {
    const buffer = fs.readFileSync('Notes.json')
    const dataJson = buffer.toString()
    return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

const SaveData = function(notes) {
    const JsonData = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',JsonData)

}

const add = function(title , body) {

    const data = loadData()

    if(find(data , title)) {
        console.log(chalk.white.bgRed("This title already exist"))
    }else {
    data.push({
        'title' : title ,
        'body' : body
    })
    console.log(chalk.white.bgGreen("Note inserted succefully"))

}

    SaveData(data)    

}

const find = function(notes , title) {
   const duplicate = notes.filter((notes) => notes.title === title
   )

   if(duplicate.length > 0) return true
   return false 
}


const remove = function(title) {

    const data = loadData()
    const PreservedData = data.filter((data) => data.title !== title)

    if(data.length > PreservedData.length) {
        console.log(chalk.white.inverse("Note deleted succefully"))
    }else {
        console.log(chalk.white.bgRed("Title not founded"))
    }

    SaveData(PreservedData)

}

const list = () => {
    const data = loadData()
    data.forEach((note)=> {
        console.log(note.title)
    });
}


const read = (title) => {
    const data = loadData() 
    const target = data.find((note)=> note.title === title)
    if(target) {
        console.log(chalk.green(title))
        console.log(target.body)
    }else {
        console.log(chalk.bgRed.white('note not found'))
    }

}

module.exports = {
    add    : add  ,
    remove : remove , 
    list   : list , 
    read   :  read
}
