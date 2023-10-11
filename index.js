function generate(){
    var quotes = {
        "-Dalai lama" :'"The purpose of our lives is to be happy."',
        "-John Lennon" : '"Life is what happens when youre busy making other plans."',
        "-Stephen king" : '"Get busy living or get busy dying."',
        "-Mae West": ' "You only live once, but if you do it right, once is enough."',
        "-Thomas A.Edision": '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
        "-Albert Einstien" : '"If you want to live a happy life, tie it to a goal, not to people or things."',
        "-Babe Ruth" : '"Never let the fear of striking out keep you from playing the game."',
        "-Will Smith" : '"Money and success don’t change people; they merely amplify what is already there."',
        "-Steve Jobs": ' "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',
        "-Seneca" : '"Not how long, but how well you have lived is the main thing.”',
        "-Eleanor Roosevelt" : '“If life were predictable it would cease to be life, and be without flavor.”',
        "-Henry Ford" : '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”',
        "-Frank Sinatra" : '“The big lesson in life, baby, is never be scared of anyone or anything.”',
        "-Ernest Hemingway" : '“In order to write about life first you must live it.”',
        "-Meghana" : ' “Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.”',
        "-Leo burnett" : ' “Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”',
        "-Sorean Kierkegaard" : '“Life is not a problem to be solved, but a reality to be experienced.”',
        "-Socrates" : ' "The unexamined life is not worth living."',
        "-Dolly Parton" : '"The way I see it, if you want the rainbow, you gotta put up with the rain."',
        "-Hillary Clinton " : '"Do all the good you can, for all the people you can, in all the ways you can, as long as you can"',
        "-Ashton Kutcher" : ' "Don’t settle for what life gives you; make life better and build something."',
        "-Kobe Bryant" : '"Everything negative – pressure, challenges – is all an opportunity for me to rise."',
        "-Lebron James" :'"I like criticism. It makes you strong." ',
        "-George Clooney" : '"You never really learn much from hearing yourself speak."',
        "-Celine Dion" : '"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."',
        "-John F.Kennedy" : '"Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty."',
        "-Elton John" : '"Live for each second without hesitation."',
        "Albert Einstein" : '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
        "-Helen Keller" : '"Life is a succession of lessons which must be lived to be understood."',
        "-Forrest Gump" : '"My mama always said, life is like a box of chocolates. You never know what youre gonna get."',
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()* authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
    
}