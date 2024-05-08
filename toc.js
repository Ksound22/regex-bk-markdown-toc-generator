const form = document.querySelector('form');
const generatedToc = document.querySelector('#generated-toc');
const alert = document.querySelector('.alert');
const loading = document.querySelector('.loading');

// Regular expressions to remove spaces and special characters
const spaceRe = /\s+/g;
const symRe = /[°?+*$∞^%$#@!.,`©:&;"=%'\[\]–\/\\<>|÷™®)£(}{€¥¢—“”‘•~]/g;

function generateToc(e) {
  e.preventDefault();

  // show loading state
  loading.style.display = 'block';

  // Get the heading texts from the textarea
  const headingTexts = document.querySelector('#toc').value;

  if (headingTexts === '') {
    // Alert the user to enter heading texts
    alert.style.display = 'block';

    // hide the alert after 3 seconds
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);

    // hide generated table of content (if any) since the user is trying to paste in another one
    generatedToc.style.display = 'none';
    loading.style.display = 'none';

    return;
  }

  // Split the heading texts into an array of lines
  const headingLines = headingTexts.split('\n');

  // Create an initial empty variable to save the table of content inside later
  let tocContent = '';

  // Loop through each line and generate the table of content items
  headingLines.forEach((headingLine) => {
    // Remove any leading and/or trailing spaces from the line
    headingLine = headingLine.trim();

    // skip empty lines
    if (headingLine === '') {
      return;
    }

    // Generate the TOC link based on the heading text(s)
    const markdownLink = headingLine
      .replace(spaceRe, '') // replace spaces with an empty string
      .replace(symRe, '') // replace special characters (symbols)
      .toLowerCase(); // convert the link texts to lowercase characters

    // Create the table of content item and append it to the tocContent variable
    tocContent += `<p>* [${headingLine}](#${markdownLink})</p>`;
  });

  // Insert the generated table of content into the "generated-toc" div element
  generatedToc.innerHTML = tocContent;

  // hide alert since there's currently no error at this point
  alert.style.display = 'none';

  // show the "generated-toc" div
  generatedToc.style.display = 'block';

  // clear the heading texts in the text area
  document.querySelector('#toc').value = '';

  loading.style.display = 'none';
}

// Add a submit event to the form
form.addEventListener('submit', generateToc);

/*
What is HTML?
How to Contribute$ To Open Source Like a Boss!!
Why you should Learn to C$ode in Java?

Why you should get into Web3!
Don't Attach Question Mark(?) to Hows!
Stop S`caring` Newbies!
Why are you too cold&
*/
