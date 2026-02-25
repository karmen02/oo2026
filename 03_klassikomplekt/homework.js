var Article = /** @class */ (function () {
    function Article(title, author, wordcount, date) {
        this.title = title;
        this.author = author;
        this.wordcount = wordcount;
        this.date = date;
    }
    return Article;
}());
var Newspaper = /** @class */ (function () {
    function Newspaper(title) {
        this.articles = [];
        this.title = title;
    }
    return Newspaper;
}());
var Company = /** @class */ (function () {
    function Company(name, workers) {
        this.name = name;
        this.workers = workers;
    }
    return Company;
}());
var article1 = new Article("Why are dogs a human's best friends?", "Honey The Sheep", 780, "2026-12-01");
var article2 = new Article("The current political state of Europe", "The European Fanatic", 1300, "2024-03-12");
var article3 = new Article("What to see in cinemas?", "Cinema Lover", 450, "2025-04-12");
var article4 = new Article("The best places to travel to in 2026", "Travelling Butterfly", 1300, "2026-02-14");
var article5 = new Article("How have Finno-Ugric languages kept alive a history spanning over thousands of years", "History Lover", 2500, "2025-04-13");
var article6 = new Article("Coziest home decor worth a buy in 2025", "Decorating Rabbit", 700, "2025-02-02");
var newspaper1 = new Newspaper("History in short");
var newspaper2 = new Newspaper("Everyday tips");
// Newspaper1 articles
newspaper1.articles = [article2, article5];
// Newspaper 2 articles
newspaper2.articles = [article1, article3, article4, article6];
var company1 = new Company("News Co", 87);
// Array of all newspapers
var allNewspapers = [newspaper1, newspaper2];
