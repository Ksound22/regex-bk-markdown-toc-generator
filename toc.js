const form = document.querySelector('form');
const generatedToc = document.querySelector('#generated-toc');

// Regular expressions to remove spaces and special characters
const spaceRe = /\s+/g;
const symRe = /[°?+*$∞^%$#@!.,©:&;"=%'_\[\]–\/\\<>|÷™®)£(}{€¥¢—“”‘•~]/g;

function generateToc(e) {
  e.preventDefault();

  // Get the heading texts from the textarea
  const headingTexts = document.querySelector('#toc').value;

  if (headingTexts === '') {
    alert('Please enter some heading texts');
    return;
  }

  // Split the heading texts into an array of lines
  const headingLines = headingTexts.split('\n');

  // Create an initial empty variable to save the table of content inside later
  let tocContent = '';

  // Loop through each line and generate the table of content items
  headingLines.forEach((line) => {
    // Remove any leading and/or trailing spaces from the line
    line = line.trim();

    // skip empty lines
    if (line === '') {
      return;
    }

    // Generate the TOC link based on the heading text(s)
    const anchorLink = line
      .replace(spaceRe, '') // replace spaces with an empty string
      .replace(symRe, '') // replace special characters (symbols)
      .toLowerCase(); // convert the link texts to lowercase characters

    // Create the table of content item and append it to the tocContent variable
    tocContent += `<p>• [${line}](##${anchorLink})</p>`;
  });

  // Insert the generated table of content into the "generated-toc" div element
  generatedToc.innerHTML = tocContent;

  // show the "generated-toc" div
  generatedToc.style.display = 'block';

  // clear the heading texts in the text area
  document.querySelector('#toc').value = '';
}

// Add a submit event to the form
form.addEventListener('submit', generateToc);

/*
What is HTML?
How to Contribute$ To Open Source Like a Boss!!
Why you should Learn to C$ode in Java?

Why you should get into Web3!
Don't Attach Question Mark(?) to Hows!
Stop Scaring Newbies!
Why are you too cold&
*/
