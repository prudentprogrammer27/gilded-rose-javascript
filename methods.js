


export function increaseQuality(classInstance) {
    classInstance.quality += 1; 
    if(classInstance.quality >= 50) {
        classInstance.quality = 50;
        return;
    }
};


export function decreaseQuality(classInstance) {
    if(classInstance.sellIn < 0) {
        classInstance.quality -= 2
    } else {
        classInstance.quality -= 1
    }  
};


export function decreaseSellIn(classInstance) {
    classInstance.sellIn -= 1
};

export function concertFunction(classInstance) {
    if(classInstance.sellIn <= 0) {
        classInstance.sellIn --;
        classInstance.quality = 0;
    }
    if(classInstance.sellIn > 0 && classInstance.sellIn <= 5) {
        classInstance.sellIn --;
        classInstance.quality += 3;
    }
    if(classInstance.sellIn > 5 && classInstance.sellIn <= 10) {
        classInstance.sellIn --;
        classInstance.quality += 2;
    }
}

export function conjuredFunction(classInstance) {
    classInstance.sellIn --;
    classInstance.quality -= 2;
}

