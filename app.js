const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers');
const notes = require('./notes');
const { describe, demandOption, argv } = require('yargs');


// Define a command
yargs(hideBin(process.argv)).command({
  command: 'read',
  describe: 'this command reads a new note',
  builder : {
      title : {
        describe : 'note title' , 
        demandOption : true , 
        type :'string'
      }
  } ,
  handler(argv) {
    notes.read(argv.title)
  }
})// Parse the arguments (MUST BE LAST)
.command({
    command:'remove',
    describe : 'this command is used to remove notes',
    builder : {
      title : {
        describe : 'Note Title' , 
        demandOption : true , 
        type : 'string'
      }
    },
    handler(argv){
         notes.remove(argv.title)
    }

 })   
 .command({
    command:'add',
    describe : 'this command is used to add notes',
     builder :{
        title : {
            describe : 'Note title',
            demandOption : false ,
            type : 'string'
        } ,
        body : {
            describe : 'Note Body' , 
            demandOption : false , 
            type : 'string'
        }

    },
    handler(argv){
         notes.add(argv.title , argv.body)
    }

 }) 
.command({
  command : 'list' ,
  describe : 'This command is used to list notes' , 
  handler(argv) {
    notes.list()
  }
})
.parse()


// const batata = {
//     'name' :  4 ,
//     'jalil' : true , 
//     'welcome' : {}
// }
// console.log(JSON.stringify(batata))