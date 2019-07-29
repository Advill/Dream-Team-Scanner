# Dream Team Scanner (DTS)
Written by Michael McGloin, Katelynn Bourg, Nicholas Caiafa,
and Akshitha Indoori

This project won the 2019 SWIFT intern hackathon!

## Purpose
This hackathon project was created to solve the problem of time-consuming
expense reports required by swift for every purchase made with company cards.

The solution we have created leverages Google Cloud Vision image recognition to
automatically pull important information from pictures of receipts.This allows
users to simply snap a picture of the receipt on their phone, upload the picture
to a website, and have an expense report entry generated where the user simply
needs to check all information for correctness and submit.

## Implementation
This project is implemented in Node.js and intended to be run on Google's cloud
server hosting solution, though it works perfectly fine on a local machine with
Google cloud vision credentials. The main libraries used are `express.js`,
`multer`, `handlebars.js`, `moment.js`, and of course `google-cloud/vision`
(GCV).

The frontend was was created using `nicepage` html templating engine, but is
static. The only non-static page is the `/upload` response page, which is
created using `handlebar` templates. 

The backend makes use of `multer` for better post requests, `express.js` for
routing, `moment.js` for date parsing, and GCV for image parsing.

## Running
The only prerequisite is credentials with access to Google Cloud Vision linked
under the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.

After that is set up simply `git clone` this repository somewhere on your
computer, then:

```bash
cd the-dream-team-repo
npm install
npm start
```

The server should output to console when it is finished setting up. The output
will note what port it is currently running on, which by default is `8080`.

Now go to `localhost:8080/` on the browser of your choice to see the working
product.

## Future plans
In order to prepare this app for SWIFT's production network there are a few
required improvements and a few wishlist items.

### Required
In order of importance

#### Integration into SWIFT's networks
As it stands, this program is generally just a proof of concept showing that the
software works and can be used to scrape information from receipts. Therefore,
the only thing it does with the collected data is show it back to the user.
This would need to be changed to actually interface with SWIFT's internal
expense report system.

#### Update of parsing
Currently there are a few hopeful assumptions about where data exists in
the returned array of parsed receipt data. The name of the vendor is somewhere
at the top, the total dollar amount comes after a `TOTAL` string, and the date
is the first thing that `moment.js` decides is a date. all these things could be
untrue based on receipt type, picture quality, or GCV anomalies. 

### Not Required, but important QOL
In no particular order

#### Better frontend Implementation
Creating the frontend from scratch with web frameworks like angular would mean
a more consistent look, as well as functionality expected from what the concept
frontend promises.

#### AI implementation
While I am no AI expert, I think that there are some reasonable use cases for
identifying what data goes with what number on a receipt with AI. The
information that GCV puts out is very detailed, including coordinates for box
around the text found, which could be used to locate values in the same row.

#### Switch to Tesseract
SWIFT, being a security-intensive company, is understandably uneasy about
sending financial information to Google willy-nilly. The functionality is not
tied to GCV, at least without AI implementation, and can be moved to
[tesseract](https://github.com/tesseract-ocr/tesseract), an open-source OCR
that can be run locally. We lose out on google's highly trained AI algorithim
but in return gain complete autonomy.

## Final note
This product does not work very well, if at all. And though compared to
[My last hackathon](https://github.com/Advill/Veri-Safe) this project runs like
a dream, it is still code written during a hackathon, while I was learning
nearly every tool I used, and with thought only going into getting the code to
run both on my Arch box and whatever google cloud shell is running. I make no
promises as far as it running anywhere else (though there isnt really a reason
it wouldn't, as long as npm works) and would generally recommend not going
through the trouble of setting this up at all.

Of course, this software comes as is, run at your own risk, etc. etc.
