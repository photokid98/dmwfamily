fetch("gallery.json")
  .then(res => res.json())
  .then(images => {
    const grid = document.getElementById("gallery-grid");
    images.forEach(({ src, alt }) => {
      const img = document.createElement("img");
      img.src = `gallery/${src}`;
      img.alt = alt || "";
      img.loading = "lazy";
      grid.appendChild(img);
    });
  })
  .catch(err => console.error("Gallery failed to load:", err));
