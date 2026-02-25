class Article {
    title: string;
    author: string;
    wordcount: number;
    date: string;

    constructor(title: string, author: string, wordcount: number, date: string) {
        this.title = title;
        this.author = author;
        this.wordcount = wordcount;
        this.date = date;
    }
}

class Newspaper {
    title: string;
    articles: Article[] = [];

    constructor(title: string) {
        this.title = title;
    }

}
class Company {
    name: string;
    workers: number;

    constructor(name: string, workers: number) {
        this.name = name;
        this.workers = workers;
    }
}

let article1 = new Article("Why are dogs a human's best friends?", "Honey The Sheep", 780, "2026-12-01");
let article2 = new Article("The current political state of Europe", "The European Fanatic", 1300, "2024-03-12");
let article3 = new Article("What to see in cinemas?", "Cinema Lover", 450, "2025-04-12");
let article4 = new Article("The best places to travel to in 2026", "Travelling Butterfly", 1300, "2026-02-14");
let article5 = new Article("How have Finno-Ugric languages kept alive a history spanning over thousands of years", "History Lover", 2500, "2025-04-13");
let article6 = new Article("Coziest home decor worth a buy in 2025", "Decorating Rabbit", 700, "2025-02-02");


let newspaper1 = new Newspaper("History in short");
let newspaper2 = new Newspaper("Everyday tips");

// Newspaper1 articles
newspaper1.articles = [article2, article5];

// Newspaper 2 articles
newspaper2.articles = [article1, article3, article4, article6];

let company1 = new Company("News Co", 87);

// Array of all newspapers
const allNewspapers = [newspaper1, newspaper2];

