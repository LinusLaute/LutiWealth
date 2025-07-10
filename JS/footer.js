document.addEventListener('DOMContentLoaded', function() {
    // Get the footer element
    const footer = document.createElement('div');
    footer.innerHTML = `
      <div class="contact">
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/myyqegby" method="POST">
          <div class="label-container">
            <label>
              Your email:
              <input type="email" name="email">
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
        
        <p>Email: lautenschlagerlinus@gmail.com</p>
        <a href="faq.html">FAQ</a>
      </div>
  
      <!-- Footer -->
      <footer class="footer-section">
        <div class="footer-content">
          <p>&copy; 2025 Luti Capital. All rights reserved.</p>
        </div>
      </footer>
    `;
  
    // Append the footer to the body
    document.body.appendChild(footer);
  });
  
