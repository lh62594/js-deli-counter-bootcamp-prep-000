var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return(`Currently serving ${name}.`)
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var newArray = []
  if(line.length > 0) {
    for(let i = 0; i < line.length; i++) {
      newArray.push(` ${i+1}. ${line[i]}`)
    }
    return(`The line is currently:${newArray}`)
  } else {
    return "The line is currently empty."
  }
}
