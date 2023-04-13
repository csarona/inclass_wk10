
const thumbs = document.querySelectorAll('.thumbnail');
const display = document.getElementById('display');

thumbs.forEach((thumb) => {
  thumb.addEventListener('mouseover', (event) => {
    const altText = event.target.alt;
    const imageUrl = event.target.src;
    display.innerHTML = `<img src="${imageUrl}" alt="${altText}"><p>${altText}</p>`;
  });

  thumb.addEventListener('mouseout', () => {
    display.innerHTML = 'Hover over an image below to display the image and the alt text.';
  });
});

//add image using javascript

// function addImage() {
//     // Create a new img element
//     var img = document.createElement("img");

//     // Set the src attribute to the image URL
//     img.src = "https://example.com/image.jpg";

//     // Add the image element to the HTML document
//     document.getElementById("image-container").appendChild(img);
//   }