document.addEventListener('DOMContentLoaded', () => {
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');

    // Show Sign In form and hide Sign Up form
    const showSignIn = () => {
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
    };

    // Show Sign Up form and hide Sign In form
    const showSignUp = () => {
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
    };

    // Tab click events
    signInTab.addEventListener('click', showSignIn);
    signUpTab.addEventListener('click', showSignUp);

    // Link click events
    switchToSignUp.addEventListener('click', showSignUp);
    switchToSignIn.addEventListener('click', showSignIn);
});




// document.querySelectorAll('.recipe-card').forEach(card => {
//     const stars = card.querySelectorAll('.star');
//     const rateButton = card.querySelector('.rate-button');

//     let fixedRating = -1;

//     stars.forEach((star, index) => {
//         star.addEventListener('mouseover', () => {
//             if (fixedRating === -1) {
//                 stars.forEach((s, i) => s.classList.toggle('hovered', i <= index));
//             }
//         });

//         star.addEventListener('mouseout', () => {
//             if (fixedRating === -1) {
//                 stars.forEach(s => s.classList.remove('hovered'));
//             }
//         });

//         star.addEventListener('click', () => {
//             fixedRating = index;
//             stars.forEach((s, i) => s.classList.toggle('fixed', i <= index));
//         });
//     });

//     rateButton.addEventListener('click', () => {
//         fixedRating = -1;
//         stars.forEach(s => {
//             s.classList.remove('fixed', 'hovered');
//         });
//     });
// });