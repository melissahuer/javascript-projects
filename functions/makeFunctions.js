function makeLine(size){
    let line = '';
    for (let i =0; i<size; i++){
        line += '#';
    }
    return line;
}
//console.log(makeLine(5));

function makeRectangle(width,height){
    let rectangle = '';
    for (let i =0; i<height; i++){
            rectangle += makeLine(width)+ "\n";
        }
return rectangle;
//return rectangle.slice(0,-1);??
    }
//onsole.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    let downStairs = '';
    for (let i=0; i<height; i++){
        downStairs += (makeLine(i+1)) + "\n";
    }
    return downStairs;
}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces,numChars){
    let line = '';
    for (let i=0; i<numSpaces; i++){
        line += ' ';
       }
    for (let i=0; i<numChars; i++){
        line += '#';
       }

 for (let i=0; i<numSpaces; i++){
        line += ' ';
       }
    return line;
}
//console.log(makeSpaceLine(10,13));


function makeIsoscelesTriangle(height){
    let triangle = '';
    for (let i=0; i<height; i++){
        triangle += (makeSpaceLine(height -i-1, 2*i +1) + '\n');
    }
    return triangle;
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond = '';
    let triangle = '';
    for (let i=0; i<height; i++){
            triangle += (makeSpaceLine(height -i-1, 2*i +1) + '\n');
            reversedTriangle = String(triangle);
            newReversedTri = reversedTriangle.reversed();
        }
    diamond += makeIsoscelesTriangle +'\n'+ newReversedTri;
    
    return diamond;
}
console.log(makeDiamond(5));