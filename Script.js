function saveArticle() {
  const content = document.getElementById("articleInput").value;
  localStorage.setItem("myArticle", content);
  document.getElementById("status").innerText = "✅ Article saved locally!";
}

function loadArticle() {
  const content = localStorage.getItem("myArticle");
  if (content) {
    document.getElementById("articleInput").value = content;
    document.getElementById("status").innerText = "✅ Article loaded!";
  } else {
    document.getElementById("status").innerText = "❌ No saved article found!";
  }
}
