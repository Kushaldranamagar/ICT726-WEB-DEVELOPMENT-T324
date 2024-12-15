document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('#nav-links a'); // Get all navbar links

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active'); // Toggle the navbar links
        hamburger.classList.toggle('open'); // Toggle the hamburger icon to 'X'
    });

    // Highlight the active link based on the current page
    const currentPage = window.location.pathname; // Get the current page path
    navItems.forEach(link => {
        const linkHref = link.getAttribute('href'); // Get the href attribute of the link
        if (currentPage.includes(linkHref)) {
            link.classList.add('active'); // Add active class to the correct link
        } else {
            link.classList.remove('active'); // Remove active class from others
        }
    });

    // Blog Modal functionality (for "Read More" functionality)
    const modal = document.getElementById('blog-modal');
    const closeBtn = document.querySelector('.close-btn');
    const readMoreButtons = document.querySelectorAll('.read-more');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    const blogData = {
        post1: {
            title: "Timeless Black Leather Looks",
            content: "Discover the bold and timeless appeal of black leather outfits that exude elegance and power..."
        },
        post2: {
            title: "Elegant Blue for Every Occasion",
            content: "Blue dresses are making a statement this season. Find out how to style them effortlessly..."
        }
    };

    // Open modal and show content when "Read More" is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postId = button.getAttribute('data-post');
            const post = blogData[postId];

            modalTitle.textContent = post.title;
            modalContent.textContent = post.content;

            modal.style.display = 'block';
        });
    });

    // Close modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside of modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
