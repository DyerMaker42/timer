alarms = process.argv.slice(2)

const timer = () => {
  input = alarms.sort((a,b)=> a-b);
  for (alarm of input) {
    if((alarm > 0) && alarm % 1 === 0){
    setTimeout(() => {
      process.stdout.write('\x07');
    },(alarm*1000));
    console.log(alarm)
    }
  }
};

timer(alarms)