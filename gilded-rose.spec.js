import { expect, describe, it } from "vitest";
import { Item, Cheese, items, updateQuality } from "./gilded-rose.js";
console.log(items);
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


describe("updateQuality - brie cheese", () => {
  it("gains quality until = 50", () => {
    const testCheese = new Item("Aged Brie", 10, 49);
    items.push(testCheese);

    updateQuality();

    expect(testCheese.quality).toBe(50);
    expect(testCheese.sellIn).toBe(9)
  });
});

describe("updateQuality - brie cheese", () => {
  it("wont go over 50", () => {
    const testCheese = new Item("Aged Brie", 10, 50);
    items.push(testCheese);

    updateQuality();

    expect(testCheese.quality).toBe(50);
    expect(testCheese.sellIn).toBe(9)
  });
});


describe("updateQuality - Sulfuras, Hand Of Ragnaros", () => {
  it("Does not lose or gain quality and age", () => {
    const testRagnaros = new Item ("Sulfuras, Hand Of Ragnaros", 0, 80);
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