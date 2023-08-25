// Selecting DOM elements
const wrapper = document.querySelector('.wrapper'); // Selecting the wrapper element
const question = document.querySelector('.question'); // Selecting the question element
const yesBtn = document.querySelector('.yes-btn'); // Selecting the "Yes" button
const noBtn = document.querySelector('.no-btn'); // Selecting the "No" button

// Getting the bounding rectangles of elements
const wrapperRect = wrapper.getBoundingClientRect(); // Getting the bounding rectangle of the wrapper element
const noBtnRect = noBtn.getBoundingClientRect(); // Getting the bounding rectangle of the "No" button

// Adding click event listener to the "Yes" button
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I LOVE YOU TOO :)'; // Changing the question text
});

// Adding mouseover event listener to the "No" button
noBtn.addEventListener('mouseover', () => {
    // Generating random positions within the bounds of the wrapper
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    // Applying the random positions to the "No" button
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
