// DUPLICATE and OUTLINE TEXT FRAMES

var doc = app.activeDocument; 
var iFrame = doc.textFrames;
var frameLen = iFrame.length;
var frameName = null;

for(i=0; i <= frameLen - 1; i++){                                              // iterate through all frames
        if(iFrame[i].contents !="" && iFrame[i].hidden!=true){      // ignor empty and hidden text frames
            frameName = iFrame[i].name;
            iFrame[i].duplicate();
            iFrame[i].createOutline();
            iFrame[i].hidden=true;
        };
    };

// EMBED ALL PLACED IMAGES

var doc = app.activeDocument; 
var iPlaced = doc.placedItems;
var placedLen = iPlaced.length;

for(i=0; i<= placedLen - 1; i++){   
    iPlaced[i].embed();
    };