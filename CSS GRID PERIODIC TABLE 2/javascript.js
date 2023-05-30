// Filters
filterSelection("all");

// Adds the "show" class to selected elements, and removes it from unselected
function filterSelection(c) {
  let elements = document.querySelectorAll(".filterDiv");
  elements.forEach((el) => {
    if (c == "all" || el.classList.contains(c)) el.classList.add("show");
    else el.classList.remove("show");
  });
}

// Add active class to the current control button (highlight it)
let btns = document.querySelectorAll("#myBtnContainer btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var current = document.querySelector("active");
    current.classList.remove("active");
    this.classList.add("active");
  });
});

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modalText");

// Get the array of buttons with a class of open-modal
var buttons = document.querySelectorAll(".open-modal");

// Data source
var data = [
  {
    id: "h1",
    content:
      "The largest HTML heading used to mark up a webpage's main subject",
  },
  {
    id: "style",
    content: "Defines style information (CSS) for a document",
  },
  {
    id: "anchor",
    content:
      "Creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address",
  },
  {
    id: "comment",
    content: "A section of text that is not processed by the web browser",
  },
  {
    id: "svg",
    content:
      "Scalable Vector Graphics. SVG is used to define graphics for the Web",
  },
  {
    id: "ul",
    content:
      "Represents an unordered list of items, typically rendered as a bulleted list",
  },
  {
    id: "br",
    content: "Produces a line break in text (carriage-return)",
  },
  {
    id: "li",
    content:
      "Used to represent an item in a list. It must be contained in a parent element",
  },
  {
    id: "ol",
    content:
      "Represents an ordered list of items — typically rendered as a numbered list.",
  },
  {
    id: "img",
    content: "Used to embed an image in an HTML page.",
  },
  {
    id: "nav",
    content: "Defines a set of navigation links",
  },
  {
    id: "em",
    content:
      "Defines emphasized text. The content inside is typically displayed in italic",
  },
  {
    id: "div",
    content: "Defines a division or a section in an HTML document",
  },
  {
    id: "link",
    content:
      "Defines the relationship between the current document and an external resource",
  },
  {
    id: "i",
    content:
      "Defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic",
  },
  {
    id: "u",
    content:
      "Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation",
  },
  {
    id: "b",
    content:
      "Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance",
  },
  {
    id: "col",
    content:
      "Defines a column within a table and is used for defining common semantics on all common cells",
  },
  {
    id: "data",
    content: "Used to store custom data private to the page or application",
  },
  {
    id: "body",
    content:
      "Defines the document's body. The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc",
  },
  {
    id: "dfn",
    content:
      "Used to indicate the term being defined within the context of a definition phrase or sentence",
  },
  {
    id: "title",
    content:
      "Defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab",
  },
  {
    id: "meta",
    content:
      "Defines metadata about an HTML document. Metadata is data (information) about data",
  },
  {
    id: "abbr",
    content: "Represents an abbreviation or acronym",
  },
  {
    id: "form",
    content:
      "Acontainer for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc",
  },
  {
    id: "h6",
    content: "Defines the least important heading",
  },
  {
    id: "main",
    content: "Represents the dominant content of the <body> of a document",
  },
  {
    id: "html",
    content:
      "Represents the root of an HTML document. The <html> tag is the container for all other HTML elements",
  },
  {
    id: "p",
    content:
      "Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines",
  },
  {
    id: "href",
    content:
      "Specifies the URL of the page the link goes to. If the href attribute is not present, the <a> tag will not be a hyperlink",
  },
];

// For every button in our button array:
buttons.forEach((button) => {
  // Add a click event listener
  button.addEventListener("click", () => {
    // Reset the modal content
    modalContent.textContent = "";

    // Open the modal
    modal.style.display = "block";

    // Get the id of the button via its data attribute
    var id = button.dataset.id;

    // Loop through the datasource variable
    for (var i = 0; i < data.length; i++) {
      // If the current iteration in the loop matches with our button id, output the content
      if (data[i].id == id) {
        modalContent.textContent = data[i].content;

        // Return to stop the function running
        return;
      }
    }

    // If we get to here, the id doesn't exist in the datasource
    modalContent.textContent = "There is no content for this element";
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
