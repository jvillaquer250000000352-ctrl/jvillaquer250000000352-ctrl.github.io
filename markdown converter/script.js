const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let markdown = markdownInput.value;

  //Headings
  markdown = markdown.replace(
    /^\s*### (.+)$/gm,
    "<h3>$1</h3>"
  );

  markdown = markdown.replace(
    /^\s*## (.+)$/gm,
    "<h2>$1</h2>"
  );

  markdown = markdown.replace(
    /^\s*# (.+)$/gm,
    "<h1>$1</h1>"
  );

  //Images
  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  //Links
  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  //Bold
  markdown = markdown.replace(
    /(\*\*|__)(.*?)\1/g,
    "<strong>$2</strong>"
  );

  //Italic
  markdown = markdown.replace(
    /(\*|_)(.*?)\1/g,
    "<em>$2</em>"
  );

  //Blockquotes
  markdown = markdown.replace(
    /^\s*&gt; (.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  markdown = markdown.replace(
    /^\s*> (.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  //Remove line breaks between separate Markdown elements
  markdown = markdown.replace(/\n/g, "");

  return markdown;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
