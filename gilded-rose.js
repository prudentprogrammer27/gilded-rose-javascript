import { increaseQuality, decreaseQuality, decreaseSellIn, concertFunction, conjuredFunction } from "./methods.js";

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  update() {
    this.sellIn --;
  }
}

export class Cheese extends Item {
  update() {
    super.update();
    increaseQuality(this);
  }
}

export class CommonItems extends Item {
  update() {
    super.update();
    decreaseQuality(this);
  }
}
export class ConcertTickets extends Item {
  update() {
    super.update();
    concertFunction(this);
  }
}
export class LegendaryItems extends Item {
  update() {
    //do nothing
  }
}
export class Conjured extends Item{
  update() {
    super.update();
    conjuredFunction(this);
  }
}
export let items = [];

items.push(new CommonItems ("+5 Dexterity Vest", 10, 20));
items.push(new Cheese ("Aged Brie", 2, 0));
items.push(new CommonItems ("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItems ("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new ConcertTickets ("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured ("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.update();
  }
}
//     if (item instanceof Cheese) {
//       update(item);
//     }

//     if (item instanceof CommonItems) {
//       decreaseQuality(item);
//       decreaseSellIn(item);
//       continue;
//     }

//     if (item instanceof LegendaryItems) {
//       continue;
//     }

//     if (item instanceof ConcertTickets) {
//       concertFunction(item);
//     }
//     if (item instanceof Conjured) {
//       conjuredFunction(item)
//     }
//   } 
// }