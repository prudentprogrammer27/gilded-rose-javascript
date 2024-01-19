import { expect, describe, it } from "vitest";
import { Item, Cheese, LegendaryItems, CommonItems, items, ConcertTickets, updateQuality, Conjured } from "./gilded-rose.js";
console.log(items);
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new CommonItems("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


describe("updateQuality - brie cheese", () => {
  it("gains quality until = 50", () => {
    const testCheese = new Cheese("Aged Brie", 10, 49);
    items.push(testCheese);

    updateQuality();

    expect(testCheese.quality).toBe(50);
    expect(testCheese.sellIn).toBe(9)
  });
});

describe("updateQuality - brie cheese", () => {
  it("wont go over 50", () => {
    const testCheese = new Cheese("Aged Brie", 10, 50);
    items.push(testCheese);

    updateQuality();

    expect(testCheese.quality).toBe(50);
    expect(testCheese.sellIn).toBe(9)
  });
});


describe("updateQuality - Sulfuras, Hand Of Ragnaros", () => {
  it("Does not lose or gain quality and age", () => {
    const testRagnaros = new LegendaryItems("Sulfuras, Hand Of Ragnaros", 0, 80);
    items.push(testRagnaros);

    updateQuality();

    expect(testRagnaros.quality).toBe(80);
    expect(testRagnaros.sellIn).toBe(0);
  });
});

describe("updateQuality - Cheese Class Item", () => {
  it("As SellIn goes Down Quality Will Increase", () => {
    const test = new Cheese("PepperJack", 4, 20);
    items.push(test);
    updateQuality();

    expect(test.quality).toBe(21);
    expect(test.sellIn).toBe(3);
  });
});

describe("UpdateQuality - Concert Tickets Item", () => {
  it("Increases quality by 2 less than 10 days", () => {
    const testConcert = new ConcertTickets("Concert3", 9, 30);
    items.push(testConcert);
    updateQuality();
    expect(testConcert.quality).toBe(32);
    expect(testConcert.sellIn).toBe(8);
  }) 
})

describe("UpdateQuality - Concert Tickets Item", () => {
  it("Increases quality by 3 less than 5 days", () => {
    const testConcert = new ConcertTickets("Concert4", 4, 30);
    items.push(testConcert);
    console.log(items)
    console.log(testConcert.sellIn)
    updateQuality();
    console.log(testConcert.sellIn)
    expect(testConcert.quality).toBe(33);
    expect(testConcert.sellIn).toBe(3);
  }) 
})

describe("Update Conjured", () => {
  it("Decreases quality by 2 per update", () => {
    const testConjure = new Conjured("Wand", 3, 5);
    items.push(testConjure);
    
    updateQuality();

    expect(testConjure.sellIn).toBe(2)
    expect(testConjure.quality).toBe(3)
  })
})

